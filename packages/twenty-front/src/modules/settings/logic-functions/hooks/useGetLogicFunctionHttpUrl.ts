import { useCallback } from 'react';

import { currentWorkspaceState } from '@/auth/states/currentWorkspaceState';
import { publicFunctionDomainState } from '@/client-config/states/publicFunctionDomainState';
import {
  getFunctionsBaseUrl,
  getLogicFunctionHttpUrl,
} from '@/settings/logic-functions/utils/getLogicFunctionHttpUrl';
import { useAtomStateValue } from '@/ui/utilities/state/jotai/hooks/useAtomStateValue';
import { REACT_APP_SERVER_BASE_URL } from '~/config';

export const useGetLogicFunctionHttpUrl = () => {
  const publicFunctionDomain = useAtomStateValue(publicFunctionDomainState);
  const currentWorkspace = useAtomStateValue(currentWorkspaceState);

  const workspaceSubdomain = currentWorkspace?.subdomain;

  const getHttpUrl = useCallback(
    (path: string) =>
      getLogicFunctionHttpUrl({
        path,
        serverBaseUrl: REACT_APP_SERVER_BASE_URL,
        publicFunctionDomain,
        workspaceSubdomain,
      }),
    [publicFunctionDomain, workspaceSubdomain],
  );

  const functionsBaseUrl = getFunctionsBaseUrl({
    serverBaseUrl: REACT_APP_SERVER_BASE_URL,
    publicFunctionDomain,
    workspaceSubdomain,
  });

  return {
    getLogicFunctionHttpUrl: getHttpUrl,
    functionsBaseUrl,
  };
};
