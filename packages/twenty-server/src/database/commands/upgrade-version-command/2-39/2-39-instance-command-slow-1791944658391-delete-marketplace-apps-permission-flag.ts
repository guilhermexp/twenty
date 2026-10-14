import { type DataSource, type QueryRunner } from 'typeorm';

import { RegisteredInstanceCommand } from 'src/engine/core-modules/upgrade/decorators/registered-instance-command.decorator';
import { type SlowInstanceCommand } from 'src/engine/core-modules/upgrade/interfaces/slow-instance-command.interface';

@RegisteredInstanceCommand('2.39.0', 1791944658391, { type: 'slow' })
export class DeleteMarketplaceAppsPermissionFlagSlowInstanceCommand
  implements SlowInstanceCommand
{
  async runDataMigration(dataSource: DataSource): Promise<void> {
    await dataSource.query(
      `DELETE FROM "core"."rolePermissionFlag"
       WHERE "permissionFlagId" IN (
         SELECT id FROM "core"."permissionFlag" WHERE key = 'MARKETPLACE_APPS'
       )`,
    );

    await dataSource.query(
      `DELETE FROM "core"."permissionFlag" WHERE key = 'MARKETPLACE_APPS'`,
    );
  }

  public async up(_queryRunner: QueryRunner): Promise<void> {}

  public async down(_queryRunner: QueryRunner): Promise<void> {
    // The marketplace was removed; MARKETPLACE_APPS rows are not restored.
  }
}
