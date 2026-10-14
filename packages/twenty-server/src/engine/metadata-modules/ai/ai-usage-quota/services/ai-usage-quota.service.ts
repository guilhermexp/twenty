import { Injectable, Logger } from '@nestjs/common';

import { type LanguageModelUsage } from 'ai';

import { UsageQuotaGateService } from 'src/engine/core-modules/usage-limit/services/usage-quota-gate.service';
import { type QuotaCost } from 'src/engine/core-modules/usage-limit/types/quota-cost.type';
import { UsageOperationType } from 'src/engine/core-modules/usage/enums/usage-operation-type.enum';
import { UsageResourceType } from 'src/engine/core-modules/usage/enums/usage-resource-type.enum';
import { UsageUnit } from 'src/engine/core-modules/usage/enums/usage-unit.enum';
import { UsageRecorderService } from 'src/engine/core-modules/usage/services/usage-recorder.service';
import { type UsageSpenders } from 'src/engine/core-modules/usage/types/usage-spenders.type';
import { computeCostBreakdown } from 'src/engine/metadata-modules/ai/ai-usage-quota/utils/compute-cost-breakdown.util';
import { AiModelRegistryService } from 'src/engine/metadata-modules/ai/ai-models/services/ai-model-registry.service';
import { type ModelId } from 'src/engine/metadata-modules/ai/ai-models/types/model-id.type';

export type AiTokenUsageInput = {
  usage: LanguageModelUsage;
  cacheCreationTokens?: number;
};

const getTotalTokens = (usage: LanguageModelUsage): number =>
  (usage.inputTokens ?? 0) + (usage.outputTokens ?? 0);

@Injectable()
export class AiUsageQuotaService {
  private readonly logger = new Logger(AiUsageQuotaService.name);

  constructor(
    private readonly usageRecorderService: UsageRecorderService,
    private readonly aiModelRegistryService: AiModelRegistryService,
    private readonly usageQuotaGateService: UsageQuotaGateService,
  ) {}

  async assertAiExecutionAllowed({
    workspaceId,
    operationType,
    spenders,
  }: {
    workspaceId: string;
    operationType: UsageOperationType;
    spenders: UsageSpenders;
  }): Promise<void> {
    await this.usageQuotaGateService.assertUsageAllowed({
      workspaceId,
      resourceType: UsageResourceType.AI,
      operationType,
      spenders,
    });
  }

  private async consumeQuotaCost({
    workspaceId,
    operationType,
    spenders,
    cost,
  }: {
    workspaceId: string;
    operationType: UsageOperationType;
    spenders: UsageSpenders;
    cost: QuotaCost;
  }): Promise<void> {
    await this.usageQuotaGateService.consumeUsageQuota({
      workspaceId,
      resourceType: UsageResourceType.AI,
      operationType,
      spenders,
      cost,
    });
  }

  calculateCost(modelId: ModelId, usageInput: AiTokenUsageInput): number {
    const model = this.aiModelRegistryService.getEffectiveModelConfig(modelId);
    const { usage, cacheCreationTokens = 0 } = usageInput;

    const breakdown = computeCostBreakdown(model, {
      inputTokens: usage.inputTokens,
      outputTokens: usage.outputTokens,
      reasoningTokens: usage.outputTokenDetails?.reasoningTokens,
      cachedInputTokens: usage.inputTokenDetails?.cacheReadTokens,
      cacheCreationTokens,
    });

    this.logger.log(
      `Cost for ${model.modelId}: $${breakdown.totalCostInDollars.toFixed(6)} ` +
        `(input: ${breakdown.tokenCounts.adjustedInputTokens}, ` +
        `cached: ${breakdown.tokenCounts.cachedInputTokens}, ` +
        `cacheCreation: ${breakdown.tokenCounts.cacheCreationTokens}, ` +
        `output: ${breakdown.tokenCounts.adjustedOutputTokens}, ` +
        `reasoning: ${breakdown.tokenCounts.reasoningTokens})`,
    );

    return breakdown.totalCostInDollars;
  }

  async consumeAndRecordUsage(
    modelId: ModelId,
    usageInput: AiTokenUsageInput,
    workspaceId: string,
    operationType: UsageOperationType,
    agentId?: string | null,
    userWorkspaceId?: string | null,
  ): Promise<void> {
    const totalTokens = getTotalTokens(usageInput.usage);

    await this.consumeQuotaCost({
      workspaceId,
      operationType,
      spenders: { userWorkspaceId, agentId },
      cost: { quantity: totalTokens },
    });

    await this.emitAiTokenUsageEvent(
      workspaceId,
      totalTokens,
      modelId,
      operationType,
      agentId,
      userWorkspaceId,
    );
  }

  async consumeQuota({
    usage,
    workspaceId,
    operationType,
    spenders,
  }: {
    usage: LanguageModelUsage;
    workspaceId: string;
    operationType: UsageOperationType;
    spenders: UsageSpenders;
  }): Promise<void> {
    await this.consumeQuotaCost({
      workspaceId,
      operationType,
      spenders,
      cost: { quantity: getTotalTokens(usage) },
    });
  }

  async recordNativeWebSearchUsage(
    nativeWebSearchCallCount: number,
    workspaceId: string,
    userWorkspaceId?: string | null,
  ): Promise<void> {
    if (nativeWebSearchCallCount <= 0) {
      return;
    }

    await this.consumeQuotaCost({
      workspaceId,
      operationType: UsageOperationType.WEB_SEARCH,
      spenders: { userWorkspaceId },
      cost: { quantity: nativeWebSearchCallCount },
    });

    await this.usageRecorderService.record(workspaceId, [
      {
        resourceType: UsageResourceType.AI,
        operationType: UsageOperationType.WEB_SEARCH,
        quantity: nativeWebSearchCallCount,
        unit: UsageUnit.INVOCATION,
        spenders: { userWorkspaceId },
      },
    ]);
  }

  async emitAiTokenUsageEvent(
    workspaceId: string,
    totalTokens: number,
    modelId: ModelId,
    operationType: UsageOperationType,
    agentId?: string | null,
    userWorkspaceId?: string | null,
  ): Promise<void> {
    await this.usageRecorderService.record(workspaceId, [
      {
        resourceType: UsageResourceType.AI,
        operationType,
        quantity: totalTokens,
        unit: UsageUnit.TOKEN,
        resourceId: agentId || null,
        resourceContext: modelId,
        spenders: { userWorkspaceId, agentId },
      },
    ]);
  }
}
