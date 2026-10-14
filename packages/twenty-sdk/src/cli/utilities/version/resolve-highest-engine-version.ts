import semver from 'semver';

import { getEngineVersionRange } from '@/cli/utilities/version/get-engine-version-range';

export const resolveHighestEngineVersion = async (
  explicitVersion?: string,
): Promise<string> => {
  const explicit = explicitVersion?.trim();

  if (explicit) {
    return explicit;
  }

  const range = getEngineVersionRange();

  return range !== null && semver.validRange(range) !== null ? range : 'local';
};
