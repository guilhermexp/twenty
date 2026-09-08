import { Logger } from '@nestjs/common';

import { Command, CommandRunner, Option } from 'nest-commander';
import { isNonEmptyString } from 'twenty-shared/utils';

import { NodeEnvironment } from 'src/engine/core-modules/twenty-config/interfaces/node-environment.interface';
import {
  DEFAULT_SEED_ADMIN_EMAIL,
  DEFAULT_SEED_WORKSPACE_NAME,
  SEED_APPLE_WORKSPACE_ID,
  SEED_DEV_WORKSPACE_ID,
  SEED_YCOMBINATOR_WORKSPACE_ID,
  SeededWorkspacesIds,
} from 'src/engine/workspace-manager/dev-seeder/core/constants/seeder-workspaces.constant';
import { DevSeederService } from 'src/engine/workspace-manager/dev-seeder/services/dev-seeder.service';

type DataSeedWorkspaceOptions = {
  light?: boolean;
  workspaceName?: string;
  adminEmail?: string;
  adminPassword?: string;
};

@Command({
  name: 'workspace:seed:dev',
  description:
    'Seed workspace with initial data. This command is intended for development only.',
})
export class DataSeedWorkspaceCommand extends CommandRunner {
  private readonly logger = new Logger(DataSeedWorkspaceCommand.name);

  constructor(private readonly devSeederService: DevSeederService) {
    super();
  }

  @Option({
    flags: '--light',
    description:
      'Light seed: only seed the Apple workspace (skip YCombinator), skip demo custom objects (Pet, Survey, etc.) and limit records to 5 per object',
  })
  parseLight(): boolean {
    return true;
  }

  @Option({
    flags: '--workspace-name <name>',
    description:
      'Display name of the development workspace. Falls back to SEED_WORKSPACE_NAME.',
    defaultValue:
      process.env.SEED_WORKSPACE_NAME ?? DEFAULT_SEED_WORKSPACE_NAME,
  })
  parseWorkspaceName(value: string): string {
    return value;
  }

  @Option({
    flags: '--admin-email <email>',
    description:
      'Email of the unique development admin. Falls back to SEED_ADMIN_EMAIL.',
    defaultValue: process.env.SEED_ADMIN_EMAIL ?? DEFAULT_SEED_ADMIN_EMAIL,
  })
  parseAdminEmail(value: string): string {
    return value;
  }

  @Option({
    flags: '--admin-password <password>',
    description:
      'Password of the unique development admin. Falls back to SEED_ADMIN_PASSWORD. Required outside test.',
  })
  parseAdminPassword(value: string): string {
    return value;
  }

  async run(
    _passedParams: string[],
    options: DataSeedWorkspaceOptions,
  ): Promise<void> {
    try {
      if (process.env.NODE_ENV === NodeEnvironment.TEST) {
        const workspaceIds: SeededWorkspacesIds[] = options.light
          ? [SEED_APPLE_WORKSPACE_ID]
          : [SEED_APPLE_WORKSPACE_ID, SEED_YCOMBINATOR_WORKSPACE_ID];

        for (const workspaceId of workspaceIds) {
          await this.devSeederService.seedDev(workspaceId, {
            light: options.light,
          });
        }

        return;
      }

      const adminPassword =
        options.adminPassword ?? process.env.SEED_ADMIN_PASSWORD;

      if (!isNonEmptyString(adminPassword)) {
        throw new Error(
          'SEED_ADMIN_PASSWORD is required in development. Set the env var or pass --admin-password.',
        );
      }

      await this.devSeederService.seedDev(SEED_DEV_WORKSPACE_ID, {
        workspaceName:
          options.workspaceName ??
          process.env.SEED_WORKSPACE_NAME ??
          DEFAULT_SEED_WORKSPACE_NAME,
        adminEmail:
          options.adminEmail ??
          process.env.SEED_ADMIN_EMAIL ??
          DEFAULT_SEED_ADMIN_EMAIL,
        adminPassword,
      });
    } catch (error) {
      this.logger.error(error);
      this.logger.error(error.stack);
      throw error;
    }
  }
}
