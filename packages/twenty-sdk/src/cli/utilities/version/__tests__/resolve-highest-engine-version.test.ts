import { beforeEach, describe, expect, it, vi } from 'vitest';

import { getEngineVersionRange } from '@/cli/utilities/version/get-engine-version-range';
import { resolveHighestEngineVersion } from '@/cli/utilities/version/resolve-highest-engine-version';

vi.mock('@/cli/utilities/version/get-engine-version-range');

const mockedGetRange = vi.mocked(getEngineVersionRange);

describe('resolveHighestEngineVersion', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    mockedGetRange.mockReturnValue(null);
  });

  it('returns the explicit version verbatim without resolving', async () => {
    expect(await resolveHighestEngineVersion('2.3.1')).toBe('2.3.1');
    expect(mockedGetRange).not.toHaveBeenCalled();
  });

  it('trims the explicit version', async () => {
    expect(await resolveHighestEngineVersion('  2.3.1  ')).toBe('2.3.1');
  });

  it('returns the local server marker when the app has no range', async () => {
    expect(await resolveHighestEngineVersion()).toBe('local');
  });

  it('returns the declared range for a local fork server', async () => {
    mockedGetRange.mockReturnValue('^2.2.0');

    expect(await resolveHighestEngineVersion()).toBe('^2.2.0');
  });

  it('returns the local server marker for an invalid range', async () => {
    mockedGetRange.mockReturnValue('not-a-range');

    expect(await resolveHighestEngineVersion()).toBe('local');
  });
});
