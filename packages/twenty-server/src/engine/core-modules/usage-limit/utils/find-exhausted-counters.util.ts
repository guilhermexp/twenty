import { isDefined } from 'twenty-shared/utils';

import { type LimitQuotaCounter } from 'src/engine/core-modules/usage-limit/types/limit-quota-counter.type';

export const findExhaustedCounters = ({
  counters,
  remainings,
}: {
  counters: LimitQuotaCounter[];
  remainings: (number | null)[];
}): LimitQuotaCounter[] =>
  counters.filter((_, index) => {
    const remaining = remainings[index];

    return isDefined(remaining) && remaining <= 0;
  });
