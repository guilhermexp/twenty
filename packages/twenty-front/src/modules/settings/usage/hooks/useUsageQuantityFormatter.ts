import { useLingui } from '@lingui/react/macro';
import { assertUnreachable } from 'twenty-shared/utils';

import { useNumberFormat } from '@/localization/hooks/useNumberFormat';
import { UsageUnit } from '~/generated-metadata/graphql';

const MILLISECONDS_PER_SECOND = 1000;
const SECONDS_PER_MINUTE = 60;
const MINUTES_PER_HOUR = 60;

export const useUsageQuantityFormatter = () => {
  const { t } = useLingui();
  const { formatNumber } = useNumberFormat();

  const formatDuration = (milliseconds: number): string => {
    if (milliseconds < MILLISECONDS_PER_SECOND) {
      const formattedMilliseconds = formatNumber(milliseconds);

      return t`${formattedMilliseconds} ms`;
    }

    const seconds = milliseconds / MILLISECONDS_PER_SECOND;

    if (seconds < SECONDS_PER_MINUTE) {
      const formattedSeconds = formatNumber(seconds, { decimals: 1 });

      return t`${formattedSeconds} s`;
    }

    const minutes = seconds / SECONDS_PER_MINUTE;

    if (minutes < MINUTES_PER_HOUR) {
      const formattedMinutes = formatNumber(minutes, { decimals: 1 });

      return t`${formattedMinutes} min`;
    }

    const formattedHours = formatNumber(minutes / MINUTES_PER_HOUR, {
      abbreviate: true,
      decimals: 1,
    });

    return t`${formattedHours} h`;
  };

  const formatUsageQuantity = (quantity: number, unit: UsageUnit): string => {
    switch (unit) {
      case UsageUnit.TOKEN: {
        const formattedQuantity = formatNumber(quantity, {
          abbreviate: true,
          decimals: 1,
        });

        return t`${formattedQuantity} tokens`;
      }
      case UsageUnit.INVOCATION: {
        const formattedQuantity = formatNumber(quantity, {
          abbreviate: true,
          decimals: 1,
        });

        return t`${formattedQuantity} calls`;
      }
      case UsageUnit.REQUEST: {
        const formattedQuantity = formatNumber(quantity, {
          abbreviate: true,
          decimals: 1,
        });

        return t`${formattedQuantity} requests`;
      }
      case UsageUnit.MILLISECOND:
        return formatDuration(quantity);
      default:
        return assertUnreachable(unit);
    }
  };

  return { formatUsageQuantity };
};
