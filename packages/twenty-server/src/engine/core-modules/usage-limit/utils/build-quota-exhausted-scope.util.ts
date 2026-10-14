import { type ExhaustedScope } from 'src/engine/core-modules/usage-limit/types/exhausted-scope.type';
import { type LimitQuotaCounter } from 'src/engine/core-modules/usage-limit/types/limit-quota-counter.type';
import { type UsageResourceType } from 'src/engine/core-modules/usage/enums/usage-resource-type.enum';

export const buildQuotaExhaustedScope = ({
  resourceType,
  counter,
}: {
  resourceType: UsageResourceType;
  counter: LimitQuotaCounter;
}): ExhaustedScope => ({
  resourceType,
  limitKind: 'quota',
  spenderType: counter.spenderType,
  spenderId: counter.spenderId,
  operationType: counter.operationType,
  limitValue: counter.limitValue,
  remaining: 0,
  periodCount: 1,
  periodUnit: counter.periodUnit,
  retryAfterMs: Math.max(counter.periodEnd.getTime() - Date.now(), 0),
});
