import { type DataSource, type QueryRunner } from 'typeorm';

import { RegisteredInstanceCommand } from 'src/engine/core-modules/upgrade/decorators/registered-instance-command.decorator';
import { type SlowInstanceCommand } from 'src/engine/core-modules/upgrade/interfaces/slow-instance-command.interface';

// The APPS_INSTALLATION onboarding step was removed with the marketplace. A
// stored step history still holding it would fail OnboardingStatus enum
// serialization of previousOnboardingStatus.
@RegisteredInstanceCommand('2.39.0', 1791944891823, { type: 'slow' })
export class DeleteOnboardingInstallAppsStepUserVarsSlowInstanceCommand
  implements SlowInstanceCommand
{
  async runDataMigration(dataSource: DataSource): Promise<void> {
    await dataSource.query(
      `DELETE FROM "core"."keyValuePair" WHERE key = 'ONBOARDING_INSTALL_APPS_PENDING'`,
    );

    await dataSource.query(
      `UPDATE "core"."keyValuePair"
       SET value = value - 'APPS_INSTALLATION'
       WHERE key = 'ONBOARDING_REVERSIBLE_STEP_HISTORY'
         AND jsonb_typeof(value) = 'array'
         AND value ? 'APPS_INSTALLATION'`,
    );
  }

  public async up(_queryRunner: QueryRunner): Promise<void> {}

  public async down(_queryRunner: QueryRunner): Promise<void> {
    // The install-apps onboarding step was removed; its user vars are not restored.
  }
}
