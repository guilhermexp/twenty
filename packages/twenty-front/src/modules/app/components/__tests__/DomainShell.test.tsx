import { render, screen } from '@testing-library/react';
import { Provider as JotaiProvider } from 'jotai';

import { DomainShell } from '@/app/components/DomainShell';
import { clientConfigApiStatusState } from '@/client-config/states/clientConfigApiStatusState';
import {
  jotaiStore,
  resetJotaiStore,
} from '@/ui/utilities/state/jotai/jotaiStore';

jest.mock('@/apollo/components/ApolloProvider', () => ({
  ApolloProvider: ({ children }: React.PropsWithChildren) => <>{children}</>,
}));

jest.mock('@/ui/theme/components/BaseThemeProvider', () => ({
  BaseThemeProvider: ({ children }: React.PropsWithChildren) => <>{children}</>,
}));

jest.mock('@/client-config/components/ClientConfigProviderEffect', () => ({
  ClientConfigProviderEffect: () => null,
}));

jest.mock('@/auth/effect-components/PendingServerSignOutEffect', () => ({
  PendingServerSignOutEffect: () => null,
}));

jest.mock('@/client-config/components/ClientConfigProvider', () => ({
  ClientConfigProvider: ({ children }: React.PropsWithChildren) => (
    <>{children}</>
  ),
}));

jest.mock('@/app/components/WorkspaceApp', () => ({
  WorkspaceApp: () => <div>WORKSPACE_APP</div>,
}));

jest.mock('~/loading/components/UserOrMetadataLoader', () => ({
  UserOrMetadataLoader: () => <div>LOADER</div>,
}));

jest.mock('@/onboarding/components/OnboardingPageLoader', () => ({
  OnboardingPageLoader: () => <div>ONBOARDING_LOADER</div>,
}));

const renderShell = () =>
  render(
    <JotaiProvider store={jotaiStore}>
      <DomainShell />
    </JotaiProvider>,
  );

const setClientConfigLoaded = (isLoadedOnce: boolean) => {
  jotaiStore.set(clientConfigApiStatusState.atom, {
    isLoadedOnce,
    isLoading: false,
    isErrored: false,
    isSaved: isLoadedOnce,
  });
};

describe('DomainShell', () => {
  beforeEach(() => {
    resetJotaiStore();
    window.history.pushState({}, '', '/');
  });

  it('shows the loader until the client config has loaded', () => {
    setClientConfigLoaded(false);

    renderShell();

    expect(screen.getByText('LOADER')).toBeInTheDocument();
  });

  it('shows the onboarding loader on onboarding paths until the client config has loaded', () => {
    setClientConfigLoaded(false);
    window.history.pushState({}, '', '/welcome');

    renderShell();

    expect(screen.getByText('ONBOARDING_LOADER')).toBeInTheDocument();
  });

  it('mounts the workspace app once the client config has loaded', () => {
    setClientConfigLoaded(true);

    renderShell();

    expect(screen.getByText('WORKSPACE_APP')).toBeInTheDocument();
  });
});
