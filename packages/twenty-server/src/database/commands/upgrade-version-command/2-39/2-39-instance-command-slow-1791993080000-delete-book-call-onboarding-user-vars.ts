import { type DataSource, type QueryRunner } from 'typeorm';

import { RegisteredInstanceCommand } from 'src/engine/core-modules/upgrade/decorators/registered-instance-command.decorator';
import { type SlowInstanceCommand } from 'src/engine/core-modules/upgrade/interfaces/slow-instance-command.interface';

@RegisteredInstanceCommand('2.39.0', 1791993080000, { type: 'slow' })
export class DeleteBookCallOnboardingUserVarsSlowInstanceCommand
  implements SlowInstanceCommand
{
  async runDataMigration(dataSource: DataSource): Promise<void> {
    await dataSource.query(
      `DELETE FROM "core"."keyValuePair"
       WHERE key IN ('ONBOARDING_BOOK_CALL_PENDING', 'ONBOARDING_BOOK_CALL_OFFERED')`,
    );

    await dataSource.query(
      `UPDATE "core"."keyValuePair"
       SET value = value - 'BOOK_CALL'
       WHERE key = 'ONBOARDING_REVERSIBLE_STEP_HISTORY'
         AND jsonb_typeof(value) = 'array'
         AND value ? 'BOOK_CALL'`,
    );
  }

  public async up(_queryRunner: QueryRunner): Promise<void> {}

  public async down(_queryRunner: QueryRunner): Promise<void> {
    // The book-call onboarding step was removed; its user vars are not restored.
  }
}
