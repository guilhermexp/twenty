import { styled } from '@linaria/react';
import { Trans } from '@lingui/react/macro';
import { FormProvider } from 'react-hook-form';
import { ClickToActionLink } from 'twenty-ui/navigation';

import { StyledOnboardingContentContainer } from '@/auth/components/StyledOnboardingContentContainer';
import { SignInUpWithCredentials } from '@/auth/sign-in-up/components/internal/SignInUpWithCredentials';
import { SignInUpWithGoogle } from '@/auth/sign-in-up/components/internal/SignInUpWithGoogle';
import { SignInUpWithMicrosoft } from '@/auth/sign-in-up/components/internal/SignInUpWithMicrosoft';
import { useHandleResetPassword } from '@/auth/sign-in-up/hooks/useHandleResetPassword';
import { useSignInUpForm } from '@/auth/sign-in-up/hooks/useSignInUpForm';
import {
  SignInUpStep,
  signInUpStepState,
} from '@/auth/states/signInUpStepState';
import { authProvidersState } from '@/client-config/states/authProvidersState';
import { useAtomStateValue } from '@/ui/utilities/state/jotai/hooks/useAtomStateValue';
import { HorizontalSeparator } from 'twenty-ui/layout';
import { themeCssVariables } from 'twenty-ui/theme-constants';

const StyledForgotPasswordLinkContainer = styled.div`
  display: flex;
  justify-content: center;
  padding-top: ${themeCssVariables.spacing[4]};
`;

export const SignInUpGlobalScopeForm = () => {
  const authProviders = useAtomStateValue(authProvidersState);
  const signInUpStep = useAtomStateValue(signInUpStepState);

  const { form } = useSignInUpForm();
  const { handleResetPassword } = useHandleResetPassword();

  return (
    <StyledOnboardingContentContainer>
      {authProviders.google && <SignInUpWithGoogle isGlobalScope />}
      {authProviders.microsoft && <SignInUpWithMicrosoft isGlobalScope />}
      {(authProviders.google || authProviders.microsoft) && (
        <HorizontalSeparator
          color={themeCssVariables.background.transparent.light}
        />
      )}
      {/* oxlint-disable-next-line react/jsx-props-no-spreading */}
      <FormProvider {...form}>
        <SignInUpWithCredentials isGlobalScope />
      </FormProvider>
      {signInUpStep === SignInUpStep.Password && (
        <StyledForgotPasswordLinkContainer>
          <ClickToActionLink
            onClick={handleResetPassword(form.getValues('email'))}
          >
            <Trans>Forgot your password?</Trans>
          </ClickToActionLink>
        </StyledForgotPasswordLinkContainer>
      )}
    </StyledOnboardingContentContainer>
  );
};
