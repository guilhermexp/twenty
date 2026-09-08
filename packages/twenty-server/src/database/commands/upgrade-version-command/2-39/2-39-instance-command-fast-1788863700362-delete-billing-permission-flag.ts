import { type QueryRunner } from 'typeorm';

import { RegisteredInstanceCommand } from 'src/engine/core-modules/upgrade/decorators/registered-instance-command.decorator';
import { type FastInstanceCommand } from 'src/engine/core-modules/upgrade/interfaces/fast-instance-command.interface';

@RegisteredInstanceCommand('2.39.0', 1788863700362)
export class DeleteBillingPermissionFlagFastInstanceCommand
  implements FastInstanceCommand
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `DELETE FROM "core"."permissionFlag" WHERE key = 'BILLING'`,
    );
  }

  public async down(_queryRunner: QueryRunner): Promise<void> {
    // Licensing was removed; BILLING rows are not restored.
  }
}
