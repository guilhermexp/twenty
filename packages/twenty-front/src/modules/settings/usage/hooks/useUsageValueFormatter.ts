import { useNumberFormat } from '@/localization/hooks/useNumberFormat';

export const useUsageValueFormatter = () => {
  const { formatNumber } = useNumberFormat();

  const formatUsageValue = (value: number): string => {
    return `$${formatNumber(value, { decimals: 2 })}`;
  };

  const unitLabel = '$';

  return { formatUsageValue, unitLabel };
};
