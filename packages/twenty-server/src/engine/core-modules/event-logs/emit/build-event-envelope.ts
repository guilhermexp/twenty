import {
  type TrackEventName,
  type TrackEventProperties,
} from 'src/engine/core-modules/event-logs/emit/events.type';
import {
  type EventContextFields,
  type WorkspaceEventEnvelope,
} from 'src/engine/core-modules/event-logs/types/workspace-event-envelope.type';
import { makeTrackEvent } from 'src/engine/core-modules/event-logs/emit/analytics.utils';

export const computeEventContextFields = (
  context?: EventContextFields,
): EventContextFields => ({
  ...(context?.workspaceId ? { workspaceId: context.workspaceId } : {}),
  ...(context?.userId ? { userId: context.userId } : {}),
});

export const buildWorkspaceEventEnvelope = <T extends TrackEventName>(
  contextFields: EventContextFields,
  event: T,
  properties: TrackEventProperties<T>,
): WorkspaceEventEnvelope => ({
  table: 'workspaceEvent',
  row: { ...contextFields, ...makeTrackEvent(event, properties) },
});

export const buildObjectEventEnvelope = <T extends TrackEventName>(
  contextFields: EventContextFields,
  event: T,
  properties: TrackEventProperties<T> & {
    recordId: string;
    objectMetadataId: string;
    isCustom?: boolean;
  },
): WorkspaceEventEnvelope => {
  const { recordId, objectMetadataId, isCustom, ...restProperties } =
    properties;

  return {
    table: 'objectEvent',
    row: {
      ...contextFields,
      ...makeTrackEvent(
        event,
        restProperties as unknown as TrackEventProperties<T>,
      ),
      recordId,
      objectMetadataId,
      isCustom,
    },
  };
};
