/* @license Enterprise */

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppTokenEntity } from 'src/engine/core-modules/app-token/app-token.entity';
import { EnterpriseResolver } from 'src/engine/core-modules/enterprise/enterprise.resolver';
import { CustomAiProviderAccessService } from 'src/engine/core-modules/enterprise/services/custom-ai-provider-access.service';
import { EnterprisePlanService } from 'src/engine/core-modules/enterprise/services/enterprise-plan.service';
import { TwentyConfigModule } from 'src/engine/core-modules/twenty-config/twenty-config.module';
import { UserWorkspaceEntity } from 'src/engine/core-modules/user-workspace/user-workspace.entity';

@Module({
  imports: [
    TwentyConfigModule,
    TypeOrmModule.forFeature([UserWorkspaceEntity, AppTokenEntity]),
  ],
  providers: [
    EnterprisePlanService,
    CustomAiProviderAccessService,
    EnterpriseResolver,
  ],
  exports: [EnterprisePlanService, CustomAiProviderAccessService],
})
export class EnterpriseModule {}
