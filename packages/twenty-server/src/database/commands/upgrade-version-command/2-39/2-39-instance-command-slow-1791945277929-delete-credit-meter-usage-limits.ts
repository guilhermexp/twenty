import { type DataSource, type QueryRunner } from 'typeorm';

import { RegisteredInstanceCommand } from 'src/engine/core-modules/upgrade/decorators/registered-instance-command.decorator';
import { type SlowInstanceCommand } from 'src/engine/core-modules/upgrade/interfaces/slow-instance-command.interface';

@RegisteredInstanceCommand('2.39.0', 1791945277929, { type: 'slow' })
export class DeleteCreditMeterUsageLimitsSlowInstanceCommand
  implements SlowInstanceCommand
{
  // Credits are no longer computed, so a limit metered on them would never
  // move again; quantity is the only meter left.
  async runDataMigration(dataSource: DataSource): Promise<void> {
    await dataSource.query(
      `DELETE FROM "core"."usageLimit" WHERE meter = 'creditsUsedMicro'`,
    );
  }

  public async up(_queryRunner: QueryRunner): Promise<void> {}

  public async down(_queryRunner: QueryRunner): Promise<void> {
    // Credits were removed; credit-metered limits are not restored.
  }
}
