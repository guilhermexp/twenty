import { isClickHouseConfiguredState } from '@/client-config/states/isClickHouseConfiguredState';
import { SettingsInfoContainer } from '@/settings/components/SettingsInfoContainer';
import { SettingsLabelValueItem } from '@/settings/components/SettingsLabelValueItem';
import { UsageByOperationTypeTableSection } from '@/settings/usage/components/UsageByOperationTypeTableSection';
import { UsageSectionSkeleton } from '@/settings/usage/components/UsageSectionSkeleton';
import { useUsageAnalyticsData } from '@/settings/usage/hooks/useUsageAnalyticsData';
import { useAtomStateValue } from '@/ui/utilities/state/jotai/hooks/useAtomStateValue';
import { t } from '@lingui/core/macro';
import { Link } from 'react-router-dom';
import { SettingsPath } from 'twenty-shared/types';
import { getSettingsPath } from 'twenty-shared/utils';
import { IconSparkles } from 'twenty-ui/icon';
import { H2Title } from 'twenty-ui/typography';
import { Button } from 'twenty-ui/input';
import { Section } from 'twenty-ui/layout';
import { SETTINGS_AI_TABS } from '~/pages/settings/ai/constants/SettingsAiTabs';

export const SettingsUsageAnalyticsSection = () => {
  const isClickHouseConfigured = useAtomStateValue(isClickHouseConfiguredState);

  const { analytics, isInitialLoading } = useUsageAnalyticsData({
    skip: !isClickHouseConfigured,
  });

  if (!isClickHouseConfigured) {
    return (
      <Section>
        <H2Title
          title={t`Usage Analytics`}
          description={t`Usage breakdown for your workspace.`}
        />
        <SettingsInfoContainer>
          <SettingsLabelValueItem
            label={t`ClickHouse Not Configured`}
            value={t`Usage analytics requires ClickHouse. Contact your administrator.`}
          />
        </SettingsInfoContainer>
      </Section>
    );
  }

  if (isInitialLoading) {
    return <UsageSectionSkeleton />;
  }

  const hasData =
    analytics &&
    (analytics.timeSeries.length > 0 ||
      analytics.usageByOperationType.length > 0 ||
      analytics.usageByUser.length > 0);

  if (!hasData) {
    return (
      <Section>
        <H2Title
          title={t`Usage Analytics`}
          description={t`Usage breakdown for your workspace.`}
        />
        <SettingsInfoContainer>
          <SettingsLabelValueItem
            label={t`No usage data yet`}
            value={t`Usage analytics will appear here once your workspace starts recording usage.`}
          />
        </SettingsInfoContainer>
      </Section>
    );
  }

  return (
    <>
      <UsageByOperationTypeTableSection
        title={t`Usage by Type`}
        description={t`Consumption per operation type, in its own unit.`}
        sectionId="usage-type"
      />
      <Section>
        <Link
          to={`${getSettingsPath(SettingsPath.AI)}#${SETTINGS_AI_TABS.TABS_IDS.USAGE}`}
          style={{ textDecoration: 'none' }}
        >
          <Button
            Icon={IconSparkles}
            title={t`View AI usage breakdown`}
            variant="secondary"
          />
        </Link>
      </Section>
    </>
  );
};
