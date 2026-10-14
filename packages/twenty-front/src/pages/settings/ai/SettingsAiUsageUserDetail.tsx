import { SettingsInfoContainer } from '@/settings/components/SettingsInfoContainer';
import { SettingsLabelValueItem } from '@/settings/components/SettingsLabelValueItem';
import { SettingsPageContainer } from '@/settings/components/SettingsPageContainer';
import { UsageBreakdownPieSection } from '@/settings/usage/components/UsageBreakdownPieSection';
import { UsageDailyChartSection } from '@/settings/usage/components/UsageDailyChartSection';
import { UsageSectionSkeleton } from '@/settings/usage/components/UsageSectionSkeleton';
import { AI_OPERATION_TYPES } from '@/settings/usage/constants/AiOperationTypes';
import { useUsageAnalyticsData } from '@/settings/usage/hooks/useUsageAnalyticsData';
import { SettingsPageLayout } from '@/settings/components/layout/SettingsPageLayout';
import { t } from '@lingui/core/macro';
import { Trans, useLingui } from '@lingui/react/macro';
import { useParams } from 'react-router-dom';
import { SettingsPath } from 'twenty-shared/types';
import { getSettingsPath } from 'twenty-shared/utils';
import { Section } from 'twenty-ui/layout';
import { UsageUnit } from '~/generated-metadata/graphql';

export const SettingsAiUsageUserDetail = () => {
  const { t: tLingui } = useLingui();
  const { userWorkspaceId } = useParams<{ userWorkspaceId: string }>();

  const { analytics, isInitialLoading } = useUsageAnalyticsData({
    operationTypes: AI_OPERATION_TYPES,
    userWorkspaceId,
    skip: !userWorkspaceId,
  });

  const userName = analytics?.usageByUser?.find(
    (item) => item.key === userWorkspaceId,
  )?.label;

  const displayName = userName ?? userWorkspaceId ?? '';

  const hasAnyData = analytics
    ? (analytics.userDailyUsage?.dailyUsage?.length ?? 0) > 0 ||
      analytics.usageByOperationType.length > 0
    : false;

  const breadcrumbLinks = [
    {
      children: <Trans>Workspace</Trans>,
      href: getSettingsPath(SettingsPath.General),
    },
    {
      children: <Trans>AI</Trans>,
      href: getSettingsPath(SettingsPath.AI),
    },
    { children: isInitialLoading ? '' : displayName },
  ];

  if (isInitialLoading) {
    return (
      <SettingsPageLayout
        title={tLingui`AI User Usage`}
        links={breadcrumbLinks}
      >
        <SettingsPageContainer>
          <UsageSectionSkeleton />
          <UsageSectionSkeleton />
        </SettingsPageContainer>
      </SettingsPageLayout>
    );
  }

  return (
    <SettingsPageLayout title={displayName} links={breadcrumbLinks}>
      <SettingsPageContainer>
        {!hasAnyData && (
          <Section>
            <SettingsInfoContainer>
              <SettingsLabelValueItem
                label={t`No usage data`}
                value={t`No AI consumption recorded for this user.`}
              />
            </SettingsInfoContainer>
          </Section>
        )}

        <UsageDailyChartSection
          title={t`Daily AI Usage`}
          description={t`Tokens consumed per day.`}
          operationTypes={AI_OPERATION_TYPES}
          userWorkspaceId={userWorkspaceId}
          skip={!userWorkspaceId}
          chartId="ai-user-daily"
          chartLabel={t`Tokens`}
          unit={UsageUnit.TOKEN}
        />
        <UsageBreakdownPieSection
          title={t`AI Usage by Type`}
          operationTypes={AI_OPERATION_TYPES}
          userWorkspaceId={userWorkspaceId}
          skip={!userWorkspaceId}
          breakdownField="operationType"
          unit={UsageUnit.TOKEN}
          sectionId="ai-user-type"
        />
        <UsageBreakdownPieSection
          title={t`AI Usage by Model`}
          description={t`Tokens consumed per AI model.`}
          operationTypes={AI_OPERATION_TYPES}
          userWorkspaceId={userWorkspaceId}
          skip={!userWorkspaceId}
          breakdownField="model"
          unit={UsageUnit.TOKEN}
          sectionId="ai-user-model"
        />
      </SettingsPageContainer>
    </SettingsPageLayout>
  );
};
