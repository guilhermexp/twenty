import { Command } from 'nest-commander';
import { TWENTY_STANDARD_APPLICATION_UNIVERSAL_IDENTIFIER } from 'twenty-shared/application';
import { isDefined } from 'twenty-shared/utils';

import { ProvisionedWorkspaceCommandRunner } from 'src/database/commands/command-runners/provisioned-workspace.command-runner';
import { WorkspaceIteratorService } from 'src/database/commands/command-runners/workspace-iterator.service';
import { type RunOnWorkspaceArgs } from 'src/database/commands/command-runners/workspace.command-runner';
import { RegisteredWorkspaceCommand } from 'src/engine/core-modules/upgrade/decorators/registered-workspace-command.decorator';
import { WorkspaceCacheService } from 'src/engine/workspace-cache/services/workspace-cache.service';
import { WorkspaceMigrationBuilderException } from 'src/engine/workspace-manager/workspace-migration/exceptions/workspace-migration-builder-exception';
import { WorkspaceMigrationValidateBuildAndRunService } from 'src/engine/workspace-manager/workspace-migration/services/workspace-migration-validate-build-and-run-service';

// Hardcoded so this command keeps its meaning if the standard constant changes.
const ADMIN_PANEL_COMMAND_MENU_ITEM_UNIVERSAL_IDENTIFIER =
  'dd22798b-fca6-42af-ba3b-0d48f263afbd';
const LEGACY_CONDITIONAL_AVAILABILITY_EXPRESSION =
  'canImpersonate or canAccessFullAdminPanel';
const CONDITIONAL_AVAILABILITY_EXPRESSION = 'canAccessFullAdminPanel';

@RegisteredWorkspaceCommand('2.39.0', 1791947223405)
@Command({
  name: 'upgrade:2-39:gate-admin-panel-command-menu-item-on-full-admin',
  description:
    'Gate the "Go to Admin Panel Settings" command menu item on canAccessFullAdminPanel only, as the canImpersonate variable no longer exists',
})
export class GateAdminPanelCommandMenuItemOnFullAdminCommand extends ProvisionedWorkspaceCommandRunner {
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

    const existingItem =
      flatCommandMenuItemMaps.byUniversalIdentifier[
        ADMIN_PANEL_COMMAND_MENU_ITEM_UNIVERSAL_IDENTIFIER
      ];

    if (
      !isDefined(existingItem) ||
      existingItem.conditionalAvailabilityExpression !==
        LEGACY_CONDITIONAL_AVAILABILITY_EXPRESSION
    ) {
      return;
    }

    if (options.dryRun) {
      this.logger.log(
        `Would update the admin panel command menu item availability expression for workspace ${workspaceId}`,
      );

      return;
    }

    const validateAndBuildResult =
      await this.workspaceMigrationValidateBuildAndRunService.validateBuildAndRunWorkspaceMigration(
        {
          allFlatEntityOperationByMetadataName: {
            commandMenuItem: {
              flatEntityToCreate: [],
              flatEntityToDelete: [],
              flatEntityToUpdate: [
                {
                  ...existingItem,
                  conditionalAvailabilityExpression:
                    CONDITIONAL_AVAILABILITY_EXPRESSION,
                  updatedAt: new Date().toISOString(),
                },
              ],
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
      `Updated the admin panel command menu item availability expression for workspace ${workspaceId}`,
    );
  }
}
