import { type QueryRunner } from 'typeorm';

import { RegisteredInstanceCommand } from 'src/engine/core-modules/upgrade/decorators/registered-instance-command.decorator';
import { type FastInstanceCommand } from 'src/engine/core-modules/upgrade/interfaces/fast-instance-command.interface';

@RegisteredInstanceCommand('2.39.0', 1791948190741)
export class DropWorkspaceDiscoverabilityFastInstanceCommand
  implements FastInstanceCommand
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      'ALTER TABLE "core"."workspace" DROP COLUMN IF EXISTS "workspaceDiscoverability"',
    );
    await queryRunner.query(
      'DROP TYPE IF EXISTS "core"."workspace_discoverability_enum"',
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `DO $$ BEGIN
        CREATE TYPE "core"."workspace_discoverability_enum" AS ENUM('PUBLIC', 'MEMBERS_AND_INVITEES', 'HIDDEN');
      EXCEPTION
        WHEN duplicate_object THEN NULL;
      END $$`,
    );
    await queryRunner.query(
      `ALTER TABLE "core"."workspace" ADD COLUMN IF NOT EXISTS "workspaceDiscoverability" "core"."workspace_discoverability_enum" NOT NULL DEFAULT 'PUBLIC'`,
    );
  }
}
