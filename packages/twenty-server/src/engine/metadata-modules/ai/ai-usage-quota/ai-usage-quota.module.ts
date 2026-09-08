import { Module } from '@nestjs/common';

import { UsageLimitModule } from 'src/engine/core-modules/usage-limit/usage-limit.module';
import { UsageModule } from 'src/engine/core-modules/usage/usage.module';
import { AiUsageQuotaService } from 'src/engine/metadata-modules/ai/ai-usage-quota/services/ai-usage-quota.service';
import { AiModelsModule } from 'src/engine/metadata-modules/ai/ai-models/ai-models.module';

@Module({
  imports: [AiModelsModule, UsageLimitModule, UsageModule],
  providers: [AiUsageQuotaService],
  exports: [AiUsageQuotaService],
})
export class AiUsageQuotaModule {}
