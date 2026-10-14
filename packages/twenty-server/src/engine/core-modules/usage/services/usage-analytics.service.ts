/* @license Enterprise */

import { Injectable } from '@nestjs/common';

import { ClickHouseService } from 'src/database/clickhouse/clickhouse.service';
import { formatDateTimeForClickHouse } from 'src/database/clickhouse/utils/format-date-time-for-clickhouse.util';
import { UsageOperationType } from 'src/engine/core-modules/usage/enums/usage-operation-type.enum';
import { UsageUnit } from 'src/engine/core-modules/usage/enums/usage-unit.enum';
import { fillUsageTimeSeriesGaps } from 'src/engine/core-modules/usage/utils/fill-usage-time-series-gaps.util';

export type UsageBreakdownItem = {
  key: string;
  label?: string;
  unit: UsageUnit;
  quantity: number;
};

export type UsageTimeSeriesPoint = {
  date: string;
  unit: UsageUnit;
  quantity: number;
};

// ClickHouse serializes Int64 sums as strings in JSON formats.
type BreakdownRow = {
  key: string;
  unit: UsageUnit;
  quantity: string | number;
};

type TimeSeriesRow = {
  date: string;
  unit: UsageUnit;
  quantity: string | number;
};

type PeriodParams = {
  workspaceId: string;
  periodStart: Date;
  periodEnd: Date;
  operationTypes?: string[];
};

const ALLOWED_GROUP_BY_FIELDS = [
  'userWorkspaceId',
  'resourceId',
  'operationType',
  'resourceType',
  'resourceContext',
] as const;

type GroupByField = (typeof ALLOWED_GROUP_BY_FIELDS)[number];

const BREAKDOWN_QUERY_LIMIT = 50;

// Rows written while credits existed may carry units this fork no longer
// records (e.g. CREDIT), which the GraphQL enum could not serialize.
const RECORDED_USAGE_UNITS = Object.values(UsageUnit);

const AI_TOKEN_OPERATION_TYPES = [
  UsageOperationType.AI_CHAT_TOKEN,
  UsageOperationType.AI_WORKFLOW_TOKEN,
];

@Injectable()
export class UsageAnalyticsService {
  constructor(private readonly clickHouseService: ClickHouseService) {}

  async getAdminAiUsageByWorkspace(params: {
    periodStart: Date;
    periodEnd: Date;
  }): Promise<UsageBreakdownItem[]> {
    const query = `
      SELECT
        workspaceId AS key,
        unit,
        sum(quantity) AS quantity
      FROM usageEvent
      WHERE timestamp >= {periodStart:String}
        AND timestamp < {periodEnd:String}
        AND operationType IN ({operationTypes:Array(String)})
        AND unit = {tokenUnit:String}
      GROUP BY workspaceId, unit
      ORDER BY quantity DESC
      LIMIT ${BREAKDOWN_QUERY_LIMIT}
    `;

    const rows = await this.clickHouseService.select<BreakdownRow>(query, {
      periodStart: formatDateTimeForClickHouse(params.periodStart),
      periodEnd: formatDateTimeForClickHouse(params.periodEnd),
      operationTypes: AI_TOKEN_OPERATION_TYPES,
      tokenUnit: UsageUnit.TOKEN,
    });

    return rows.map(fromBreakdownRow);
  }

  async getUsageByUser(params: PeriodParams): Promise<UsageBreakdownItem[]> {
    return this.queryBreakdown({
      ...params,
      groupByField: 'userWorkspaceId',
      extraWhere: "AND userWorkspaceId != ''",
    });
  }

  async getUsageByModel(params: PeriodParams): Promise<UsageBreakdownItem[]> {
    return this.queryBreakdown({
      ...params,
      groupByField: 'resourceContext',
      extraWhere: "AND resourceContext != ''",
    });
  }

  async getUsageByOperationType(
    params: PeriodParams & { userWorkspaceId?: string },
  ): Promise<UsageBreakdownItem[]> {
    return this.queryBreakdown({
      ...params,
      groupByField: 'operationType',
      ...(params.userWorkspaceId && {
        extraWhere: 'AND userWorkspaceId = {userWorkspaceId:String}',
        extraParams: { userWorkspaceId: params.userWorkspaceId },
      }),
    });
  }

  async getUsageByUserTimeSeries(
    params: PeriodParams & { userWorkspaceId: string },
  ): Promise<UsageTimeSeriesPoint[]> {
    return this.queryTimeSeries({
      ...params,
      extraWhere: 'AND userWorkspaceId = {userWorkspaceId:String}',
      extraParams: { userWorkspaceId: params.userWorkspaceId },
    });
  }

  async getUsageTimeSeries(
    params: PeriodParams,
  ): Promise<UsageTimeSeriesPoint[]> {
    return this.queryTimeSeries(params);
  }

  // Quantities are only summed within a unit: an operation can record several
  // units (a code execution counts invocations and milliseconds), and adding
  // tokens to requests would mean nothing.
  private async queryBreakdown({
    workspaceId,
    periodStart,
    periodEnd,
    groupByField,
    operationTypes,
    extraWhere = '',
    extraParams,
  }: PeriodParams & {
    groupByField: GroupByField;
    extraWhere?: string;
    extraParams?: Record<string, unknown>;
  }): Promise<UsageBreakdownItem[]> {
    if (!ALLOWED_GROUP_BY_FIELDS.includes(groupByField)) {
      throw new Error(`Invalid groupByField: ${groupByField}`);
    }

    const hasOperationTypes = operationTypes && operationTypes.length > 0;

    const query = `
      SELECT
        ${groupByField} AS key,
        unit,
        sum(quantity) AS quantity
      FROM usageEvent
      WHERE workspaceId = {workspaceId:String}
        AND timestamp >= {periodStart:String}
        AND timestamp < {periodEnd:String}
        AND unit IN ({units:Array(String)})
        ${hasOperationTypes ? 'AND operationType IN ({operationTypes:Array(String)})' : ''}
        ${extraWhere}
      GROUP BY ${groupByField}, unit
      ORDER BY quantity DESC
      LIMIT ${BREAKDOWN_QUERY_LIMIT}
    `;

    const rows = await this.clickHouseService.select<BreakdownRow>(query, {
      workspaceId,
      periodStart: formatDateTimeForClickHouse(periodStart),
      periodEnd: formatDateTimeForClickHouse(periodEnd),
      units: RECORDED_USAGE_UNITS,
      ...(hasOperationTypes ? { operationTypes } : {}),
      ...(extraParams ?? {}),
    });

    return rows.map(fromBreakdownRow);
  }

  private async queryTimeSeries({
    workspaceId,
    periodStart,
    periodEnd,
    operationTypes,
    extraWhere = '',
    extraParams,
  }: PeriodParams & {
    extraWhere?: string;
    extraParams?: Record<string, unknown>;
  }): Promise<UsageTimeSeriesPoint[]> {
    const hasOperationTypes = operationTypes && operationTypes.length > 0;

    const query = `
      SELECT
        formatDateTime(timestamp, '%Y-%m-%d') AS date,
        unit,
        sum(quantity) AS quantity
      FROM usageEvent
      WHERE workspaceId = {workspaceId:String}
        AND timestamp >= {periodStart:String}
        AND timestamp < {periodEnd:String}
        AND unit IN ({units:Array(String)})
        ${hasOperationTypes ? 'AND operationType IN ({operationTypes:Array(String)})' : ''}
        ${extraWhere}
      GROUP BY date, unit
      ORDER BY unit ASC, date ASC
    `;

    const rows = await this.clickHouseService.select<TimeSeriesRow>(query, {
      workspaceId,
      periodStart: formatDateTimeForClickHouse(periodStart),
      periodEnd: formatDateTimeForClickHouse(periodEnd),
      units: RECORDED_USAGE_UNITS,
      ...(hasOperationTypes ? { operationTypes } : {}),
      ...(extraParams ?? {}),
    });

    return fillUsageTimeSeriesGaps({
      rows: rows.map((row) => ({
        date: row.date,
        unit: row.unit,
        quantity: Number(row.quantity),
      })),
      periodStart,
      periodEnd,
    });
  }
}

const fromBreakdownRow = (row: BreakdownRow): UsageBreakdownItem => ({
  key: row.key,
  unit: row.unit,
  quantity: Number(row.quantity),
});
