import { UsageUnit } from 'src/engine/core-modules/usage/enums/usage-unit.enum';
import { fillUsageTimeSeriesGaps } from 'src/engine/core-modules/usage/utils/fill-usage-time-series-gaps.util';

describe('fillUsageTimeSeriesGaps', () => {
  it('should return an empty series when no rows are returned', () => {
    const result = fillUsageTimeSeriesGaps({
      rows: [],
      periodStart: new Date('2026-04-20T00:00:00.000Z'),
      periodEnd: new Date('2026-04-23T23:59:59.999Z'),
    });

    expect(result).toEqual([]);
  });

  it('should fill one series per unit without mixing quantities', () => {
    const result = fillUsageTimeSeriesGaps({
      rows: [
        { date: '2026-04-20', unit: UsageUnit.INVOCATION, quantity: 3 },
        { date: '2026-04-21', unit: UsageUnit.MILLISECOND, quantity: 1200 },
      ],
      periodStart: new Date('2026-04-20T00:00:00.000Z'),
      periodEnd: new Date('2026-04-21T23:59:59.999Z'),
    });

    expect(result).toEqual([
      { date: '2026-04-20', unit: UsageUnit.INVOCATION, quantity: 3 },
      { date: '2026-04-21', unit: UsageUnit.INVOCATION, quantity: 0 },
      { date: '2026-04-20', unit: UsageUnit.MILLISECOND, quantity: 0 },
      { date: '2026-04-21', unit: UsageUnit.MILLISECOND, quantity: 1200 },
    ]);
  });

  it('should fill internal gaps with zero while preserving real values', () => {
    const result = fillUsageTimeSeriesGaps({
      rows: [
        { date: '2026-04-20', unit: UsageUnit.TOKEN, quantity: 100 },
        { date: '2026-04-22', unit: UsageUnit.TOKEN, quantity: 250 },
      ],
      periodStart: new Date('2026-04-20T00:00:00.000Z'),
      periodEnd: new Date('2026-04-23T23:59:59.999Z'),
    });

    expect(result).toEqual([
      { date: '2026-04-20', unit: UsageUnit.TOKEN, quantity: 100 },
      { date: '2026-04-21', unit: UsageUnit.TOKEN, quantity: 0 },
      { date: '2026-04-22', unit: UsageUnit.TOKEN, quantity: 250 },
      { date: '2026-04-23', unit: UsageUnit.TOKEN, quantity: 0 },
    ]);
  });

  it('should pad trailing dates with zero when data stops before period end (Félix bug)', () => {
    const result = fillUsageTimeSeriesGaps({
      rows: [
        { date: '2026-04-15', unit: UsageUnit.TOKEN, quantity: 50 },
        { date: '2026-04-16', unit: UsageUnit.TOKEN, quantity: 75 },
      ],
      periodStart: new Date('2026-04-15T00:00:00.000Z'),
      periodEnd: new Date('2026-04-20T23:59:59.999Z'),
    });

    expect(result).toEqual([
      { date: '2026-04-15', unit: UsageUnit.TOKEN, quantity: 50 },
      { date: '2026-04-16', unit: UsageUnit.TOKEN, quantity: 75 },
      { date: '2026-04-17', unit: UsageUnit.TOKEN, quantity: 0 },
      { date: '2026-04-18', unit: UsageUnit.TOKEN, quantity: 0 },
      { date: '2026-04-19', unit: UsageUnit.TOKEN, quantity: 0 },
      { date: '2026-04-20', unit: UsageUnit.TOKEN, quantity: 0 },
    ]);
  });

  it('should pad leading dates with zero when data starts after period start', () => {
    const result = fillUsageTimeSeriesGaps({
      rows: [{ date: '2026-04-22', unit: UsageUnit.TOKEN, quantity: 99 }],
      periodStart: new Date('2026-04-20T00:00:00.000Z'),
      periodEnd: new Date('2026-04-23T23:59:59.999Z'),
    });

    expect(result).toEqual([
      { date: '2026-04-20', unit: UsageUnit.TOKEN, quantity: 0 },
      { date: '2026-04-21', unit: UsageUnit.TOKEN, quantity: 0 },
      { date: '2026-04-22', unit: UsageUnit.TOKEN, quantity: 99 },
      { date: '2026-04-23', unit: UsageUnit.TOKEN, quantity: 0 },
    ]);
  });

  it('should return data unchanged when every day in period is already present', () => {
    const rows = [
      { date: '2026-04-20', unit: UsageUnit.TOKEN, quantity: 1 },
      { date: '2026-04-21', unit: UsageUnit.TOKEN, quantity: 2 },
      { date: '2026-04-22', unit: UsageUnit.TOKEN, quantity: 3 },
    ];

    const result = fillUsageTimeSeriesGaps({
      rows,
      periodStart: new Date('2026-04-20T00:00:00.000Z'),
      periodEnd: new Date('2026-04-22T23:59:59.999Z'),
    });

    expect(result).toEqual(rows);
  });

  it('should return a single entry when period spans one day', () => {
    const result = fillUsageTimeSeriesGaps({
      rows: [{ date: '2026-04-23', unit: UsageUnit.TOKEN, quantity: 42 }],
      periodStart: new Date('2026-04-23T00:00:00.000Z'),
      periodEnd: new Date('2026-04-23T23:59:59.999Z'),
    });

    expect(result).toEqual([
      { date: '2026-04-23', unit: UsageUnit.TOKEN, quantity: 42 },
    ]);
  });

  it('should return an empty array when periodStart is after periodEnd', () => {
    const result = fillUsageTimeSeriesGaps({
      rows: [],
      periodStart: new Date('2026-04-25T00:00:00.000Z'),
      periodEnd: new Date('2026-04-20T23:59:59.999Z'),
    });

    expect(result).toEqual([]);
  });

  it('should treat periodEnd as exclusive to match SQL `timestamp < periodEnd` semantics', () => {
    const result = fillUsageTimeSeriesGaps({
      rows: [{ date: '2026-04-23', unit: UsageUnit.TOKEN, quantity: 10 }],
      periodStart: new Date('2026-04-22T00:00:00.000Z'),
      periodEnd: new Date('2026-04-24T00:00:00.000Z'),
    });

    expect(result).toEqual([
      { date: '2026-04-22', unit: UsageUnit.TOKEN, quantity: 0 },
      { date: '2026-04-23', unit: UsageUnit.TOKEN, quantity: 10 },
    ]);
  });

  it('should return dates in ascending order', () => {
    const result = fillUsageTimeSeriesGaps({
      rows: [
        { date: '2026-04-22', unit: UsageUnit.TOKEN, quantity: 5 },
        { date: '2026-04-20', unit: UsageUnit.TOKEN, quantity: 1 },
      ],
      periodStart: new Date('2026-04-20T00:00:00.000Z'),
      periodEnd: new Date('2026-04-23T23:59:59.999Z'),
    });

    expect(result.map((point) => point.date)).toEqual([
      '2026-04-20',
      '2026-04-21',
      '2026-04-22',
      '2026-04-23',
    ]);
  });
});
