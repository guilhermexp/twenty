import { type CommandShutdownService } from 'src/database/commands/command-runners/command-shutdown.service';
import {
  type WorkspaceIteratorReport,
  type WorkspaceIteratorService,
} from 'src/database/commands/command-runners/workspace-iterator.service';
import { type InstanceCommandRunnerService } from 'src/engine/core-modules/upgrade/services/instance-command-runner.service';
import { type UpgradeCommandRegistryService } from 'src/engine/core-modules/upgrade/services/upgrade-command-registry.service';
import {
  type UpgradeMigrationService,
  type WorkspaceLastAttemptedCommand,
} from 'src/engine/core-modules/upgrade/services/upgrade-migration.service';
import {
  type UpgradeStep,
  type WorkspaceUpgradeStep,
  UpgradeSequenceReaderService,
} from 'src/engine/core-modules/upgrade/services/upgrade-sequence-reader.service';
import { UpgradeSequenceRunnerService } from 'src/engine/core-modules/upgrade/services/upgrade-sequence-runner.service';
import { type WorkspaceCommandRunnerService } from 'src/engine/core-modules/upgrade/services/workspace-command-runner.service';
import { type UpgradeAwareEntityMetadataAdapter } from 'src/engine/twenty-orm/upgrade-aware/upgrade-aware-entity-metadata.adapter';
import { type WorkspaceVersionService } from 'src/engine/workspace-manager/workspace-version/services/workspace-version.service';

const WORKSPACE_ID = '20202020-0000-4000-8000-000000000001';

const noopAsync = async () => {};

const makeStep = (kind: UpgradeStep['kind'], name: string): UpgradeStep =>
  ({
    kind,
    name,
    command:
      kind === 'workspace'
        ? { runOnWorkspace: noopAsync }
        : { up: noopAsync, down: noopAsync, runDataMigration: noopAsync },
    version: '2.39.0',
    timestamp: 0,
  }) as unknown as UpgradeStep;

// Mirrors the 2.38 -> 2.39 layout: the 2.39 fast and slow commands added after
// the 2.39 workspace segment ran sort before that segment.
const SEQUENCE: UpgradeStep[] = [
  makeStep('fast-instance', 'PreviousVersionFast'),
  makeStep('workspace', 'PreviousVersionWorkspace'),
  makeStep('fast-instance', 'AppliedFast'),
  makeStep('fast-instance', 'NewFast'),
  makeStep('slow-instance', 'NewSlow'),
  makeStep('workspace', 'AppliedWorkspaceA'),
  makeStep('workspace', 'AppliedWorkspaceB'),
  makeStep('workspace', 'NewWorkspace'),
];

type UpgradeDatabaseState = {
  completedInstanceCommands: Set<string>;
  workspaceCursor: string;
  lastAttemptedCommand: string;
};

const createRunner = (state: UpgradeDatabaseState) => {
  const executedSteps: string[] = [];

  const recordInstanceStep =
    (kind: string) =>
    async ({ name }: { name: string }) => {
      if (state.completedInstanceCommands.has(name)) {
        return { status: 'already-executed' };
      }

      executedSteps.push(`${kind}:${name}`);
      state.completedInstanceCommands.add(name);
      state.lastAttemptedCommand = name;

      return { status: 'success' };
    };

  const upgradeMigrationService = {
    getLastAttemptedCommandNameOrThrow: jest.fn(async () => ({
      name: state.lastAttemptedCommand,
      status: 'completed',
    })),
    getWorkspaceLastAttemptedCommandNameOrThrow: jest.fn(
      async () =>
        new Map<string, WorkspaceLastAttemptedCommand>([
          [
            WORKSPACE_ID,
            {
              name: state.workspaceCursor,
              status: 'completed',
            } as WorkspaceLastAttemptedCommand,
          ],
        ]),
    ),
    isLastAttemptCompleted: jest.fn(async ({ name }: { name: string }) =>
      state.completedInstanceCommands.has(name),
    ),
  } as unknown as UpgradeMigrationService;

  const instanceCommandRunnerService = {
    runFastInstanceCommand: jest.fn(recordInstanceStep('fast')),
    runSlowInstanceCommand: jest.fn(recordInstanceStep('slow')),
  } as unknown as InstanceCommandRunnerService;

  const workspaceCommandRunnerService = {
    runWorkspaceCommands: jest.fn(
      async ({
        workspaceCommands,
      }: {
        workspaceCommands: WorkspaceUpgradeStep[];
      }) => {
        for (const workspaceCommand of workspaceCommands) {
          executedSteps.push(`workspace:${workspaceCommand.name}`);
          state.workspaceCursor = workspaceCommand.name;
          state.lastAttemptedCommand = workspaceCommand.name;
        }
      },
    ),
  } as unknown as WorkspaceCommandRunnerService;

  const workspaceIteratorService = {
    iterate: jest.fn(
      async ({
        workspaceIds,
        callback,
      }: {
        workspaceIds: string[];
        callback: (context: { workspaceId: string }) => Promise<void>;
      }): Promise<WorkspaceIteratorReport> => {
        for (const workspaceId of workspaceIds) {
          await callback({ workspaceId });
        }

        return {
          fail: [],
          success: workspaceIds.map((workspaceId) => ({ workspaceId })),
          interrupted: false,
        };
      },
    ),
  } as unknown as WorkspaceIteratorService;

  const runner = new UpgradeSequenceRunnerService(
    upgradeMigrationService,
    instanceCommandRunnerService,
    workspaceCommandRunnerService,
    new UpgradeSequenceReaderService({} as UpgradeCommandRegistryService),
    {
      refresh: jest.fn(noopAsync),
    } as unknown as UpgradeAwareEntityMetadataAdapter,
    workspaceIteratorService,
    {
      getProvisionedWorkspaceIds: jest.fn(async () => [WORKSPACE_ID]),
    } as unknown as WorkspaceVersionService,
    {
      isShutdownRequested: () => false,
    } as unknown as CommandShutdownService,
  );

  return { runner, executedSteps };
};

describe('UpgradeSequenceRunnerService', () => {
  it('runs instance commands added after the current workspace segment ran, fast then slow, before the pending workspace commands', async () => {
    const { runner, executedSteps } = createRunner({
      completedInstanceCommands: new Set([
        'PreviousVersionFast',
        'AppliedFast',
      ]),
      workspaceCursor: 'AppliedWorkspaceB',
      lastAttemptedCommand: 'AppliedWorkspaceB',
    });

    await runner.run({ sequence: SEQUENCE, options: {} });

    expect(executedSteps).toEqual([
      'fast:NewFast',
      'slow:NewSlow',
      'workspace:NewWorkspace',
    ]);
  });

  it('runs pending instance commands even when the whole workspace segment already completed', async () => {
    const { runner, executedSteps } = createRunner({
      completedInstanceCommands: new Set([
        'PreviousVersionFast',
        'AppliedFast',
      ]),
      workspaceCursor: 'NewWorkspace',
      lastAttemptedCommand: 'NewWorkspace',
    });

    await runner.run({ sequence: SEQUENCE, options: {} });

    expect(executedSteps).toEqual(['fast:NewFast', 'slow:NewSlow']);
  });

  it('runs a fast command that sorts before the last completed slow command', async () => {
    const { runner, executedSteps } = createRunner({
      completedInstanceCommands: new Set([
        'PreviousVersionFast',
        'AppliedFast',
        'NewSlow',
      ]),
      workspaceCursor: 'PreviousVersionWorkspace',
      lastAttemptedCommand: 'NewSlow',
    });

    await runner.run({ sequence: SEQUENCE, options: {} });

    expect(executedSteps).toEqual([
      'fast:NewFast',
      'workspace:AppliedWorkspaceA',
      'workspace:AppliedWorkspaceB',
      'workspace:NewWorkspace',
    ]);
  });

  it('resumes only the workspace segment when every instance command already completed', async () => {
    const { runner, executedSteps } = createRunner({
      completedInstanceCommands: new Set([
        'PreviousVersionFast',
        'AppliedFast',
        'NewFast',
        'NewSlow',
      ]),
      workspaceCursor: 'AppliedWorkspaceA',
      lastAttemptedCommand: 'AppliedWorkspaceA',
    });

    await runner.run({ sequence: SEQUENCE, options: {} });

    expect(executedSteps).toEqual([
      'workspace:AppliedWorkspaceB',
      'workspace:NewWorkspace',
    ]);
  });
});
