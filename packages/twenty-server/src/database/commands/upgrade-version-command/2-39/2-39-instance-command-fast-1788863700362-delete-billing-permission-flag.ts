import { type QueryRunner } from 'typeorm';

import { RegisteredInstanceCommand } from 'src/engine/core-modules/upgrade/decorators/registered-instance-command.decorator';
import { type FastInstanceCommand } from 'src/engine/core-modules/upgrade/interfaces/fast-instance-command.interface';

@RegisteredInstanceCommand('2.39.0', 1788863700362)
export class DeleteBillingPermissionFlagFastInstanceCommand
  implements FastInstanceCommand
{
  // Kept registered as a no-op: databases that already ran it record it in
  // core.upgradeMigration and the upgrade cursor resolves it by name. The
  // delete now runs in DeleteBillingPermissionFlagSlowInstanceCommand.
  public async up(_queryRunner: QueryRunner): Promise<void> {}

  public async down(_queryRunner: QueryRunner): Promise<void> {
    // Licensing was removed; BILLING rows are not restored.
  }
}
