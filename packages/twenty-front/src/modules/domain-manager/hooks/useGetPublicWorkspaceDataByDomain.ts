import { workspacePublicDataState } from '@/auth/states/workspacePublicDataState';
import { clientConfigApiStatusState } from '@/client-config/states/clientConfigApiStatusState';
import { useOrigin } from '@/domain-manager/hooks/useOrigin';
import { useAtomStateValue } from '@/ui/utilities/state/jotai/hooks/useAtomStateValue';
import { useSetAtomState } from '@/ui/utilities/state/jotai/hooks/useSetAtomState';
import { workspaceAuthBypassProvidersState } from '@/workspace/states/workspaceAuthBypassProvidersState';
import { workspaceAuthProvidersState } from '@/workspace/states/workspaceAuthProvidersState';
import { useEffect } from 'react';
import { isDefined } from 'twenty-shared/utils';
import { CombinedGraphQLErrors } from '@apollo/client/errors';
import { useQuery } from '@apollo/client/react';
import { GetPublicWorkspaceDataByDomainDocument } from '~/generated-metadata/graphql';

export const useGetPublicWorkspaceDataByDomain = () => {
  const { origin } = useOrigin();
  const setWorkspaceAuthProviders = useSetAtomState(
    workspaceAuthProvidersState,
  );
  const setWorkspaceAuthBypassProviders = useSetAtomState(
    workspaceAuthBypassProvidersState,
  );
  const workspacePublicData = useAtomStateValue(workspacePublicDataState);
  const setWorkspacePublicData = useSetAtomState(workspacePublicDataState);
  const clientConfigApiStatus = useAtomStateValue(clientConfigApiStatusState);

  const { loading, data, error } = useQuery(
    GetPublicWorkspaceDataByDomainDocument,
    {
      variables: {
        origin,
      },
      skip: !clientConfigApiStatus.isSaved || isDefined(workspacePublicData),
    },
  );

  // TODO: Refactor these useEffects to avoid unnecessary re-renders (see PR #18584 review)
  useEffect(() => {
    if (data) {
      setWorkspaceAuthProviders(
        data.getPublicWorkspaceDataByDomain.authProviders,
      );
      setWorkspaceAuthBypassProviders(
        data.getPublicWorkspaceDataByDomain.authBypassProviders ?? null,
      );
      setWorkspacePublicData(data.getPublicWorkspaceDataByDomain);
    }
  }, [
    data,
    setWorkspaceAuthProviders,
    setWorkspaceAuthBypassProviders,
    setWorkspacePublicData,
  ]);

  useEffect(() => {
    if (!isDefined(error)) {
      return;
    }

    // A fresh instance has no workspace yet: sign-in then falls back to the
    // global scope, which bootstraps the instance's only workspace.
    const isWorkspaceNotFoundError =
      CombinedGraphQLErrors.is(error) &&
      error.errors.some(
        (graphQLError) => graphQLError.extensions?.code === 'NOT_FOUND',
      );

    if (!isWorkspaceNotFoundError) {
      // oxlint-disable-next-line no-console
      console.error(error);
    }
  }, [error]);

  return {
    loading,
    data: data?.getPublicWorkspaceDataByDomain,
    error,
  };
};
