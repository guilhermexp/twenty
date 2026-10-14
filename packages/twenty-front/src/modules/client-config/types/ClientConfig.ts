import {
  type ApiConfig,
  type AuthProviders,
  type Captcha,
  type ClientAiModelConfig,
  type ClientConfigMaintenanceMode,
  type PublicFeatureFlag,
  type Sentry,
} from '~/generated-metadata/graphql';

export type ClientConfig = {
  appVersion?: string;
  aiModels: Array<ClientAiModelConfig>;
  analyticsEnabled: boolean;
  api: ApiConfig;
  authProviders: AuthProviders;
  calendarBookingPageId?: string;
  isBookCallOnboardingStepEnabled: boolean;
  isCompanyEnrichmentEnabled: boolean;
  canManageFeatureFlags: boolean;
  captcha: Captcha;
  publicFunctionDomain?: string | null;
  isAttachmentPreviewEnabled: boolean;
  isConfigVariablesInDbEnabled: boolean;
  isEmailVerificationRequired: boolean;
  isGoogleCalendarEnabled: boolean;
  isGoogleMessagingEnabled: boolean;
  isMicrosoftCalendarEnabled: boolean;
  isMicrosoftMessagingEnabled: boolean;
  isImapSmtpCaldavEnabled: boolean;
  isEmailingDomainInDemoMode: boolean;
  isClickHouseConfigured: boolean;
  isWorkspaceSchemaDDLLocked: boolean;
  isOnboardingAiChatEnabled: boolean;
  publicFeatureFlags: Array<PublicFeatureFlag>;
  sentry: Sentry;
  signInPrefilled: boolean;
  isTwoFactorAuthenticationEnabled: boolean;
  allowRequestsToTwentyIcons: boolean;
  maintenance?: ClientConfigMaintenanceMode;
};
