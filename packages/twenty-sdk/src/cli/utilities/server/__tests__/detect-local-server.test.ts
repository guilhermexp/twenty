import { afterEach, describe, expect, it, vi } from 'vitest';

import { detectLocalServer } from '@/cli/utilities/server/detect-local-server';

describe('detectLocalServer', () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('detects the default fork server on port 3000', async () => {
    vi.stubGlobal(
      'fetch',
      vi.fn(async (input: string) => {
        if (input !== 'http://localhost:3000/healthz') {
          throw new Error('unexpected port');
        }

        return { json: async () => ({ status: 'ok' }) };
      }),
    );

    await expect(detectLocalServer()).resolves.toBe('http://localhost:3000');
  });

  it('uses an explicitly requested test port', async () => {
    vi.stubGlobal(
      'fetch',
      vi.fn(async (input: string) => {
        if (input !== 'http://localhost:2021/healthz') {
          throw new Error('unexpected port');
        }

        return { json: async () => ({ status: 'ok' }) };
      }),
    );

    await expect(detectLocalServer(2021)).resolves.toBe(
      'http://localhost:2021',
    );
  });
});
