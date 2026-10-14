import { MockedProvider } from '@apollo/client/testing/react';
import { i18n } from '@lingui/core';
import { I18nProvider } from '@lingui/react';
import { act, fireEvent, render, screen } from '@testing-library/react';
import { Provider as JotaiProvider } from 'jotai';
import { SOURCE_LOCALE } from 'twenty-shared/translations';
import { ThemeProvider } from 'twenty-ui/theme-constants';

import { SignInUpWorkspaceCreationForm } from '@/auth/sign-in-up/components/internal/SignInUpWorkspaceCreationForm';
import { isCreatingWorkspaceState } from '@/auth/states/isCreatingWorkspaceState';
import {
  jotaiStore,
  resetJotaiStore,
} from '@/ui/utilities/state/jotai/jotaiStore';
import { dynamicActivate } from '~/utils/i18n/dynamicActivate';

const createWorkspaceMock = jest.fn();

jest.mock('@/auth/sign-in-up/hooks/useSignUpInNewWorkspace', () => ({
  useSignUpInNewWorkspace: () => ({ createWorkspace: createWorkspaceMock }),
}));

global.URL.createObjectURL = jest.fn(() => 'blob:logo-preview');
global.URL.revokeObjectURL = jest.fn();

dynamicActivate(SOURCE_LOCALE);

const renderForm = () =>
  render(
    <MockedProvider mocks={[]}>
      <JotaiProvider store={jotaiStore}>
        <ThemeProvider colorScheme="light">
          <I18nProvider i18n={i18n}>
            <SignInUpWorkspaceCreationForm />
          </I18nProvider>
        </ThemeProvider>
      </JotaiProvider>
    </MockedProvider>,
  );

const typeWorkspaceName = (name: string) => {
  fireEvent.change(screen.getByLabelText('Name'), {
    target: { value: name },
  });
};

const clickCreateWorkspace = async () => {
  await act(async () => {
    fireEvent.click(screen.getByRole('button', { name: 'Create workspace' }));
  });
};

describe('SignInUpWorkspaceCreationForm', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    resetJotaiStore();
  });

  it('asks only for the workspace name', () => {
    renderForm();

    expect(screen.getByLabelText('Name')).toBeInTheDocument();
    expect(screen.queryByLabelText('Subdomain')).not.toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: 'Create workspace' }),
    ).toBeDisabled();
  });

  it('creates the workspace with the chosen name', async () => {
    createWorkspaceMock.mockResolvedValue(true);

    renderForm();
    typeWorkspaceName('  Apple  ');

    await clickCreateWorkspace();

    expect(createWorkspaceMock).toHaveBeenCalledWith({
      displayName: 'Apple',
      logo: undefined,
    });
  });

  it('keeps the loader on through a successful creation', async () => {
    let resolveCreateWorkspace: () => void = () => {};
    createWorkspaceMock.mockReturnValue(
      new Promise<boolean>((resolve) => {
        resolveCreateWorkspace = () => resolve(true);
      }),
    );

    renderForm();
    typeWorkspaceName('Apple');

    await clickCreateWorkspace();

    expect(jotaiStore.get(isCreatingWorkspaceState.atom)).toBe(true);
    expect(createWorkspaceMock).toHaveBeenCalledTimes(1);

    await act(async () => {
      resolveCreateWorkspace();
    });

    expect(jotaiStore.get(isCreatingWorkspaceState.atom)).toBe(true);
  });

  it('returns to the form when workspace creation fails', async () => {
    createWorkspaceMock.mockResolvedValue(false);

    renderForm();
    typeWorkspaceName('Apple');

    await clickCreateWorkspace();

    expect(jotaiStore.get(isCreatingWorkspaceState.atom)).toBe(false);
  });
});
