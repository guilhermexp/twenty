import { type QuotaCost } from 'src/engine/core-modules/usage-limit/types/quota-cost.type';

// Counters are debited through Redis DECRBY, which only takes integers, and a
// negative cost would hand budget back to the spender.
export const clampQuotaCost = (cost: QuotaCost): QuotaCost => ({
  quantity:
    Number.isSafeInteger(cost.quantity) && cost.quantity >= 0
      ? cost.quantity
      : 0,
});
