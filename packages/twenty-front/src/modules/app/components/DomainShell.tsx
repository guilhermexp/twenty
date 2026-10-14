import { BrowserRouter } from 'react-router-dom';

import { SharedAppProviders } from '@/app/components/SharedAppProviders';
import { WorkspaceApp } from '@/app/components/WorkspaceApp';
import { isOnOnboardingTransitionPath } from '@/auth/utils/isOnOnboardingTransitionPath';
import { clientConfigApiStatusState } from '@/client-config/states/clientConfigApiStatusState';
import { OnboardingPageLoader } from '@/onboarding/components/OnboardingPageLoader';
import { useAtomStateValue } from '@/ui/utilities/state/jotai/hooks/useAtomStateValue';
import { UserOrMetadataLoader } from '~/loading/components/UserOrMetadataLoader';

export const DomainShell = () => {
  const { isLoadedOnce } = useAtomStateValue(clientConfigApiStatusState);

  if (!isLoadedOnce) {
    return (
      <BrowserRouter>
        <SharedAppProviders>
          {isOnOnboardingTransitionPath(window.location.pathname) ? (
            <OnboardingPageLoader />
          ) : (
            <UserOrMetadataLoader />
          )}
        </SharedAppProviders>
      </BrowserRouter>
    );
  }

  return <WorkspaceApp />;
};
