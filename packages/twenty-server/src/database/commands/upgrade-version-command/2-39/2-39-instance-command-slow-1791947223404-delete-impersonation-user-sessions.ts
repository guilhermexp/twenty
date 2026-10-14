import { type DataSource, type QueryRunner } from 'typeorm';

import { RegisteredInstanceCommand } from 'src/engine/core-modules/upgrade/decorators/registered-instance-command.decorator';
import { type SlowInstanceCommand } from 'src/engine/core-modules/upgrade/interfaces/slow-instance-command.interface';

@RegisteredInstanceCommand('2.39.0', 1791947223404, { type: 'slow' })
export class DeleteImpersonationUserSessionsSlowInstanceCommand
  implements SlowInstanceCommand
{
  // Matches on authProvider rather than the dropped isImpersonating column so
  // the delete still works after DropImpersonationColumnsFastInstanceCommand.
  async runDataMigration(dataSource: DataSource): Promise<void> {
    await dataSource.query(
      `DELETE FROM "core"."userSession" WHERE "authProvider" = 'impersonation' OR "revokedReason" = 'IMPERSONATION_ENDED'`,
    );
  }

  public async up(_queryRunner: QueryRunner): Promise<void> {}

  public async down(_queryRunner: QueryRunner): Promise<void> {
    // Impersonation was removed; its sessions are not restored.
  }
}
