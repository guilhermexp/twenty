import { Command } from 'nest-commander';
import { TWENTY_STANDARD_APPLICATION_UNIVERSAL_IDENTIFIER } from 'twenty-shared/application';

import { ProvisionedWorkspaceCommandRunner } from 'src/database/commands/command-runners/provisioned-workspace.command-runner';
import { WorkspaceIteratorService } from 'src/database/commands/command-runners/workspace-iterator.service';
import { type RunOnWorkspaceArgs } from 'src/database/commands/command-runners/workspace.command-runner';
import { collectRetiredCommandMenuItemsToDelete } from 'src/database/commands/upgrade-version-command/2-39/utils/collect-retired-command-menu-items-to-delete.util';
import { RegisteredWorkspaceCommand } from 'src/engine/core-modules/upgrade/decorators/registered-workspace-command.decorator';
import { WorkspaceCacheService } from 'src/engine/workspace-cache/services/workspace-cache.service';
import { WorkspaceMigrationBuilderException } from 'src/engine/workspace-manager/workspace-migration/exceptions/workspace-migration-builder-exception';
import { WorkspaceMigrationValidateBuildAndRunService } from 'src/engine/workspace-manager/workspace-migration/services/workspace-migration-validate-build-and-run-service';

// Hardcoded so this command keeps its meaning if the constant entry is later removed.
const RETIRED_COMMAND_MENU_ITEM_UNIVERSAL_IDENTIFIERS = [
  '2d071684-fb5e-4222-b560-4c7ab2597fb4', // goToSettingsDomains (custom domains)
] as const;

@RegisteredWorkspaceCommand('2.39.0', 1791944918555)
@Command({
  name: 'upgrade:2-39:delete-domains-settings-command-menu-item',
  description:
    'Delete the "Go to Domains Settings" command menu item, whose settings page no longer exists',
})
export class DeleteDomainsSettingsCommandMenuItemCommand extends ProvisionedWorkspaceCommandRunner {
  constructor(
    protected readonly workspaceIteratorService: WorkspaceIteratorService,
    private readonly workspaceCacheService: WorkspaceCacheService,
    private readonly workspaceMigrationValidateBuildAndRunService: WorkspaceMigrationValidateBuildAndRunService,
  ) {
    super(workspaceIteratorService);
  }

  override async runOnWorkspace({
    workspaceId,
    options,
  }: RunOnWorkspaceArgs): Promise<void> {
    const { flatCommandMenuItemMaps } =
      await this.workspaceCacheService.getOrRecompute(workspaceId, [
        'flatCommandMenuItemMaps',
      ]);

    const commandMenuItemsToDelete = collectRetiredCommandMenuItemsToDelete({
      existingFlatCommandMenuItemMaps: flatCommandMenuItemMaps,
      universalIdentifiers: RETIRED_COMMAND_MENU_ITEM_UNIVERSAL_IDENTIFIERS,
    });

    if (commandMenuItemsToDelete.length === 0) {
      return;
    }

    if (options.dryRun) {
      this.logger.log(
        `Would delete ${commandMenuItemsToDelete.length} retired command menu item(s) for workspace ${workspaceId}`,
      );

      return;
    }

    const validateAndBuildResult =
      await this.workspaceMigrationValidateBuildAndRunService.validateBuildAndRunWorkspaceMigration(
        {
          allFlatEntityOperationByMetadataName: {
            commandMenuItem: {
              flatEntityToCreate: [],
              flatEntityToDelete: commandMenuItemsToDelete,
              flatEntityToUpdate: [],
            },
          },
          workspaceId,
          isSystemBuild: true,
          applicationUniversalIdentifier:
            TWENTY_STANDARD_APPLICATION_UNIVERSAL_IDENTIFIER,
        },
      );

    if (validateAndBuildResult.status === 'fail') {
      throw new WorkspaceMigrationBuilderException(validateAndBuildResult);
    }

    this.logger.log(
      `Deleted ${commandMenuItemsToDelete.length} retired command menu item(s) for workspace ${workspaceId}`,
    );
  }
}
