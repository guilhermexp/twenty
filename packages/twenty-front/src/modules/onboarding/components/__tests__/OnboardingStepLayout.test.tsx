import { MockedProvider } from '@apollo/client/testing/react';
import { i18n } from '@lingui/core';
import { I18nProvider } from '@lingui/react';
import { render, screen } from '@testing-library/react';
import { Provider as JotaiProvider } from 'jotai';
import { type ReactNode } from 'react';
import { SOURCE_LOCALE } from 'twenty-shared/translations';

import {
  type CurrentUser,
  currentUserState,
} from '@/auth/states/currentUserState';
import { OnboardingStepLayout } from '@/onboarding/components/OnboardingStepLayout';
import { SnackBarComponentInstanceContext } from '@/ui/feedback/snack-bar-manager/contexts/SnackBarComponentInstanceContext';
import {
  jotaiStore,
  resetJotaiStore,
} from '@/ui/utilities/state/jotai/jotaiStore';
import { OnboardingStatus } from '~/generated-metadata/graphql';
import { messages } from '~/locales/generated/en';


jest.mock('@/onboarding/components/OnboardingTransitionOutlet', () => ({
  OnboardingTransitionOutlet: () => null,
}));

i18n.load({ [SOURCE_LOCALE]: messages });
i18n.activate(SOURCE_LOCALE);

const Wrapper = ({ children }: { children: ReactNode }) => (
  <MockedProvider mocks={[]}>
    <JotaiProvider store={jotaiStore}>
      <SnackBarComponentInstanceContext.Provider
        value={{ instanceId: 'snack-bar-manager' }}
      >
        <I18nProvider i18n={i18n}>{children}</I18nProvider>
      </SnackBarComponentInstanceContext.Provider>
    </JotaiProvider>
  </MockedProvider>
);

const currentUser: CurrentUser = {
  id: 'user-id',
  email: 'user@test.com',
  canAccessFullAdminPanel: false,
  onboardingStatus: OnboardingStatus.INVITE_TEAM,
  previousOnboardingStatus: null,
  isWorkspaceCreator: true,
  userVars: {},
  firstName: 'Test',
  lastName: 'User',
  hasPassword: true,
};

describe('OnboardingStepLayout', () => {
  beforeEach(() => {
    localStorage.clear();
    resetJotaiStore();
  });

  it('should display the back button when a previous onboarding step exists', () => {
    jotaiStore.set(currentUserState.atom, {
      ...currentUser,
      previousOnboardingStatus: OnboardingStatus.PROFILE_CREATION,
    });

    render(<OnboardingStepLayout />, { wrapper: Wrapper });

    expect(screen.getByRole('button', { name: 'Go back' })).toBeInTheDocument();
  });

  it('should hide the back button when there is no previous onboarding step', () => {
    jotaiStore.set(currentUserState.atom, {
      ...currentUser,
      previousOnboardingStatus: null,
    });

    render(<OnboardingStepLayout />, { wrapper: Wrapper });

    expect(
      screen.queryByRole('button', { name: 'Go back' }),
    ).not.toBeInTheDocument();
  });
});
