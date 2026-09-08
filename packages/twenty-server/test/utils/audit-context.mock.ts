import { type TrackEventName } from 'src/engine/core-modules/event-logs/emit/events.type';

export const AuditContextMock = (params?: {
  insertWorkspaceEvent?:
    | ((
        event: TrackEventName,
        properties: Record<string, unknown>,
      ) => Promise<{ success: boolean }>)
    | jest.Mock;
  createObjectEvent?:
    | ((
        event: TrackEventName,
        properties: Record<string, unknown>,
      ) => Promise<{ success: boolean }>)
    | jest.Mock;
}) => {
  return {
    insertWorkspaceEvent:
      params?.insertWorkspaceEvent ??
      jest.fn().mockResolvedValue({ success: true }),
    createObjectEvent:
      params?.createObjectEvent ??
      jest.fn().mockResolvedValue({ success: true }),
  };
};
