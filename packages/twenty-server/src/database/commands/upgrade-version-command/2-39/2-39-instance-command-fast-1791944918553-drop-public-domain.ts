import { type QueryRunner } from 'typeorm';

import { RegisteredInstanceCommand } from 'src/engine/core-modules/upgrade/decorators/registered-instance-command.decorator';
import { type FastInstanceCommand } from 'src/engine/core-modules/upgrade/interfaces/fast-instance-command.interface';

@RegisteredInstanceCommand('2.39.0', 1791944918553)
export class DropPublicDomainFastInstanceCommand
  implements FastInstanceCommand
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      'ALTER TABLE "core"."application" DROP COLUMN IF EXISTS "primaryPublicDomainId"',
    );
    await queryRunner.query('DROP TABLE IF EXISTS "core"."publicDomain"');
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      'CREATE TABLE IF NOT EXISTS "core"."publicDomain" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "domain" character varying NOT NULL, "isValidated" boolean NOT NULL DEFAULT false, "workspaceId" uuid NOT NULL, "applicationId" uuid NOT NULL, CONSTRAINT "UQ_1311e24fbd049c561c53a274f2a" UNIQUE ("domain"), CONSTRAINT "PK_ff55a0f1bc3b6e2c32feff734b1" PRIMARY KEY ("id"))',
    );
    await queryRunner.query(
      'CREATE INDEX IF NOT EXISTS "IDX_PUBLIC_DOMAIN_APPLICATION_ID" ON "core"."publicDomain" ("applicationId")',
    );
    await queryRunner.query(
      'ALTER TABLE "core"."publicDomain" ADD CONSTRAINT "FK_7e9ca5fd7aa30b8396ea3d1d6be" FOREIGN KEY ("workspaceId") REFERENCES "core"."workspace"("id") ON DELETE CASCADE ON UPDATE NO ACTION',
    );
    await queryRunner.query(
      'ALTER TABLE "core"."publicDomain" ADD CONSTRAINT "FK_39f1ad35993f3994cd5400e81a0" FOREIGN KEY ("applicationId") REFERENCES "core"."application"("id") ON DELETE CASCADE ON UPDATE NO ACTION',
    );
    await queryRunner.query(
      'ALTER TABLE "core"."application" ADD COLUMN IF NOT EXISTS "primaryPublicDomainId" uuid',
    );
    await queryRunner.query(
      'ALTER TABLE "core"."application" ADD CONSTRAINT "FK_38ac5dccee353ca07862a5a94bf" FOREIGN KEY ("primaryPublicDomainId") REFERENCES "core"."publicDomain"("id") ON DELETE SET NULL ON UPDATE NO ACTION',
    );
  }
}
