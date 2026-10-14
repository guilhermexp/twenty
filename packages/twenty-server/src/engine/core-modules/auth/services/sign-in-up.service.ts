import { Injectable, Logger } from '@nestjs/common';
import { InjectDataSource, InjectRepository } from '@nestjs/typeorm';

import { msg } from '@lingui/core/macro';
import { WorkspaceActivationStatus } from 'twenty-shared/workspace';
import { Repository, type DataSource, type QueryRunner } from 'typeorm';
import { v4 } from 'uuid';

import { EventLogEmitterService } from 'src/engine/core-modules/event-logs/emit/event-log-emitter.service';
import { USER_SIGNUP_EVENT } from 'src/engine/core-modules/event-logs/emit/events/workspace-event/user/user-signup';
import { WORKSPACE_CREATED_EVENT } from 'src/engine/core-modules/event-logs/emit/events/workspace-event/workspace/workspace-created';
import { type AppTokenEntity } from 'src/engine/core-modules/app-token/app-token.entity';
import { ApplicationService } from 'src/engine/core-modules/application/application.service';
import {
  AuthException,
  AuthExceptionCode,
} from 'src/engine/core-modules/auth/auth.exception';
import {
  PASSWORD_REGEX,
  compareHash,
  hashPassword,
} from 'src/engine/core-modules/auth/auth.util';
import {
  type AuthProviderWithPasswordType,
  type ExistingUserOrPartialUserWithPicture,
  type PartialUserWithPicture,
  type SignInUpBaseParams,
  type SignInUpNewUserPayload,
} from 'src/engine/core-modules/auth/types/signInUp.type';
import { SubdomainManagerService } from 'src/engine/core-modules/domain/subdomain-manager/services/subdomain-manager.service';
import { MetricsService } from 'src/engine/core-modules/metrics/metrics.service';
import { MetricsKeys } from 'src/engine/core-modules/metrics/types/metrics-keys.type';
import { OnboardingService } from 'src/engine/core-modules/onboarding/onboarding.service';
import { UserWorkspaceService } from 'src/engine/core-modules/user-workspace/user-workspace.service';
import { UserService } from 'src/engine/core-modules/user/services/user.service';
import { UserEntity } from 'src/engine/core-modules/user/user.entity';
import { WorkspaceInvitationService } from 'src/engine/core-modules/workspace-invitation/services/workspace-invitation.service';
import { AuthProviderEnum } from 'src/engine/core-modules/workspace/types/workspace.type';
import { WorkspaceEntity } from 'src/engine/core-modules/workspace/workspace.entity';
import { WorkspaceCacheService } from 'src/engine/workspace-cache/services/workspace-cache.service';
import { isWorkEmail } from 'src/utils/is-work-email';

// oxlint-disable-next-line twenty/inject-workspace-repository
export class SignInUpService {
  private readonly logger = new Logger(SignInUpService.name);

  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
    @InjectRepository(WorkspaceEntity)
    private readonly workspaceRepository: Repository<WorkspaceEntity>,
    private readonly workspaceInvitationService: WorkspaceInvitationService,
    private readonly userWorkspaceService: UserWorkspaceService,
    private readonly onboardingService: OnboardingService,
    private readonly subdomainManagerService: SubdomainManagerService,
    private readonly userService: UserService,
    private readonly metricsService: MetricsService,
    private readonly workspaceCacheService: WorkspaceCacheService,
    private readonly applicationService: ApplicationService,
    private readonly eventLogEmitterService: EventLogEmitterService,
    @InjectDataSource()
    private readonly dataSource: DataSource,
  ) {}

  async computePartialUserFromUserPayload(
    newUserPayload: SignInUpNewUserPayload,
    authParams: AuthProviderWithPasswordType['authParams'],
  ): Promise<PartialUserWithPicture> {
    if (!newUserPayload?.email) {
      throw new AuthException(
        'Email is required',
        AuthExceptionCode.INVALID_INPUT,
        {
          userFriendlyMessage: msg`Email is required`,
        },
      );
    }

    const partialNewUser: PartialUserWithPicture = {
      email: newUserPayload.email,
      firstName: newUserPayload.firstName ?? '',
      lastName: newUserPayload.lastName ?? '',
      picture: newUserPayload.picture ?? '',
      locale: newUserPayload.locale ?? 'en',
      isEmailVerified: newUserPayload.isEmailAlreadyVerified,
    };

    if (authParams.provider === AuthProviderEnum.Password) {
      partialNewUser.passwordHash = await this.generateHash(
        authParams.password,
      );
    }

    return partialNewUser;
  }

  async signInUp(
    params: SignInUpBaseParams &
      ExistingUserOrPartialUserWithPicture &
      AuthProviderWithPasswordType,
  ) {
    if (params.workspace && params.invitation) {
      return {
        workspace: params.workspace,
        user: await this.signInUpWithPersonalInvitation({
          invitation: params.invitation,
          userData: params.userData,
        }),
      };
    }

    if (params.workspace) {
      const updatedUser = await this.signInUpOnExistingWorkspace({
        workspace: params.workspace,
        userData: params.userData,
      });

      return { user: updatedUser, workspace: params.workspace };
    }

    return await this.signUpOnNewWorkspace(params.userData);
  }

  async generateHash(password: string) {
    const isPasswordValid = PASSWORD_REGEX.test(password);

    if (!isPasswordValid) {
      throw new AuthException(
        'Password too weak',
        AuthExceptionCode.INVALID_INPUT,
        {
          userFriendlyMessage: msg`Password too weak`,
        },
      );
    }

    return await hashPassword(password);
  }

  async validatePassword({
    password,
    passwordHash,
  }: {
    password: string;
    passwordHash: string;
  }) {
    const isValid = await compareHash(password, passwordHash);

    if (!isValid) {
      throw new AuthException(
        'Wrong password',
        AuthExceptionCode.FORBIDDEN_EXCEPTION,
        {
          userFriendlyMessage: msg`Wrong password`,
        },
      );
    }
  }

  private async signInUpWithPersonalInvitation(
    params: {
      invitation: AppTokenEntity;
    } & ExistingUserOrPartialUserWithPicture,
  ) {
    if (!params.invitation) {
      throw new AuthException(
        'Invitation not found',
        AuthExceptionCode.FORBIDDEN_EXCEPTION,
      );
    }

    const email =
      params.userData.type === 'newUserWithPicture'
        ? params.userData.newUserWithPicture.email
        : params.userData.existingUser.email;

    if (!email) {
      throw new AuthException(
        'Email is required',
        AuthExceptionCode.INVALID_INPUT,
        {
          userFriendlyMessage: msg`Email is required`,
        },
      );
    }

    const invitationValidation =
      await this.workspaceInvitationService.validatePersonalInvitation({
        workspacePersonalInviteToken: params.invitation.value,
        email,
      });

    if (!invitationValidation?.isValid) {
      throw new AuthException(
        'Invitation not found',
        AuthExceptionCode.FORBIDDEN_EXCEPTION,
      );
    }

    const updatedUser = await this.signInUpOnExistingWorkspace({
      workspace: invitationValidation.workspace,
      userData: params.userData,
      roleId: params.invitation.context?.roleId,
    });

    await this.workspaceInvitationService.invalidateWorkspaceInvitation(
      invitationValidation.workspace.id,
      email,
    );

    await this.userService.markEmailAsVerified(updatedUser.id);

    return updatedUser;
  }

  private async throwIfWorkspaceIsNotReadyForSignInUp(
    workspace: WorkspaceEntity,
    user: ExistingUserOrPartialUserWithPicture,
  ) {
    if (
      workspace.activationStatus === WorkspaceActivationStatus.ACTIVE ||
      workspace.activationStatus === WorkspaceActivationStatus.CREATED
    ) {
      return;
    }

    if (user.userData.type !== 'existingUser') {
      throw new AuthException(
        'Workspace is not ready to welcome new members',
        AuthExceptionCode.FORBIDDEN_EXCEPTION,
        {
          userFriendlyMessage: msg`Workspace is not ready to welcome new members`,
        },
      );
    }

    const userWorkspaceExists =
      await this.userWorkspaceService.checkUserWorkspaceExists(
        user.userData.existingUser.id,
        workspace.id,
      );

    if (!userWorkspaceExists) {
      throw new AuthException(
        'Workspace is not ready to welcome new members',
        AuthExceptionCode.FORBIDDEN_EXCEPTION,
        {
          userFriendlyMessage: msg`Workspace is not ready to welcome new members`,
        },
      );
    }
  }

  async signInUpOnExistingWorkspace(
    params: {
      workspace: WorkspaceEntity;
      roleId?: string | null;
    } & ExistingUserOrPartialUserWithPicture,
  ) {
    await this.throwIfWorkspaceIsNotReadyForSignInUp(params.workspace, params);

    const isNewUser = params.userData.type === 'newUserWithPicture';

    if (isNewUser) {
      const userData = params.userData as {
        type: 'newUserWithPicture';
        newUserWithPicture: PartialUserWithPicture;
      };

      const user = await this.saveNewUser(userData.newUserWithPicture, {
        canAccessFullAdminPanel: false,
      });

      await this.activateOnboardingForUser({
        user,
        workspace: params.workspace,
        shouldShowConnectAccountStep: true,
      });

      await this.userWorkspaceService.addUserToWorkspaceIfUserNotInWorkspace(
        user,
        params.workspace,
        params.roleId,
      );

      return user;
    }

    const userData = params.userData as {
      type: 'existingUser';
      existingUser: UserEntity;
    };

    const user = userData.existingUser;

    await this.userWorkspaceService.addUserToWorkspaceIfUserNotInWorkspace(
      user,
      params.workspace,
      params.roleId,
    );

    return user;
  }

  private async activateOnboardingForUser(
    {
      user,
      workspace,
      shouldShowConnectAccountStep,
    }: {
      user: Pick<UserEntity, 'id' | 'firstName' | 'lastName'>;
      workspace: WorkspaceEntity;
      shouldShowConnectAccountStep: boolean;
    },
    queryRunner?: QueryRunner,
  ) {
    if (shouldShowConnectAccountStep) {
      await this.onboardingService.setOnboardingConnectAccountPending(
        {
          userId: user.id,
          workspaceId: workspace.id,
          value: true,
        },
        queryRunner,
      );
    }

    await this.onboardingService.setOnboardingCreateProfilePending(
      {
        userId: user.id,
        workspaceId: workspace.id,
        value: true,
      },
      queryRunner,
    );
  }

  private async saveNewUser(
    newUserWithPicture: PartialUserWithPicture,
    {
      canAccessFullAdminPanel,
    }: {
      canAccessFullAdminPanel: boolean;
    },
    queryRunner?: QueryRunner,
  ) {
    const userCreated = this.userRepository.create({
      ...newUserWithPicture,
      canAccessFullAdminPanel,
    });

    const savedUser = queryRunner
      ? await queryRunner.manager.save(UserEntity, userCreated)
      : await this.userRepository.save(userCreated);

    void this.eventLogEmitterService
      .createContext({
        workspaceId: savedUser.currentWorkspace?.id,
        userId: savedUser.id,
      })
      .insertWorkspaceEvent(USER_SIGNUP_EVENT, {});

    void this.metricsService.incrementCounterForEvent({
      key: MetricsKeys.SignUpSuccess,
      shouldStoreInCache: false,
    });

    return savedUser;
  }

  // A single workspace per instance: sign-up outside an existing workspace
  // is only the bootstrap of a fresh instance.
  private async assertNoWorkspaceExists(): Promise<void> {
    const workspaceCount = await this.workspaceRepository.count();

    if (workspaceCount > 0) {
      throw new AuthException(
        'New workspace setup is disabled',
        AuthExceptionCode.SIGNUP_DISABLED,
      );
    }
  }

  private async hasServerAdmin(): Promise<boolean> {
    const adminCount = await this.userRepository.count({
      where: { canAccessFullAdminPanel: true },
    });

    return adminCount > 0;
  }

  async signUpOnNewWorkspace(
    userData: ExistingUserOrPartialUserWithPicture['userData'],
    options?: { displayName?: string },
  ) {
    const email =
      userData.type === 'newUserWithPicture'
        ? userData.newUserWithPicture.email
        : userData.existingUser.email;

    if (!email) {
      throw new AuthException(
        'Email is required',
        AuthExceptionCode.INVALID_INPUT,
        {
          userFriendlyMessage: msg`Email is required`,
        },
      );
    }

    await this.assertNoWorkspaceExists();

    const displayName = options?.displayName?.trim();

    if (!displayName) {
      throw new AuthException(
        'Workspace name is required',
        AuthExceptionCode.INVALID_INPUT,
        {
          userFriendlyMessage: msg`Workspace name is required`,
        },
      );
    }

    const shouldGrantServerAdmin = !(await this.hasServerAdmin());

    const isWorkEmailFound = isWorkEmail(email);

    const workspaceId = v4();
    const workspaceCustomApplicationId = v4();
    try {
      const { user, workspace } = await this.dataSource.transaction(
        async (entityManager) => {
        const queryRunner = entityManager.queryRunner as QueryRunner;

        const workspaceToCreate = this.workspaceRepository.create({
          id: workspaceId,
          subdomain: await this.subdomainManagerService.generateSubdomain(
            isWorkEmailFound ? { userEmail: email } : {},
          ),
          workspaceCustomApplicationId,
          displayName,
          inviteHash: v4(),
          activationStatus: WorkspaceActivationStatus.PENDING_CREATION,
        });

        const workspace = await queryRunner.manager.save(
          WorkspaceEntity,
          workspaceToCreate,
        );

        const customApplication =
          await this.applicationService.createWorkspaceCustomApplication(
            {
              workspaceId,
              applicationId: workspaceCustomApplicationId,
            },
            queryRunner,
          );

        const isExistingUser = userData.type === 'existingUser';
        const user = isExistingUser
          ? userData.existingUser
          : await this.saveNewUser(
              userData.newUserWithPicture,
              {
                canAccessFullAdminPanel: shouldGrantServerAdmin,
              },
              queryRunner,
            );

        await this.userWorkspaceService.create(
          {
            userId: user.id,
            workspaceId: workspace.id,
            isExistingUser,
            pictureUrl: isExistingUser
              ? undefined
              : userData.newUserWithPicture.picture,
            applicationUniversalIdentifier:
              customApplication.universalIdentifier,
            locale: user.locale,
          },
          queryRunner,
        );

        await this.activateOnboardingForUser(
          {
            user,
            workspace,
            shouldShowConnectAccountStep: true,
          },
          queryRunner,
        );

        await this.onboardingService.setOnboardingInviteTeamPending(
          {
            workspaceId: workspace.id,
            value: true,
          },
          queryRunner,
        );

        return {
          user,
          workspace,
        };
      });

      void this.eventLogEmitterService
        .createContext({ workspaceId })
        .insertWorkspaceEvent(WORKSPACE_CREATED_EVENT, {});

      return { user, workspace };
    } finally {
      await this.workspaceCacheService.invalidateAndRecompute(workspaceId, [
        'flatApplicationMaps',
      ]);
    }
  }

  async signUpWithoutWorkspace(
    newUserParams: SignInUpNewUserPayload,
    authParams: AuthProviderWithPasswordType['authParams'],
  ) {
    const userExists = await this.userService.findUserByEmail(
      newUserParams.email,
    );

    if (userExists) {
      throw new AuthException(
        'User already exists',
        AuthExceptionCode.USER_ALREADY_EXISTS,
        { userFriendlyMessage: msg`User already exists` },
      );
    }

    await this.assertNoWorkspaceExists();

    const shouldGrantServerAdmin = !(await this.hasServerAdmin());

    return this.saveNewUser(
      await this.computePartialUserFromUserPayload(newUserParams, authParams),
      {
        canAccessFullAdminPanel: shouldGrantServerAdmin,
      },
    );
  }
}
