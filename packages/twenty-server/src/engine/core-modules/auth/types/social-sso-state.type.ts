import { type APP_LOCALES } from 'twenty-shared/translations';

export type SocialSsoState = {
  workspaceInviteHash?: string;
  workspaceId?: string;
  locale?: keyof typeof APP_LOCALES;
  returnToPath?: string;
};
