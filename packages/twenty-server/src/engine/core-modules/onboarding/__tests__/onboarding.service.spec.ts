import { type DataSource, type Repository } from 'typeorm';

import {
  OnboardingService,
  type OnboardingKeyValueTypeMap,
} from 'src/engine/core-modules/onboarding/onboarding.service';
import { type ReversibleOnboardingStep } from 'src/engine/core-modules/onboarding/types/reversible-onboarding-step.type';
import { type UserVarsService } from 'src/engine/core-modules/user/user-vars/services/user-vars.service';
import { type UserWorkspaceEntity } from 'src/engine/core-modules/user-workspace/user-workspace.entity';
import { type WorkspaceEntity } from 'src/engine/core-modules/workspace/workspace.entity';

describe('OnboardingService', () => {
  it('ignores removed onboarding steps in reversible history', async () => {
    const userVarsService = {
      get: jest
        .fn()
        .mockResolvedValue([
          'INVITE_TEAM',
          'BOOK_CALL',
        ] as unknown as ReversibleOnboardingStep[]),
    } as unknown as UserVarsService<OnboardingKeyValueTypeMap>;
    const service = new OnboardingService(
      {} as never,
      userVarsService,
      {} as Repository<WorkspaceEntity>,
      {} as Repository<UserWorkspaceEntity>,
      {} as DataSource,
    );

    await expect(
      service.getPreviousReversibleOnboardingStatus({
        userId: 'user-id',
        workspaceId: 'workspace-id',
      }),
    ).resolves.toBe('INVITE_TEAM');
  });
});
