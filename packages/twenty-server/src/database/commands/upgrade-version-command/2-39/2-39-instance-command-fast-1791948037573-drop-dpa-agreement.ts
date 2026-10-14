import { type QueryRunner } from 'typeorm';

import { RegisteredInstanceCommand } from 'src/engine/core-modules/upgrade/decorators/registered-instance-command.decorator';
import { type FastInstanceCommand } from 'src/engine/core-modules/upgrade/interfaces/fast-instance-command.interface';

@RegisteredInstanceCommand('2.39.0', 1791948037573)
export class DropDpaAgreementFastInstanceCommand
  implements FastInstanceCommand
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('DROP TABLE IF EXISTS "core"."dpaAgreement"');
    await queryRunner.query(
      'DROP TYPE IF EXISTS "core"."dpaAgreement_type_enum"',
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `DO $$ BEGIN CREATE TYPE "core"."dpaAgreement_type_enum" AS ENUM ('CLICK_THROUGH', 'SIGNED'); EXCEPTION WHEN duplicate_object THEN null; END $$`,
    );
    await queryRunner.query(
      'CREATE TABLE IF NOT EXISTS "core"."dpaAgreement" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "type" "core"."dpaAgreement_type_enum" NOT NULL, "templateVersion" character varying NOT NULL, "region" character varying NOT NULL, "processorEntity" character varying NOT NULL, "customerLegalEntityName" character varying, "signatoryName" character varying, "signatoryTitle" character varying, "signedFileId" uuid, "acceptedByUserId" uuid, "acceptedByEmail" character varying, "acceptedAt" TIMESTAMP WITH TIME ZONE NOT NULL, "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "workspaceId" uuid NOT NULL, CONSTRAINT "PK_dpaAgreement_id" PRIMARY KEY ("id"), CONSTRAINT "FK_abba2f6707bd2bc18bbd52f3c3e" FOREIGN KEY ("workspaceId") REFERENCES "core"."workspace"("id") ON DELETE CASCADE)',
    );
    await queryRunner.query(
      'CREATE INDEX IF NOT EXISTS "IDX_DPA_AGREEMENT_WORKSPACE_ID" ON "core"."dpaAgreement" ("workspaceId")',
    );
  }
}
