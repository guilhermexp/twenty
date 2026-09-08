/* @license Enterprise */

import { Injectable, Logger, type OnModuleInit } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import * as crypto from 'crypto';

import { isDefined } from 'twenty-shared/utils';
import { IsNull, Repository } from 'typeorm';

import {
  AppTokenEntity,
  AppTokenType,
} from 'src/engine/core-modules/app-token/app-token.entity';
import {
  ENTERPRISE_JWT_DEV_PUBLIC_KEY,
  ENTERPRISE_JWT_PUBLIC_KEY,
} from 'src/engine/core-modules/enterprise/constants/enterprise-public-key.constant';
import {
  type EnterpriseKeyPayload,
  type EnterpriseLicenseInfo,
  type EnterpriseValidityPayload,
} from 'src/engine/core-modules/enterprise/types/enterprise-key-payload.type';
import { NodeEnvironment } from 'src/engine/core-modules/twenty-config/interfaces/node-environment.interface';
import {
  ConfigVariableException,
  ConfigVariableExceptionCode,
} from 'src/engine/core-modules/twenty-config/twenty-config.exception';
import { TwentyConfigService } from 'src/engine/core-modules/twenty-config/twenty-config.service';
import { UserWorkspaceEntity } from 'src/engine/core-modules/user-workspace/user-workspace.entity';

@Injectable()
export class EnterprisePlanService implements OnModuleInit {
  private readonly logger = new Logger(EnterprisePlanService.name);
  private cachedValidityPayload: EnterpriseValidityPayload | null = null;
  private cachedKeyPayload: EnterpriseKeyPayload | null = null;
  private lastRefreshRejectionCode: string | null = null;

  static readonly ENTERPRISE_KEY_BOUND_TO_ANOTHER_SERVER_CODE =
    'ENTERPRISE_KEY_BOUND_TO_ANOTHER_SERVER';

  static readonly ENTERPRISE_VALIDITY_TOKEN_RATE_LIMITED_CODE =
    'ENTERPRISE_VALIDITY_TOKEN_RATE_LIMITED';

  constructor(
    private readonly twentyConfigService: TwentyConfigService,
    @InjectRepository(AppTokenEntity)
    private readonly appTokenRepository: Repository<AppTokenEntity>,
    @InjectRepository(UserWorkspaceEntity)
    private readonly userWorkspaceRepository: Repository<UserWorkspaceEntity>,
  ) {}

  async onModuleInit() {
    this.refreshKeyPayload();
    await this.loadValidityToken();
  }

  private refreshKeyPayload(): void {
    const enterpriseKey = this.twentyConfigService.get('ENTERPRISE_KEY');

    if (!enterpriseKey) {
      this.cachedKeyPayload = null;

      return;
    }

    const payload = this.verifyJwt<EnterpriseKeyPayload>(enterpriseKey);

    this.cachedKeyPayload = payload;
  }

  private async loadValidityToken(): Promise<void> {
    try {
      const dbToken = await this.appTokenRepository.findOne({
        where: {
          type: AppTokenType.EnterpriseValidityToken,
          userId: IsNull(),
          workspaceId: IsNull(),
          revokedAt: IsNull(),
        },
        order: { createdAt: 'DESC' },
      });

      const tokenValue =
        dbToken?.value ??
        this.twentyConfigService.get('ENTERPRISE_VALIDITY_TOKEN');

      if (!tokenValue) {
        this.cachedValidityPayload = null;

        return;
      }

      const payload = this.verifyJwt<EnterpriseValidityPayload>(tokenValue);

      if (payload && payload.status === 'valid') {
        this.cachedValidityPayload = payload;
      } else {
        this.cachedValidityPayload = null;
      }
    } catch (error) {
      this.logger.warn(
        `Failed to load validity token: ${error instanceof Error ? error.message : 'Unknown error'}`,
      );
      this.cachedValidityPayload = null;
    }
  }

  private async saveNewValidityTokenToDb(token: string): Promise<void> {
    const payload = this.verifyJwt<EnterpriseValidityPayload>(token);

    if (!isDefined(payload)) {
      return;
    }

    await this.appTokenRepository.manager.transaction(
      async (transactionalEntityManager) => {
        await transactionalEntityManager.update(
          this.appTokenRepository.target,
          {
            type: AppTokenType.EnterpriseValidityToken,
            userId: IsNull(),
            workspaceId: IsNull(),
            revokedAt: IsNull(),
          },
          { revokedAt: new Date() },
        );

        await transactionalEntityManager.save(this.appTokenRepository.target, {
          type: AppTokenType.EnterpriseValidityToken,
          value: token,
          userId: null,
          workspaceId: null,
          expiresAt: new Date(payload.exp * 1000),
        });
      },
    );
  }

  hasValidSignedEnterpriseKey(): boolean {
    this.refreshKeyPayload();
    return isDefined(this.cachedKeyPayload);
  }

  hasValidEnterpriseValidityToken(): boolean {
    if (isDefined(this.cachedValidityPayload)) {
      const now = Math.floor(Date.now() / 1000);

      return this.cachedValidityPayload.exp > now;
    }

    return false;
  }

  isValid(): boolean {
    return this.hasValidEnterpriseValidityToken();
  }

  isValidEnterpriseKeyFormat(key: string): boolean {
    return this.verifyJwt<EnterpriseKeyPayload>(key) !== null;
  }

  async getLicenseInfo(): Promise<EnterpriseLicenseInfo> {
    this.refreshKeyPayload();
    await this.loadValidityToken();

    if (isDefined(this.cachedValidityPayload)) {
      const now = Math.floor(Date.now() / 1000);

      return {
        isValid: this.cachedValidityPayload.exp > now,
        licensee: this.cachedKeyPayload?.licensee ?? null,
        expiresAt: new Date(this.cachedValidityPayload.exp * 1000),
        subscriptionId: this.cachedValidityPayload.sub,
      };
    }

    return {
      isValid: false,
      licensee: null,
      expiresAt: null,
      subscriptionId: null,
    };
  }

  async setEnterpriseKey(enterpriseKey: string): Promise<void> {
    try {
      await this.twentyConfigService.set('ENTERPRISE_KEY', enterpriseKey);
    } catch (error) {
      if (
        error instanceof ConfigVariableException &&
        error.code === ConfigVariableExceptionCode.DATABASE_CONFIG_DISABLED
      ) {
        throw new ConfigVariableException(
          'IS_CONFIG_VARIABLES_IN_DB_ENABLED is false on your server. ' +
            'Please add ENTERPRISE_KEY to your .env file manually.',
          ConfigVariableExceptionCode.DATABASE_CONFIG_DISABLED,
        );
      }

      throw error;
    }
  }

  getLastRefreshRejectionCode(): string | null {
    return this.lastRefreshRejectionCode;
  }

  private async revokeStoredValidityToken(): Promise<void> {
    this.cachedValidityPayload = null;

    try {
      await this.appTokenRepository.update(
        {
          type: AppTokenType.EnterpriseValidityToken,
          userId: IsNull(),
          workspaceId: IsNull(),
          revokedAt: IsNull(),
        },
        { revokedAt: new Date() },
      );
    } catch (error) {
      this.logger.warn(
        `Failed to revoke stored validity token: ${error instanceof Error ? error.message : 'Unknown error'}`,
      );
    }
  }

  async refreshValidityToken(): Promise<boolean> {
    this.lastRefreshRejectionCode = null;
    await this.loadValidityToken();

    return this.hasValidEnterpriseValidityToken();
  }

  // Self-hosted pricing is per user: a user who belongs to several workspaces
  // on the same instance only counts as one seat.
  async getBillableSeatCount(): Promise<number> {
    const result = await this.userWorkspaceRepository
      .createQueryBuilder('userWorkspace')
      .select('COUNT(DISTINCT "userWorkspace"."userId")', 'distinctUserCount')
      .where('"userWorkspace"."deletedAt" IS NULL')
      .getRawOne<{ distinctUserCount: string }>();

    return Math.max(1, Number(result?.distinctUserCount ?? 0));
  }

  async reportSeats(_seatCount: number): Promise<boolean> {
    return false;
  }

  async releaseServerBinding(): Promise<boolean> {
    await this.revokeStoredValidityToken();

    return true;
  }

  async getSubscriptionStatus(): Promise<{
    status: string;
    licensee: string | null;
    expiresAt: Date | null;
    cancelAt: Date | null;
    currentPeriodEnd: Date | null;
    isCancellationScheduled: boolean;
  } | null> {
    this.refreshKeyPayload();

    const licenseInfo = await this.getLicenseInfo();

    if (!this.hasValidSignedEnterpriseKey() && licenseInfo.isValid !== true) {
      return null;
    }

    return {
      status: licenseInfo.isValid ? 'active' : 'inactive',
      licensee: licenseInfo.licensee,
      expiresAt: licenseInfo.expiresAt,
      cancelAt: null,
      currentPeriodEnd: licenseInfo.expiresAt,
      isCancellationScheduled: false,
    };
  }

  async getPortalUrl(_returnUrl?: string): Promise<string | null> {
    return null;
  }

  async getCheckoutUrl(
    _billingInterval: 'monthly' | 'yearly' = 'monthly',
    _seatCount: number,
  ): Promise<string | null> {
    return null;
  }

  // In development and Jest integration tests, tries both keys so production keys
  // work locally
  private getPublicKeysToTry(): string[] {
    const nodeEnv = this.twentyConfigService.get('NODE_ENV');

    if (
      nodeEnv === NodeEnvironment.DEVELOPMENT ||
      nodeEnv === NodeEnvironment.TEST
    ) {
      return [ENTERPRISE_JWT_PUBLIC_KEY, ENTERPRISE_JWT_DEV_PUBLIC_KEY];
    }

    return [ENTERPRISE_JWT_PUBLIC_KEY];
  }

  private verifyJwt<T extends Record<string, unknown>>(
    token: string,
  ): T | null {
    try {
      const parts = token.split('.');

      if (parts.length !== 3) {
        return null;
      }

      const [encodedHeader, encodedPayload, signature] = parts;
      const signingInput = `${encodedHeader}.${encodedPayload}`;

      const signatureBuffer = Buffer.from(
        signature.replace(/-/g, '+').replace(/_/g, '/') +
          '='.repeat((4 - (signature.length % 4)) % 4),
        'base64',
      );

      const publicKeys = this.getPublicKeysToTry();

      for (const publicKey of publicKeys) {
        const isValid = crypto.verify(
          'sha256',
          Buffer.from(signingInput),
          {
            key: publicKey,
            padding: crypto.constants.RSA_PKCS1_PADDING,
          },
          signatureBuffer,
        );

        if (isValid) {
          const payloadStr = Buffer.from(
            encodedPayload.replace(/-/g, '+').replace(/_/g, '/') +
              '='.repeat((4 - (encodedPayload.length % 4)) % 4),
            'base64',
          ).toString('utf-8');

          return JSON.parse(payloadStr) as T;
        }
      }

      return null;
    } catch {
      return null;
    }
  }
}
