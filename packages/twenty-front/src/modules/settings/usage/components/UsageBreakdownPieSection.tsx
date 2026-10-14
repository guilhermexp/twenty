import { createGraphColorRegistry } from '@/page-layout/widgets/graph/utils/createGraphColorRegistry';
import { getColorSchemeByIndex } from '@/page-layout/widgets/graph/utils/getColorSchemeByIndex';
import { SettingsInfoContainer } from '@/settings/components/SettingsInfoContainer';
import { UsagePieChart } from '@/settings/usage/components/UsagePieChart';
import { UsageSectionSkeleton } from '@/settings/usage/components/UsageSectionSkeleton';
import { useUsageAnalyticsData } from '@/settings/usage/hooks/useUsageAnalyticsData';
import { useUsageQuantityFormatter } from '@/settings/usage/hooks/useUsageQuantityFormatter';
import { getUsageOperationTypeLabel } from '@/settings/usage/utils/getUsageOperationTypeLabel';
import { Select } from '@/ui/input/components/Select';
import { useLingui } from '@lingui/react/macro';
import { useContext } from 'react';
import { isDefined } from 'twenty-shared/utils';
import { H2Title } from 'twenty-ui/typography';
import { Section } from 'twenty-ui/layout';
import { ThemeContext } from 'twenty-ui/theme-constants';
import {
  type UsageOperationType,
  type UsageUnit,
} from '~/generated-metadata/graphql';

type UsageBreakdownField = 'operationType' | 'model';

type UsageBreakdownPieSectionProps = {
  title: string;
  description?: string;
  operationTypes?: UsageOperationType[];
  userWorkspaceId?: string;
  skip?: boolean;
  breakdownField: UsageBreakdownField;
  unit: UsageUnit;
  sectionId: string;
};

export const UsageBreakdownPieSection = ({
  title,
  description,
  operationTypes,
  userWorkspaceId,
  skip,
  breakdownField,
  unit,
  sectionId,
}: UsageBreakdownPieSectionProps) => {
  const { theme } = useContext(ThemeContext);
  const { t } = useLingui();
  const { formatUsageQuantity } = useUsageQuantityFormatter();
  const colorRegistry = createGraphColorRegistry(theme.color);

  const { analytics, isInitialLoading, period, setPeriod, periodOptions } =
    useUsageAnalyticsData({
      operationTypes,
      userWorkspaceId,
      skip,
    });

  if (isInitialLoading) {
    return <UsageSectionSkeleton />;
  }

  if (!analytics) {
    return null;
  }

  const breakdownDataByField = {
    operationType: analytics.usageByOperationType,
    model: analytics.usageByModel,
  };
  // Quantities of different units cannot share a pie, so only the requested
  // unit is charted.
  const breakdownData = breakdownDataByField[breakdownField].filter(
    (item) => item.unit === unit,
  );

  if (breakdownData.length === 0) {
    return null;
  }

  const total = breakdownData.reduce((sum, item) => sum + item.quantity, 0);

  // Operation types are a fixed platform vocabulary translated here; model
  // breakdowns name workspace data, which only the server can resolve.
  const formatLabel = ({
    key,
    label,
  }: {
    key: string;
    label?: string | null;
  }) => {
    if (breakdownField !== 'operationType') {
      return label ?? key;
    }

    const operationTypeLabel = getUsageOperationTypeLabel(key);

    return isDefined(operationTypeLabel) ? t(operationTypeLabel) : key;
  };

  const pieData = breakdownData.map((item, index) => ({
    id: formatLabel(item),
    value: item.quantity,
    color: getColorSchemeByIndex(colorRegistry, index).solid,
  }));

  const resolvedDescription = description ?? formatUsageQuantity(total, unit);

  return (
    <Section>
      <H2Title
        title={title}
        description={resolvedDescription}
        adornment={
          <Select
            dropdownId={`${sectionId}-period`}
            value={period}
            options={periodOptions}
            onChange={setPeriod}
            needIconCheck
            selectSizeVariant="small"
          />
        }
      />
      <SettingsInfoContainer>
        <UsagePieChart data={pieData} unit={unit} />
      </SettingsInfoContainer>
    </Section>
  );
};
