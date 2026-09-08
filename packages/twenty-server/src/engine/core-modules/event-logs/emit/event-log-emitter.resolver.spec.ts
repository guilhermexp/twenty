import { Test, type TestingModule } from '@nestjs/testing';

import {
  EventLogEmitterException,
  EventLogEmitterExceptionCode,
} from 'src/engine/core-modules/event-logs/emit/event-log-emitter.exception';
import { type UserEntity } from 'src/engine/core-modules/user/user.entity';
import { type WorkspaceEntity } from 'src/engine/core-modules/workspace/workspace.entity';

import { EventLogEmitterResolver } from './event-log-emitter.resolver';

import { EventLogEmitterService } from './event-log-emitter.service';

describe('EventLogEmitterResolver', () => {
  let resolver: EventLogEmitterResolver;
  let auditService: jest.Mocked<EventLogEmitterService>;

  beforeEach(async () => {
    auditService = {
      createContext: jest.fn(),
    } as any;

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        EventLogEmitterResolver,
        {
          provide: EventLogEmitterService,
          useValue: auditService,
        },
      ],
    }).compile();

    resolver = module.get<EventLogEmitterResolver>(EventLogEmitterResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });

  it('should handle object event creation', async () => {
    const mockInsertObjectEvent = jest
      .fn()
      .mockResolvedValue('Object event created');

    auditService.createContext.mockReturnValue({
      insertWorkspaceEvent: jest.fn(),
      createObjectEvent: mockInsertObjectEvent,
    });

    const input = {
      event: 'Object Record Created' as const,
      recordId: 'test-record-id',
      objectMetadataId: 'test-object-metadata-id',
      properties: { additionalData: 'test-data' },
    };

    const result = await resolver.createObjectEvent(
      input,
      { id: 'workspace-3' } as WorkspaceEntity,
      { id: 'user-3' } as UserEntity,
    );

    expect(auditService.createContext).toHaveBeenCalledWith({
      workspaceId: 'workspace-3',
      userId: 'user-3',
    });

    expect(mockInsertObjectEvent).toHaveBeenCalledWith(
      'Object Record Created',
      {
        additionalData: 'test-data',
        recordId: 'test-record-id',
        objectMetadataId: 'test-object-metadata-id',
        isCustom: true,
      },
    );
    expect(result).toBe('Object event created');
  });

  it('should throw an EventLogEmitterException when workspace is missing for createObjectEvent', async () => {
    const input = {
      event: 'Object Record Created' as const,
      recordId: 'test-record-id',
      objectMetadataId: 'test-object-metadata-id',
    };

    await expect(
      resolver.createObjectEvent(input, undefined, undefined),
    ).rejects.toThrowError(
      new EventLogEmitterException(
        'Missing workspace',
        EventLogEmitterExceptionCode.INVALID_INPUT,
      ),
    );
  });
});
