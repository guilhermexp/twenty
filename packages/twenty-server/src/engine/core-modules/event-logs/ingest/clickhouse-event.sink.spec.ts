import { ClickHouseService } from 'src/database/clickhouse/clickhouse.service';
import { ClickHouseEventSink } from 'src/engine/core-modules/event-logs/ingest/clickhouse-event.sink';
import { type WorkspaceEventEnvelope } from 'src/engine/core-modules/event-logs/types/workspace-event-envelope.type';

const makeWorkspaceEvent = (event: string): WorkspaceEventEnvelope => ({
  table: 'workspaceEvent',
  row: { type: 'track', event, properties: {}, timestamp: 't', version: '1' },
});

const applicationLog: WorkspaceEventEnvelope = {
  table: 'applicationLog',
  row: {
    timestamp: 't',
    workspaceId: 'w',
    applicationId: '',
    logicFunctionId: '',
    logicFunctionName: 'fn',
    executionId: 'e',
    level: 'INFO',
    message: 'm',
  },
};

describe('ClickHouseEventSink', () => {
  let sink: ClickHouseEventSink;
  let insert: jest.Mock;
  let getMainClient: jest.Mock;

  beforeEach(() => {
    insert = jest.fn().mockResolvedValue({ success: true });
    getMainClient = jest.fn().mockReturnValue({});

    sink = new ClickHouseEventSink({
      insert,
      getMainClient,
    } as unknown as ClickHouseService);
  });

  it('groups envelopes by table and inserts each group once', async () => {
    const first = makeWorkspaceEvent('a');
    const second = makeWorkspaceEvent('b');

    await sink.write([first, second, applicationLog]);

    expect(insert).toHaveBeenCalledTimes(2);
    expect(insert).toHaveBeenCalledWith('workspaceEvent', [
      first.row,
      second.row,
    ]);
    expect(insert).toHaveBeenCalledWith('applicationLog', [applicationLog.row]);
  });

  it('no-ops when ClickHouse is not configured', async () => {
    getMainClient.mockReturnValue(undefined);

    await sink.write([makeWorkspaceEvent('a')]);

    expect(insert).not.toHaveBeenCalled();
  });

  it('no-ops on an empty batch', async () => {
    await sink.write([]);

    expect(insert).not.toHaveBeenCalled();
  });

  it('throws when a ClickHouse insert fails so the consumer retries', async () => {
    insert.mockResolvedValue({ success: false, error: new Error('boom') });

    await expect(sink.write([makeWorkspaceEvent('a')])).rejects.toThrow();
  });

  it('surfaces the underlying ClickHouse error in the message and cause', async () => {
    const error = new Error('socket hang up');

    insert.mockResolvedValue({ success: false, error });

    await expect(sink.write([makeWorkspaceEvent('a')])).rejects.toMatchObject({
      message:
        'Failed to insert 1 workspaceEvent row(s) into ClickHouse: socket hang up',
      cause: error,
    });
  });
});
