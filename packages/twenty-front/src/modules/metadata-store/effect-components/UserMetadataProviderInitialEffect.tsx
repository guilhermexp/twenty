import { useIsLogged } from '@/auth/hooks/useIsLogged';
import { toOpenRecordInPreference } from '@/workspace-member/utils/toOpenRecordInPreference';
import { currentUserState } from '@/auth/states/currentUserState';
import { currentUserWorkspaceState } from '@/auth/states/currentUserWorkspaceState';
import { currentWorkspaceDeletedMembersState } from '@/auth/states/currentWorkspaceDeletedMembersState';
import { currentWorkspaceMemberState } from '@/auth/states/currentWorkspaceMemberState';
import { currentWorkspaceMembersState } from '@/auth/states/currentWorkspaceMembersState';
import { currentWorkspaceState } from '@/auth/states/currentWorkspaceState';
import { isCurrentUserLoadedState } from '@/auth/states/isCurrentUserLoadedState';
import { useInitializeFormatPreferences } from '@/localization/hooks/useInitializeFormatPreferences';
import { getDateFnsLocale } from '@/ui/field/display/utils/getDateFnsLocale';
import { useSetAtomState } from '@/ui/utilities/state/jotai/hooks/useSetAtomState';
import {
  type ColorScheme,
  type UiScale,
} from '@/workspace-member/types/WorkspaceMember';
import { enUS } from 'date-fns/locale';
import { useStore } from 'jotai';
import { useCallback, useEffect, useState } from 'react';
import { APP_LOCALES, SOURCE_LOCALE } from 'twenty-shared/translations';
import { REACT_APP_PRIVATE_MODE } from '~/config';
import { type ObjectPermissions } from 'twenty-shared/types';
import { isDefined } from 'twenty-shared/utils';
import { useQuery } from '@apollo/client/react';
import {
  type WorkspaceMember,
  GetCurrentUserDocument,
} from '~/generated-metadata/graphql';
import { dateLocaleState } from '~/localization/states/dateLocaleState';
import { dynamicActivate } from '~/utils/i18n/dynamicActivate';

export const UserMetadataProviderInitialEffect = () => {
  const isLogged = useIsLogged();
  const store = useStore();
  const [isInitialized, setIsInitialized] = useState(false);

  const setCurrentUser = useSetAtomState(currentUserState);
  const setCurrentWorkspace = useSetAtomState(currentWorkspaceState);
  const setCurrentUserWorkspace = useSetAtomState(currentUserWorkspaceState);
  const setCurrentWorkspaceMember = useSetAtomState(
    currentWorkspaceMemberState,
  );
  const setCurrentWorkspaceMembers = useSetAtomState(
    currentWorkspaceMembersState,
  );
  const setCurrentWorkspaceDeletedMembers = useSetAtomState(
    currentWorkspaceDeletedMembersState,
  );
  const setIsCurrentUserLoaded = useSetAtomState(isCurrentUserLoadedState);

  const { initializeFormatPreferences } = useInitializeFormatPreferences();

  const updateLocaleCatalog = useCallback(
    async (newLocale: keyof typeof APP_LOCALES) => {
      const localeValue = store.get(dateLocaleState.atom);
      if (localeValue.locale !== newLocale) {
        getDateFnsLocale(newLocale).then((localeCatalog) => {
          const newValue = {
            locale: newLocale,
            localeCatalog: localeCatalog || enUS,
          };
          store.set(dateLocaleState.atom, newValue);
        });
      }
    },
    [store],
  );

  const shouldSkipUserQuery = !isLogged;

  const { data: userQueryData, loading: userQueryLoading } = useQuery(
    GetCurrentUserDocument,
    {
      skip: shouldSkipUserQuery,
      fetchPolicy: 'network-only',
    },
  );

  useEffect(() => {
    if (isInitialized) {
      return;
    }

    if (!isLogged) {
      setIsCurrentUserLoaded(true);
      setIsInitialized(true);
      return;
    }

    if (userQueryLoading || !isDefined(userQueryData?.currentUser)) {
      return;
    }

    setCurrentUser(userQueryData.currentUser);

    if (isDefined(userQueryData.currentUser.currentWorkspace)) {
      setCurrentWorkspace({
        ...userQueryData.currentUser.currentWorkspace,
        defaultRole:
          userQueryData.currentUser.currentWorkspace.defaultRole ?? null,
        workspaceCustomApplication:
          userQueryData.currentUser.currentWorkspace
            .workspaceCustomApplication ?? null,
      });
    }

    if (isDefined(userQueryData.currentUser.currentUserWorkspace)) {
      setCurrentUserWorkspace({
        permissionFlags:
          userQueryData.currentUser.currentUserWorkspace.permissionFlags ?? [],
        twoFactorAuthenticationMethodSummary:
          userQueryData.currentUser.currentUserWorkspace
            .twoFactorAuthenticationMethodSummary ?? [],
        objectsPermissions:
          (userQueryData.currentUser.currentUserWorkspace
            .objectsPermissions as Array<
            ObjectPermissions & { objectMetadataId: string }
          >) ?? [],
      });
    }

    const { workspaceMember, workspaceMembers, deletedWorkspaceMembers } =
      userQueryData.currentUser;

    const affectDefaultValuesOnEmptyWorkspaceMemberFields = (
      workspaceMember: WorkspaceMember,
    ) => {
      return {
        ...workspaceMember,
        colorScheme: (workspaceMember.colorScheme as ColorScheme) ?? 'System',
        uiScale: (workspaceMember.uiScale as UiScale) ?? 'Default',
        openRecordIn: toOpenRecordInPreference(workspaceMember.openRecordIn),
        locale: REACT_APP_PRIVATE_MODE
          ? APP_LOCALES['pt-BR']
          : ((workspaceMember.locale as keyof typeof APP_LOCALES) ??
            SOURCE_LOCALE),
      };
    };

    if (isDefined(workspaceMember)) {
      const updatedWorkspaceMember =
        affectDefaultValuesOnEmptyWorkspaceMemberFields(workspaceMember);
      setCurrentWorkspaceMember(updatedWorkspaceMember);

      updateLocaleCatalog(updatedWorkspaceMember.locale);

      initializeFormatPreferences(updatedWorkspaceMember);

      dynamicActivate(updatedWorkspaceMember.locale);
    }

    if (isDefined(workspaceMembers)) {
      setCurrentWorkspaceMembers(workspaceMembers);
    }

    if (isDefined(deletedWorkspaceMembers)) {
      setCurrentWorkspaceDeletedMembers(deletedWorkspaceMembers);
    }

    setIsCurrentUserLoaded(true);
    setIsInitialized(true);
  }, [
    isInitialized,
    isLogged,
    userQueryLoading,
    userQueryData?.currentUser,
    setCurrentUser,
    setCurrentUserWorkspace,
    setCurrentWorkspaceMembers,
    setCurrentWorkspace,
    setCurrentWorkspaceMember,
    initializeFormatPreferences,
    setCurrentWorkspaceDeletedMembers,
    updateLocaleCatalog,
    setIsCurrentUserLoaded,
  ]);

  return null;
};
