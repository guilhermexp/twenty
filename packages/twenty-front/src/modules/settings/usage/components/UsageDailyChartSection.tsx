import { GraphWidgetLineChart } from '@/page-layout/widgets/graph/graph-widget-line-chart/components/GraphWidgetLineChart';
import { type LineChartSeriesWithColor } from '@/page-layout/widgets/graph/graph-widget-line-chart/types/LineChartSeriesWithColor';
import { WidgetComponentInstanceContext } from '@/page-layout/widgets/states/contexts/WidgetComponentInstanceContext';
import { SettingsInfoContainer } from '@/settings/components/SettingsInfoContainer';
import { UsageSectionSkeleton } from '@/settings/usage/components/UsageSectionSkeleton';
import { useUsageAnalyticsData } from '@/settings/usage/hooks/useUsageAnalyticsData';
import { useUsageQuantityFormatter } from '@/settings/usage/hooks/useUsageQuantityFormatter';
import { Select } from '@/ui/input/components/Select';
import { styled } from '@linaria/react';
import { H2Title } from 'twenty-ui/typography';
import { Section } from 'twenty-ui/layout';
import {
  type UsageOperationType,
  type UsageUnit,
} from '~/generated-metadata/graphql';
import { formatDate } from '~/utils/date-utils';

const StyledLineChartContainer = styled.div`
  height: 200px;
  width: 100%;
`;

type UsageDailyChartSectionProps = {
  title: string;
  description: string;
  chartId: string;
  chartLabel: string;
  unit: UsageUnit;
  operationTypes?: UsageOperationType[];
  userWorkspaceId?: string;
  skip?: boolean;
};

export const UsageDailyChartSection = ({
  title,
  description,
  chartId,
  chartLabel,
  unit,
  operationTypes,
  userWorkspaceId,
  skip,
}: UsageDailyChartSectionProps) => {
  const { analytics, isInitialLoading, period, setPeriod, periodOptions } =
    useUsageAnalyticsData({
      operationTypes,
      userWorkspaceId,
      skip,
    });

  const { formatUsageQuantity } = useUsageQuantityFormatter();

  if (isInitialLoading) {
    return <UsageSectionSkeleton />;
  }

  if (!analytics) {
    return null;
  }

  // The server returns one gap-filled series per unit; only the requested
  // unit can be plotted on a single axis.
  const timeSeries = (
    userWorkspaceId
      ? (analytics.userDailyUsage?.dailyUsage ?? [])
      : analytics.timeSeries
  ).filter((point) => point.unit === unit);

  if (timeSeries.length === 0) {
    return null;
  }

  const lineData: LineChartSeriesWithColor[] = [
    {
      key: chartId,
      label: chartLabel,
      data: timeSeries.map((point) => ({
        x: formatDate(point.date, 'MMM d'),
        y: point.quantity,
      })),
    },
  ];

  return (
    <Section>
      <H2Title
        title={title}
        description={description}
        adornment={
          <Select
            dropdownId={`${chartId}-period`}
            value={period}
            options={periodOptions}
            onChange={setPeriod}
            needIconCheck
            selectSizeVariant="small"
          />
        }
      />
      <SettingsInfoContainer>
        <StyledLineChartContainer>
          <WidgetComponentInstanceContext.Provider
            value={{ instanceId: `${chartId}-line-chart` }}
          >
            <GraphWidgetLineChart
              id={`${chartId}-line-chart`}
              data={lineData}
              colorMode="automaticPalette"
              showLegend={false}
              enableArea
              displayType="custom"
              customFormatter={(value) => formatUsageQuantity(value, unit)}
            />
          </WidgetComponentInstanceContext.Provider>
        </StyledLineChartContainer>
      </SettingsInfoContainer>
    </Section>
  );
};
