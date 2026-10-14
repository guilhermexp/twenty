import { UsageSectionSkeleton } from '@/settings/usage/components/UsageSectionSkeleton';
import { useUsageAnalyticsData } from '@/settings/usage/hooks/useUsageAnalyticsData';
import { useUsageQuantityFormatter } from '@/settings/usage/hooks/useUsageQuantityFormatter';
import { getUsageOperationTypeLabel } from '@/settings/usage/utils/getUsageOperationTypeLabel';
import { Select } from '@/ui/input/components/Select';
import { Table } from '@/ui/layout/table/components/Table';
import { TableCell } from '@/ui/layout/table/components/TableCell';
import { TableHeader } from '@/ui/layout/table/components/TableHeader';
import { TableRow } from '@/ui/layout/table/components/TableRow';
import { useLingui } from '@lingui/react/macro';
import { isDefined } from 'twenty-shared/utils';
import { Section } from 'twenty-ui/layout';
import { themeCssVariables } from 'twenty-ui/theme-constants';
import { H2Title } from 'twenty-ui/typography';

const GRID_TEMPLATE_COLUMNS = '1fr 160px';

type UsageByOperationTypeTableSectionProps = {
  title: string;
  description: string;
  sectionId: string;
};

export const UsageByOperationTypeTableSection = ({
  title,
  description,
  sectionId,
}: UsageByOperationTypeTableSectionProps) => {
  const { t } = useLingui();
  const { formatUsageQuantity } = useUsageQuantityFormatter();

  const { analytics, isInitialLoading, period, setPeriod, periodOptions } =
    useUsageAnalyticsData({});

  if (isInitialLoading) {
    return <UsageSectionSkeleton />;
  }

  if (!analytics) {
    return null;
  }

  const rows = analytics.usageByOperationType
    .map((item) => {
      const operationTypeLabel = getUsageOperationTypeLabel(item.key);

      return {
        ...item,
        label: isDefined(operationTypeLabel) ? t(operationTypeLabel) : item.key,
      };
    })
    // Stable sort keeps each operation type's units next to each other.
    .sort((firstRow, secondRow) =>
      firstRow.label.localeCompare(secondRow.label),
    );

  if (rows.length === 0) {
    return null;
  }

  return (
    <Section>
      <H2Title
        title={title}
        description={description}
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
      <Table>
        <TableRow gridTemplateColumns={GRID_TEMPLATE_COLUMNS}>
          <TableHeader>{t`Type`}</TableHeader>
          <TableHeader align="right">{t`Usage`}</TableHeader>
        </TableRow>
        {rows.map((row) => (
          <TableRow
            key={`${row.key}-${row.unit}`}
            gridTemplateColumns={GRID_TEMPLATE_COLUMNS}
          >
            <TableCell color={themeCssVariables.font.color.primary}>
              {row.label}
            </TableCell>
            <TableCell align="right">
              {formatUsageQuantity(row.quantity, row.unit)}
            </TableCell>
          </TableRow>
        ))}
      </Table>
    </Section>
  );
};
