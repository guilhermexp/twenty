import { useInk } from '@/cli/utilities/dev/ui/dev-ui-ink-context';
import { type VersionInfo } from '@/cli/utilities/version/version-info';
import React from 'react';

export const DevUiVersionRow = ({
  versionInfo,
}: {
  versionInfo: VersionInfo | null;
}): React.ReactElement | null => {
  const { Box, Text } = useInk();

  if (versionInfo === null) {
    return null;
  }

  const { cliVersion, localServerVersion } = versionInfo;

  return (
    <Box>
      <Text dimColor>Versions: </Text>
      <Text dimColor>CLI </Text>
      <Text>v{cliVersion}</Text>
      {localServerVersion !== null && (
        <>
          <Text dimColor> • Fork server </Text>
          <Text>v{localServerVersion}</Text>
        </>
      )}
    </Box>
  );
};
