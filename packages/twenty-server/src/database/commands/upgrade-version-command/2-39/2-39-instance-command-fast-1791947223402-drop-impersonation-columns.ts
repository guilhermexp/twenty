import { type QueryRunner } from 'typeorm';

import { RegisteredInstanceCommand } from 'src/engine/core-modules/upgrade/decorators/registered-instance-command.decorator';
import { type FastInstanceCommand } from 'src/engine/core-modules/upgrade/interfaces/fast-instance-command.interface';

@RegisteredInstanceCommand('2.39.0', 1791947223402)
export class DropImpersonationColumnsFastInstanceCommand
  implements FastInstanceCommand
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      'ALTER TABLE "core"."user" DROP COLUMN IF EXISTS "canImpersonate"',
    );
    await queryRunner.query(
      'ALTER TABLE "core"."workspace" DROP COLUMN IF EXISTS "allowImpersonation"',
    );
    await queryRunner.query(
      'ALTER TABLE "core"."userSession" DROP COLUMN IF EXISTS "isImpersonating"',
    );
    await queryRunner.query(
      'ALTER TABLE "core"."userSession" DROP COLUMN IF EXISTS "impersonatorUserWorkspaceId"',
    );
    await queryRunner.query(
      'ALTER TABLE "core"."userSession" DROP COLUMN IF EXISTS "impersonatedUserWorkspaceId"',
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      'ALTER TABLE "core"."userSession" ADD COLUMN IF NOT EXISTS "impersonatedUserWorkspaceId" uuid',
    );
    await queryRunner.query(
      'ALTER TABLE "core"."userSession" ADD COLUMN IF NOT EXISTS "impersonatorUserWorkspaceId" uuid',
    );
    await queryRunner.query(
      'ALTER TABLE "core"."userSession" ADD COLUMN IF NOT EXISTS "isImpersonating" boolean NOT NULL DEFAULT false',
    );
    await queryRunner.query(
      'ALTER TABLE "core"."workspace" ADD COLUMN IF NOT EXISTS "allowImpersonation" boolean NOT NULL DEFAULT true',
    );
    await queryRunner.query(
      'ALTER TABLE "core"."user" ADD COLUMN IF NOT EXISTS "canImpersonate" boolean NOT NULL DEFAULT false',
    );
  }
}
