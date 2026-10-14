import { type DataSource, type QueryRunner } from 'typeorm';

import { RegisteredInstanceCommand } from 'src/engine/core-modules/upgrade/decorators/registered-instance-command.decorator';
import { type SlowInstanceCommand } from 'src/engine/core-modules/upgrade/interfaces/slow-instance-command.interface';

@RegisteredInstanceCommand('2.39.0', 1791945277930, { type: 'slow' })
export class DeleteQuotaEngineCreditBoundFeatureFlagSlowInstanceCommand
  implements SlowInstanceCommand
{
  async runDataMigration(dataSource: DataSource): Promise<void> {
    await dataSource.query(
      `DELETE FROM "core"."featureFlag" WHERE key = 'IS_QUOTA_ENGINE_CREDIT_BOUND_ENABLED'`,
    );
  }

  public async up(_queryRunner: QueryRunner): Promise<void> {}

  public async down(_queryRunner: QueryRunner): Promise<void> {
    // Credits were removed; the flag rows are not restored.
  }
}
