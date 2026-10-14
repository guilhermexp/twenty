import { type WorkspaceSetupWorkspaceContext } from 'src/engine/metadata-modules/ai/ai-chat/types/workspace-setup-workspace-context.type';
import { buildWorkspaceContextMessageText } from 'src/engine/metadata-modules/ai/ai-chat/utils/build-workspace-context-message-text.util';
import { getEnglishLanguageNameFromLocale } from 'src/engine/metadata-modules/ai/ai-chat/utils/get-english-language-name-from-locale.util';

export const buildWorkspaceSetupKickoffMessageText = ({
  workspaceContext,
  locale,
}: {
  workspaceContext: WorkspaceSetupWorkspaceContext;
  locale: string;
}): string => {
  const workspaceContextSection =
    buildWorkspaceContextMessageText(workspaceContext);

  const userLanguageName = getEnglishLanguageNameFromLocale(locale);

  return `${workspaceContextSection}

The user locale is ${userLanguageName}, please continue the discussion in that language.`;
};
