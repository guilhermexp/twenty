/* @license Enterprise */

import {
  Injectable,
  Logger,
  type OnModuleDestroy,
  type OnModuleInit,
} from '@nestjs/common';

import { isDefined } from 'twenty-shared/utils';

import { EventLogEmitterService } from 'src/engine/core-modules/event-logs/emit/event-log-emitter.service';
import { TwentyConfigService } from 'src/engine/core-modules/twenty-config/twenty-config.service';
import { USAGE_RECORDED } from 'src/engine/core-modules/usage/constants/usage-recorded.constant';
import { type UsageEvent } from 'src/engine/core-modules/usage/types/usage-event.type';
import { buildUsageEventEnvelopes } from 'src/engine/core-modules/usage/utils/build-usage-event-envelopes';
import { UsageRollupBuffer } from 'src/engine/core-modules/usage/utils/usage-rollup-buffer';
import { WorkspaceEventEmitter } from 'src/engine/workspace-event-emitter/workspace-event-emitter';

const MAX_BUFFERED_ROLLUPS = 10_000;

@Injectable()
export class UsageRecorderService implements OnModuleInit, OnModuleDestroy {
  private readonly logger = new Logger(UsageRecorderService.name);
  private readonly buffer = new UsageRollupBuffer(MAX_BUFFERED_ROLLUPS);
  private flushTimer: NodeJS.Timeout | null = null;
  private pendingFlush: Promise<void> = Promise.resolve();

  constructor(
    private readonly workspaceEventEmitter: WorkspaceEventEmitter,
    private readonly eventLogEmitterService: EventLogEmitterService,
    private readonly twentyConfigService: TwentyConfigService,
  ) {}

  onModuleInit() {
    this.flushTimer = setInterval(
      () => void this.flush(),
      this.twentyConfigService.get('USAGE_ROLLUP_FLUSH_INTERVAL_MS'),
    );

    this.flushTimer.unref();
  }

  async onModuleDestroy() {
    await this.flushAndStop();
  }

  async flushAndStop(): Promise<void> {
    if (isDefined(this.flushTimer)) {
      clearInterval(this.flushTimer);
      this.flushTimer = null;
    }

    await this.flush();
  }

  async record(workspaceId: string, usageEvents: UsageEvent[]): Promise<void> {
    if (!this.eventLogEmitterService.isEnabled() || usageEvents.length === 0) {
      return;
    }

    this.workspaceEventEmitter.emitCustomBatchEvent<UsageEvent>(
      USAGE_RECORDED,
      usageEvents,
      workspaceId,
    );
  }

  accumulate(workspaceId: string, usageEvent: UsageEvent): void {
    if (!this.eventLogEmitterService.isEnabled()) {
      return;
    }

    this.buffer.increment(workspaceId, usageEvent);

    if (this.buffer.isFull) {
      void this.flush();
    }
  }

  private flush(): Promise<void> {
    this.pendingFlush = this.pendingFlush
      .then(() => this.drainAndDispatch())
      .catch((error) =>
        this.logger.error('Failed to flush usage rollups', error),
      );

    return this.pendingFlush;
  }

  private async drainAndDispatch(): Promise<void> {
    const entries = [...this.buffer.drain().entries()];

    if (entries.length === 0) {
      return;
    }

    const results = await Promise.allSettled(
      entries.map(([workspaceId, usageEvents]) =>
        this.dispatchRollups(workspaceId, usageEvents),
      ),
    );

    const failedEntries = entries.filter(
      (_, index) => results[index].status === 'rejected',
    );

    if (failedEntries.length === 0) {
      return;
    }

    failedEntries.forEach(([workspaceId, usageEvents]) =>
      usageEvents.forEach((usageEvent) =>
        this.buffer.increment(workspaceId, usageEvent),
      ),
    );

    this.logger.warn(
      `Failed to flush usage rollups for ${failedEntries.length}/${entries.length} workspace(s); re-buffered for next flush`,
    );
  }

  private async dispatchRollups(
    workspaceId: string,
    usageEvents: UsageEvent[],
  ): Promise<void> {
    return this.eventLogEmitterService.dispatch(
      buildUsageEventEnvelopes(workspaceId, usageEvents),
    );
  }
}
