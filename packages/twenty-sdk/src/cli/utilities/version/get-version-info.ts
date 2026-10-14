import { getServerVersionFromApi } from '@/cli/utilities/version/get-server-version-from-api';
import { type VersionInfo } from '@/cli/utilities/version/version-info';
import sdkPackageJson from '../../../../package.json';

export const getVersionInfo = async (): Promise<VersionInfo> => ({
  cliVersion: sdkPackageJson.version,
  localServerVersion: await getServerVersionFromApi(),
});
