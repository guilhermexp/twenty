import { type Temporal } from 'temporal-polyfill';
import {
  isPlainDateAfter,
  isPlainDateBeforeOrEqual,
  parseToPlainDateOrThrow,
} from 'twenty-shared/utils';

import { type UsageUnit } from 'src/engine/core-modules/usage/enums/usage-unit.enum';
import { type UsageTimeSeriesPoint } from 'src/engine/core-modules/usage/services/usage-analytics.service';

type FillUsageTimeSeriesGapsParams = {
  rows: UsageTimeSeriesPoint[];
  periodStart: Date;
  periodEnd: Date;
};

// Quantities of different units cannot be added up, so each unit present in
// the period gets its own gap-free daily series.
export const fillUsageTimeSeriesGaps = ({
  rows,
  periodStart,
  periodEnd,
}: FillUsageTimeSeriesGapsParams): UsageTimeSeriesPoint[] => {
  const startDate = parseToPlainDateOrThrow(periodStart.toISOString());
  const lastIncludedInstant = new Date(periodEnd.getTime() - 1);
  const endDate = parseToPlainDateOrThrow(lastIncludedInstant.toISOString());

  if (isPlainDateAfter(startDate, endDate)) {
    return [];
  }

  const rowsByUnitAndDate = new Map<
    UsageUnit,
    Map<string, UsageTimeSeriesPoint>
  >();

  for (const row of rows) {
    const rowsByDate = rowsByUnitAndDate.get(row.unit) ?? new Map();

    rowsByDate.set(row.date, row);
    rowsByUnitAndDate.set(row.unit, rowsByDate);
  }

  const filled: UsageTimeSeriesPoint[] = [];

  for (const [unit, rowsByDate] of rowsByUnitAndDate) {
    let currentDateCursor: Temporal.PlainDate = startDate;

    while (isPlainDateBeforeOrEqual(currentDateCursor, endDate)) {
      const date = currentDateCursor.toString();

      filled.push(rowsByDate.get(date) ?? { date, unit, quantity: 0 });
      currentDateCursor = currentDateCursor.add({ days: 1 });
    }
  }

  return filled;
};
