import { QueryRunner } from 'typeorm';

import { RegisteredInstanceCommand } from 'src/engine/core-modules/upgrade/decorators/registered-instance-command.decorator';
import { FastInstanceCommand } from 'src/engine/core-modules/upgrade/interfaces/fast-instance-command.interface';

@RegisteredInstanceCommand('2.39.0', 1791945277928)
export class DropAgentChatThreadCreditsFastInstanceCommand
  implements FastInstanceCommand
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      'ALTER TABLE "core"."agentChatThread" DROP COLUMN IF EXISTS "totalInputCredits"',
    );

    await queryRunner.query(
      'ALTER TABLE "core"."agentChatThread" DROP COLUMN IF EXISTS "totalOutputCredits"',
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      'ALTER TABLE "core"."agentChatThread" ADD COLUMN IF NOT EXISTS "totalInputCredits" bigint NOT NULL DEFAULT 0',
    );

    await queryRunner.query(
      'ALTER TABLE "core"."agentChatThread" ADD COLUMN IF NOT EXISTS "totalOutputCredits" bigint NOT NULL DEFAULT 0',
    );
  }
}
