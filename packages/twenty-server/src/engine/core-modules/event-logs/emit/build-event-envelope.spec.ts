import { computeEventContextFields } from 'src/engine/core-modules/event-logs/emit/build-event-envelope';

describe('build-event-envelope', () => {
  describe('computeEventContextFields', () => {
    it('keeps defined ids and drops null/undefined', () => {
      expect(
        computeEventContextFields({ workspaceId: 'w', userId: 'u' }),
      ).toEqual({ workspaceId: 'w', userId: 'u' });
      expect(
        computeEventContextFields({ workspaceId: 'w', userId: null }),
      ).toEqual({ workspaceId: 'w' });
      expect(computeEventContextFields()).toEqual({});
    });
  });
});
