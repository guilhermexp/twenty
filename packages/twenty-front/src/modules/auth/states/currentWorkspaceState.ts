import { createAtomState } from '@/ui/utilities/state/jotai/utils/createAtomState';
import {
  type Application,
  type Role,
  type Workspace,
} from '~/generated-metadata/graphql';

export type CurrentWorkspace = Pick<
  Workspace,
  | 'id'
  | 'inviteHash'
  | 'logo'
  | 'displayName'
  | 'featureFlags'
  | 'activationStatus'
  | 'workspaceMembersCount'
  | 'isPublicInviteLinkEnabled'
  | 'workspaceDiscoverability'
  | 'isGoogleAuthEnabled'
  | 'isGoogleAuthBypassEnabled'
  | 'isMicrosoftAuthEnabled'
  | 'isMicrosoftAuthBypassEnabled'
  | 'isPasswordAuthEnabled'
  | 'isPasswordAuthBypassEnabled'
  | 'subdomain'
  | 'workspaceUrls'
  | 'isTwoFactorAuthenticationEnforced'
  | 'trashRetentionDays'
  | 'eventLogRetentionDays'
  | 'fastModel'
  | 'smartModel'
  | 'aiAdditionalInstructions'
  | 'editableProfileFields'
  | 'enabledAiModelIds'
  | 'useRecommendedModels'
  | 'isInternalMessagesImportEnabled'
> & {
  defaultRole?: Omit<Role, 'workspaceMembers' | 'agents' | 'apiKeys'> | null;
  workspaceCustomApplication: Pick<Application, 'id'> | null;
  installedApplications: Pick<
    Application,
    'id' | 'name' | 'universalIdentifier' | 'logoUrl'
  >[];
};

export const currentWorkspaceState = createAtomState<CurrentWorkspace | null>({
  key: 'currentWorkspaceState',
  defaultValue: null,
  useLocalStorage: true,
  localStorageOptions: { getOnInit: true },
});
