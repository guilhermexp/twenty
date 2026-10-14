import { aiModelsState } from '@/client-config/states/aiModelsState';
import { apiConfigState } from '@/client-config/states/apiConfigState';
import { appVersionState } from '@/client-config/states/appVersionState';
import { authProvidersState } from '@/client-config/states/authProvidersState';
import { canManageFeatureFlagsState } from '@/client-config/states/canManageFeatureFlagsState';
import { captchaState } from '@/client-config/states/captchaState';
import { isAnalyticsEnabledState } from '@/client-config/states/isAnalyticsEnabledState';
import { isAttachmentPreviewEnabledState } from '@/client-config/states/isAttachmentPreviewEnabledState';
import { isConfigVariablesInDbEnabledState } from '@/client-config/states/isConfigVariablesInDbEnabledState';
import { isDeveloperDefaultSignInPrefilledState } from '@/client-config/states/isDeveloperDefaultSignInPrefilledState';
import { isClickHouseConfiguredState } from '@/client-config/states/isClickHouseConfiguredState';
import { isDDLLockedState } from '@/client-config/states/isDDLLockedState';
import { isEmailingDomainInDemoModeState } from '@/client-config/states/isEmailingDomainInDemoModeState';
import { isEmailVerificationRequiredState } from '@/client-config/states/isEmailVerificationRequiredState';
import { isGoogleCalendarEnabledState } from '@/client-config/states/isGoogleCalendarEnabledState';
import { isGoogleMessagingEnabledState } from '@/client-config/states/isGoogleMessagingEnabledState';
import { isImapSmtpCaldavEnabledState } from '@/client-config/states/isImapSmtpCaldavEnabledState';
import { maintenanceModeState } from '@/client-config/states/maintenanceModeState';
import { isMicrosoftCalendarEnabledState } from '@/client-config/states/isMicrosoftCalendarEnabledState';
import { isMicrosoftMessagingEnabledState } from '@/client-config/states/isMicrosoftMessagingEnabledState';
import { isOnboardingAiChatEnabledState } from '@/client-config/states/isOnboardingAiChatEnabledState';
import { labPublicFeatureFlagsState } from '@/client-config/states/labPublicFeatureFlagsState';
import { sentryConfigState } from '@/client-config/states/sentryConfigState';
import { type ClientConfig } from '@/client-config/types/ClientConfig';
import { publicFunctionDomainState } from '@/client-config/states/publicFunctionDomainState';
import { useCallback } from 'react';
import { clientConfigApiStatusState } from '@/client-config/states/clientConfigApiStatusState';
import { getClientConfig } from '@/client-config/utils/getClientConfig';
import { useSetAtomState } from '@/ui/utilities/state/jotai/hooks/useSetAtomState';
import { useAtomState } from '@/ui/utilities/state/jotai/hooks/useAtomState';

type UseClientConfigResult = {
  data: { clientConfig: ClientConfig } | undefined;
  loading: boolean;
  error: Error | undefined;
  fetchClientConfig: () => Promise<void>;
  refetch: () => Promise<void>;
};

export const useClientConfig = (): UseClientConfigResult => {
  const setIsAnalyticsEnabled = useSetAtomState(isAnalyticsEnabledState);
  const setPublicFunctionDomain = useSetAtomState(publicFunctionDomainState);
  const setAuthProviders = useSetAtomState(authProvidersState);
  const setAiModels = useSetAtomState(aiModelsState);

  const setIsDeveloperDefaultSignInPrefilled = useSetAtomState(
    isDeveloperDefaultSignInPrefilledState,
  );
  const setIsEmailVerificationRequired = useSetAtomState(
    isEmailVerificationRequiredState,
  );
  const setSentryConfig = useSetAtomState(sentryConfigState);
  const [clientConfigApiStatus, setClientConfigApiStatus] = useAtomState(
    clientConfigApiStatusState,
  );

  const setCaptcha = useSetAtomState(captchaState);

  const setApiConfig = useSetAtomState(apiConfigState);

  const setCanManageFeatureFlags = useSetAtomState(canManageFeatureFlagsState);

  const setLabPublicFeatureFlags = useSetAtomState(labPublicFeatureFlagsState);

  const setIsMicrosoftMessagingEnabled = useSetAtomState(
    isMicrosoftMessagingEnabledState,
  );

  const setIsMicrosoftCalendarEnabled = useSetAtomState(
    isMicrosoftCalendarEnabledState,
  );

  const setIsGoogleMessagingEnabled = useSetAtomState(
    isGoogleMessagingEnabledState,
  );

  const setIsGoogleCalendarEnabled = useSetAtomState(
    isGoogleCalendarEnabledState,
  );

  const setIsAttachmentPreviewEnabled = useSetAtomState(
    isAttachmentPreviewEnabledState,
  );

  const setIsConfigVariablesInDbEnabled = useSetAtomState(
    isConfigVariablesInDbEnabledState,
  );

  const setIsEmailingDomainInDemoMode = useSetAtomState(
    isEmailingDomainInDemoModeState,
  );

  const setIsImapSmtpCaldavEnabled = useSetAtomState(
    isImapSmtpCaldavEnabledState,
  );

  const setIsClickHouseConfigured = useSetAtomState(
    isClickHouseConfiguredState,
  );

  const setIsDDLLocked = useSetAtomState(isDDLLockedState);

  const setIsOnboardingAiChatEnabled = useSetAtomState(
    isOnboardingAiChatEnabledState,
  );

  const setMaintenanceMode = useSetAtomState(maintenanceModeState);

  const setAppVersion = useSetAtomState(appVersionState);

  const fetchClientConfig = useCallback(async () => {
    setClientConfigApiStatus((prev) => ({
      ...prev,
      isLoading: true,
    }));

    try {
      const clientConfig = await getClientConfig();
      setClientConfigApiStatus((prev) => ({
        ...prev,
        isLoading: false,
        isLoadedOnce: true,
        isErrored: false,
        error: undefined,
        data: { clientConfig },
      }));
      setClientConfigApiStatus((currentStatus) => ({
        ...currentStatus,
        isErrored: false,
        error: undefined,
      }));
      setAppVersion(clientConfig.appVersion);
      setAuthProviders({
        google: clientConfig.authProviders.google,
        microsoft: clientConfig.authProviders.microsoft,
        password: clientConfig.authProviders.password,
        magicLink: false,
        sso: clientConfig.authProviders.sso,
      });
      setAiModels(clientConfig.aiModels ?? []);
      setIsAnalyticsEnabled(clientConfig.analyticsEnabled);
      setIsDeveloperDefaultSignInPrefilled(clientConfig.signInPrefilled);
      setIsEmailVerificationRequired(clientConfig.isEmailVerificationRequired);
      setSentryConfig({
        dsn: clientConfig?.sentry?.dsn,
        release: clientConfig?.sentry?.release,
        environment: clientConfig?.sentry?.environment,
        tracesSampleRate: clientConfig?.sentry?.tracesSampleRate,
      });

      setCaptcha({
        provider: clientConfig?.captcha?.provider,
        siteKey: clientConfig?.captcha?.siteKey,
      });

      setApiConfig(clientConfig?.api);
      setPublicFunctionDomain(clientConfig?.publicFunctionDomain);
      setCanManageFeatureFlags(clientConfig?.canManageFeatureFlags);
      setLabPublicFeatureFlags(clientConfig?.publicFeatureFlags);
      setIsMicrosoftMessagingEnabled(clientConfig?.isMicrosoftMessagingEnabled);
      setIsMicrosoftCalendarEnabled(clientConfig?.isMicrosoftCalendarEnabled);
      setIsGoogleMessagingEnabled(clientConfig?.isGoogleMessagingEnabled);
      setIsGoogleCalendarEnabled(clientConfig?.isGoogleCalendarEnabled);
      setIsAttachmentPreviewEnabled(clientConfig?.isAttachmentPreviewEnabled);
      setIsConfigVariablesInDbEnabled(
        clientConfig?.isConfigVariablesInDbEnabled,
      );
      setClientConfigApiStatus((currentStatus) => ({
        ...currentStatus,
        isSaved: true,
      }));

      setIsImapSmtpCaldavEnabled(clientConfig?.isImapSmtpCaldavEnabled);
      setIsEmailingDomainInDemoMode(
        clientConfig?.isEmailingDomainInDemoMode ?? false,
      );
      setIsClickHouseConfigured(clientConfig?.isClickHouseConfigured ?? false);
      setIsDDLLocked(clientConfig?.isWorkspaceSchemaDDLLocked ?? false);
      setIsOnboardingAiChatEnabled(
        clientConfig?.isOnboardingAiChatEnabled ?? false,
      );
      setMaintenanceMode(clientConfig?.maintenance ?? null);
    } catch (err) {
      const error =
        err instanceof Error ? err : new Error('Failed to fetch client config');
      setClientConfigApiStatus((prev) => ({
        ...prev,
        isLoading: false,
        isLoadedOnce: true,
        isErrored: true,
        error,
      }));
    }
  }, [
    setAiModels,
    setApiConfig,
    setAppVersion,
    setAuthProviders,
    setCanManageFeatureFlags,
    setCaptcha,
    setClientConfigApiStatus,
    setPublicFunctionDomain,
    setIsGoogleCalendarEnabled,
    setIsGoogleMessagingEnabled,
    setIsAnalyticsEnabled,
    setIsAttachmentPreviewEnabled,
    setIsConfigVariablesInDbEnabled,
    setIsDeveloperDefaultSignInPrefilled,
    setIsEmailVerificationRequired,
    setIsImapSmtpCaldavEnabled,
    setIsEmailingDomainInDemoMode,
    setIsClickHouseConfigured,
    setIsDDLLocked,
    setIsOnboardingAiChatEnabled,
    setLabPublicFeatureFlags,
    setMaintenanceMode,
    setIsMicrosoftCalendarEnabled,
    setIsMicrosoftMessagingEnabled,
    setSentryConfig,
  ]);

  return {
    data: clientConfigApiStatus.data,
    loading: clientConfigApiStatus.isLoading || false,
    error: clientConfigApiStatus.error,
    fetchClientConfig,
    refetch: fetchClientConfig,
  };
};
