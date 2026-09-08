import { Test, type TestingModule } from '@nestjs/testing';
import { getDataSourceToken, getRepositoryToken } from '@nestjs/typeorm';

import { type DataSource } from 'typeorm';

import { ExceptionHandlerService } from 'src/engine/core-modules/exception-handler/exception-handler.service';
import { MessageQueue } from 'src/engine/core-modules/message-queue/message-queue.constants';
import { getQueueToken } from 'src/engine/core-modules/message-queue/utils/get-queue-token.util';
import { OnboardingService } from 'src/engine/core-modules/onboarding/onboarding.service';
import { TwentyConfigService } from 'src/engine/core-modules/twenty-config/twenty-config.service';
import { UserVarsService } from 'src/engine/core-modules/user/user-vars/services/user-vars.service';
import { UserWorkspaceEntity } from 'src/engine/core-modules/user-workspace/user-workspace.entity';
import { WorkspaceEntity } from 'src/engine/core-modules/workspace/workspace.entity';

describe('OnboardingService', () => {
  let service: OnboardingService;

  const userId = 'user-id';
  const workspaceId = 'workspace-id';

  // The book-call step deliberately asks for a far bigger company than the
  // credit reward, so the two bars cannot be confused for one another.
  const bookCallMinEmployeeCount = 200;

  const configValues: Record<string, unknown> = {
    CALENDAR_BOOKING_PAGE_ID: 'team/twenty/talk-to-us',
    ONBOARDING_BOOK_CALL_MIN_EMPLOYEE_COUNT: bookCallMinEmployeeCount,
  };

  const captureExceptions = jest.fn();
  const setIfNotExists = jest.fn();
  const getConfig = jest.fn();

  beforeEach(async () => {
    setIfNotExists.mockResolvedValue(true);
    getConfig.mockImplementation((key: string) => configValues[key]);

    const dataSource = {
      transaction: jest.fn((runInTransaction) =>
        runInTransaction({ queryRunner: {} }),
      ),
    } as unknown as DataSource;

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        OnboardingService,
        {
          provide: ExceptionHandlerService,
          useValue: { captureExceptions },
        },
        {
          provide: UserVarsService,
          useValue: {
            get: jest.fn(),
            set: jest.fn(),
            delete: jest.fn(),
            setIfNotExists,
          },
        },
        { provide: TwentyConfigService, useValue: { get: getConfig } },
        { provide: getRepositoryToken(WorkspaceEntity), useValue: {} },
        { provide: getRepositoryToken(UserWorkspaceEntity), useValue: {} },
        {
          provide: getQueueToken(MessageQueue.workspaceQueue),
          useValue: { add: jest.fn() },
        },
        { provide: getDataSourceToken(), useValue: dataSource },
      ],
    }).compile();

    service = module.get<OnboardingService>(OnboardingService);
  });

  afterEach(() => {
    jest.resetAllMocks();
  });


  describe('setOnboardingBookCallPendingIfQualified', () => {
    it('offers the call to a company meeting the employee count threshold', async () => {
      const hasQualified =
        await service.setOnboardingBookCallPendingIfQualified({
          userId,
          workspaceId,
          employeeCount: bookCallMinEmployeeCount,
        });

      expect(hasQualified).toBe(true);
    });

    it('withholds the call from a company below the employee count threshold', async () => {
      const hasQualified =
        await service.setOnboardingBookCallPendingIfQualified({
          userId,
          workspaceId,
          employeeCount: 20,
        });

      expect(hasQualified).toBe(false);
    });
  });
});
