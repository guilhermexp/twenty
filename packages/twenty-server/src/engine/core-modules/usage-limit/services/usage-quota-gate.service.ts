import { Injectable } from '@nestjs/common';

import { UsageLimitQuotaService } from 'src/engine/core-modules/usage-limit/services/usage-limit-quota.service';
import { type QuotaCost } from 'src/engine/core-modules/usage-limit/types/quota-cost.type';
import { type UsageOperationType } from 'src/engine/core-modules/usage/enums/usage-operation-type.enum';
import { type UsageResourceType } from 'src/engine/core-modules/usage/enums/usage-resource-type.enum';
import { type UsageSpenders } from 'src/engine/core-modules/usage/types/usage-spenders.type';

type UsageQuotaScope = {
  workspaceId: string;
  resourceType: UsageResourceType;
  operationType: UsageOperationType;
  spenders: UsageSpenders;
};

@Injectable()
export class UsageQuotaGateService {
  constructor(
    private readonly usageLimitQuotaService: UsageLimitQuotaService,
  ) {}

  async assertUsageAllowed({
    workspaceId,
    resourceType,
    operationType,
    spenders,
  }: UsageQuotaScope): Promise<void> {
    await this.usageLimitQuotaService.assertQuotaNotExhausted({
      workspaceId,
      resourceType,
      operationType,
      spenders,
    });
  }

  async consumeUsageQuota({
    workspaceId,
    resourceType,
    operationType,
    spenders,
    cost,
  }: UsageQuotaScope & { cost: QuotaCost }): Promise<void> {
    // An exhausted quota blocks the next call through assertUsageAllowed;
    // usage already spent is still counted in full.
    await this.usageLimitQuotaService.consumeQuota({
      workspaceId,
      resourceType,
      operationType,
      spenders,
      cost,
    });
  }
}
