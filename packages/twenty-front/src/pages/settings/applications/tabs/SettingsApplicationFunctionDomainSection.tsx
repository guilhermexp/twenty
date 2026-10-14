import { useLingui } from '@lingui/react/macro';

import { useGetLogicFunctionHttpUrl } from '@/settings/logic-functions/hooks/useGetLogicFunctionHttpUrl';
import { SettingsTextInput } from '@/ui/input/components/SettingsTextInput';
import { IconCopy } from 'twenty-ui/icon';
import { Section } from 'twenty-ui/layout';
import { H2Title } from 'twenty-ui/typography';
import { useCopyToClipboard } from '~/hooks/useCopyToClipboard';

export const SettingsApplicationFunctionDomainSection = () => {
  const { t } = useLingui();
  const { copyToClipboard } = useCopyToClipboard();
  const { functionsBaseUrl } = useGetLogicFunctionHttpUrl();

  return (
    <Section>
      <H2Title
        title={t`App URL`}
        description={t`This app's routes are served from this URL.`}
      />
      <SettingsTextInput
        instanceId="application-public-function-domain"
        value={functionsBaseUrl}
        onChange={() => {}}
        readOnly
        fullWidth
        RightIcon={IconCopy}
        onRightIconClick={() =>
          copyToClipboard(functionsBaseUrl, t`URL copied to clipboard`)
        }
      />
    </Section>
  );
};
