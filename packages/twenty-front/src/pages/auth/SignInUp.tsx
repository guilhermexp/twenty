import { useAuth } from '@/auth/hooks/useAuth';
import { useSignInUp } from '@/auth/sign-in-up/hooks/useSignInUp';
import { useSignInUpForm } from '@/auth/sign-in-up/hooks/useSignInUpForm';
import { isCreatingWorkspaceState } from '@/auth/states/isCreatingWorkspaceState';
import {
  SignInUpStep,
  signInUpStepState,
} from '@/auth/states/signInUpStepState';
import { workspacePublicDataState } from '@/auth/states/workspacePublicDataState';
import { styled } from '@linaria/react';

import { useAtomStateValue } from '@/ui/utilities/state/jotai/hooks/useAtomStateValue';
import { useSetAtomState } from '@/ui/utilities/state/jotai/hooks/useSetAtomState';
import { PrivateModeAutoLoginEffect } from '@/auth/components/PrivateModeAutoLoginEffect';
import { EmailVerificationSent } from '@/auth/sign-in-up/components/EmailVerificationSent';
import { SignInUpGlobalScopeForm } from '@/auth/sign-in-up/components/SignInUpGlobalScopeForm';
import { SignInUpStandardContent } from '@/auth/sign-in-up/components/SignInUpStandardContent';
import { SignInUpWorkspaceScopeForm } from '@/auth/sign-in-up/components/SignInUpWorkspaceScopeForm';
import { SignInUpSsoIdentityProviderSelection } from '@/auth/sign-in-up/components/internal/SignInUpSsoIdentityProviderSelection';
import { OnboardingLayout } from '@/onboarding/components/OnboardingLayout';
import { StyledOnboardingStepPage } from '@/onboarding/components/StyledOnboardingStepPage';
import { SignInUpWorkspaceCreationForm } from '@/auth/sign-in-up/components/internal/SignInUpWorkspaceCreationForm';
import { SignInUpWorkspaceScopeFormEffect } from '@/auth/sign-in-up/components/internal/SignInUpWorkspaceScopeFormEffect';
import { useGetPublicWorkspaceDataByDomain } from '@/domain-manager/hooks/useGetPublicWorkspaceDataByDomain';
import { useMemo, useState } from 'react';
import { REACT_APP_DEV_AUTO_LOGIN, REACT_APP_PRIVATE_MODE } from '~/config';

import { SignInUpGlobalScopeFormEffect } from '@/auth/sign-in-up/components/internal/SignInUpGlobalScopeFormEffect';
import { SignInUpSsoExchangeTokenEffect } from '@/auth/sign-in-up/components/internal/SignInUpSsoExchangeTokenEffect';
import { SignInUpTwoFactorAuthenticationProvision } from '@/auth/sign-in-up/components/internal/SignInUpTwoFactorAuthenticationProvision';
import { SignInUpTOTPVerification } from '@/auth/sign-in-up/components/internal/SignInUpTwoFactorAuthenticationVerification';
import { useWorkspaceFromInviteHash } from '@/auth/sign-in-up/hooks/useWorkspaceFromInviteHash';
import { clientConfigApiStatusState } from '@/client-config/states/clientConfigApiStatusState';
import { ModalContent } from 'twenty-ui/surfaces';
import { useLingui } from '@lingui/react/macro';
import { useSearchParams } from 'react-router-dom';
import { isDefined } from 'twenty-shared/utils';
import { Loader } from 'twenty-ui/feedback';
import { themeCssVariables } from 'twenty-ui/theme-constants';

const StyledLoaderContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  margin-bottom: ${themeCssVariables.spacing[8]};
  margin-top: ${themeCssVariables.spacing[8]};
  width: 100%;
`;

const StyledBackground = styled.div`
  background: ${themeCssVariables.background.secondary};
  display: flex;
  flex-direction: column;
  height: calc(100dvh / var(--t-zoom, 1));
  overflow-y: auto;
  width: 100%;
`;

export const SignInUp = () => {
  const { t } = useLingui();
  const setSignInUpStep = useSetAtomState(signInUpStepState);
  const clientConfigApiStatus = useAtomStateValue(clientConfigApiStatusState);
  const isCreatingWorkspace = useAtomStateValue(isCreatingWorkspaceState);
  const [hasPrivateModeAutoLoginFailed, setHasPrivateModeAutoLoginFailed] =
    useState(false);

  const shouldAutoLoginInPrivateMode =
    REACT_APP_PRIVATE_MODE &&
    REACT_APP_DEV_AUTO_LOGIN &&
    !hasPrivateModeAutoLoginFailed;
  const { form } = useSignInUpForm();
  const { signInUpStep } = useSignInUp(form);
  const workspacePublicData = useAtomStateValue(workspacePublicDataState);
  const { loading: getPublicWorkspaceDataLoading } =
    useGetPublicWorkspaceDataByDomain();
  const { workspaceInviteHash, workspace: workspaceFromInviteHash } =
    useWorkspaceFromInviteHash();
  const { signOut } = useAuth();

  const [searchParams] = useSearchParams();

  const onClickOnLogo = () => {
    setSignInUpStep(SignInUpStep.Init);
  };

  // No workspace resolves until the instance's only workspace is created.
  const isGlobalScope = !isDefined(workspacePublicData);

  const title = useMemo(() => {
    if (isDefined(workspaceInviteHash)) {
      const workspaceName = workspaceFromInviteHash?.displayName ?? '';
      return t`Join ${workspaceName} team`;
    }

    if (signInUpStep === SignInUpStep.WorkspaceCreation) {
      return t`Create your workspace`;
    }

    if (signInUpStep === SignInUpStep.TwoFactorAuthenticationProvision) {
      return t`Setup your 2FA`;
    }

    if (signInUpStep === SignInUpStep.TwoFactorAuthenticationVerification) {
      return t`Verify code from the app`;
    }

    if (isGlobalScope) {
      return t`Welcome to Twenty`;
    }

    const workspaceName = workspacePublicData?.displayName;

    if (!workspaceName) {
      return t`Welcome to your workspace`;
    }

    return t`Welcome, ${workspaceName}.`;
  }, [
    workspaceInviteHash,
    signInUpStep,
    workspacePublicData?.displayName,
    isGlobalScope,
    t,
    workspaceFromInviteHash?.displayName,
  ]);

  const signInUpForm = useMemo(() => {
    if (getPublicWorkspaceDataLoading || !clientConfigApiStatus.isLoadedOnce) {
      return (
        <StyledLoaderContainer>
          <Loader color="gray" />
        </StyledLoaderContainer>
      );
    }

    if (signInUpStep === SignInUpStep.WorkspaceCreation) {
      return <SignInUpWorkspaceCreationForm />;
    }

    if (signInUpStep === SignInUpStep.SsoIdentityProviderSelection) {
      return <SignInUpSsoIdentityProviderSelection />;
    }

    if (signInUpStep === SignInUpStep.TwoFactorAuthenticationProvision) {
      return <SignInUpTwoFactorAuthenticationProvision />;
    }

    if (signInUpStep === SignInUpStep.TwoFactorAuthenticationVerification) {
      return <SignInUpTOTPVerification />;
    }

    if (!isGlobalScope) {
      return (
        <>
          <SignInUpWorkspaceScopeFormEffect />
          <SignInUpWorkspaceScopeForm />
        </>
      );
    }

    return (
      <>
        <SignInUpSsoExchangeTokenEffect />
        <SignInUpGlobalScopeFormEffect />
        <SignInUpGlobalScopeForm />
      </>
    );
  }, [
    clientConfigApiStatus.isLoadedOnce,
    isGlobalScope,
    getPublicWorkspaceDataLoading,
    signInUpStep,
  ]);

  return signInUpStep === SignInUpStep.WorkspaceCreation ? (
    <OnboardingLayout onBack={!isCreatingWorkspace ? signOut : undefined}>
      <StyledOnboardingStepPage>{signInUpForm}</StyledOnboardingStepPage>
    </OnboardingLayout>
  ) : (
    <StyledBackground>
      {signInUpStep === SignInUpStep.EmailVerification ? (
        <ModalContent isVerticallyCentered isHorizontallyCentered>
          <EmailVerificationSent email={searchParams.get('email')} />
        </ModalContent>
      ) : (
        <SignInUpStandardContent
          workspacePublicData={workspacePublicData}
          signInUpForm={
            shouldAutoLoginInPrivateMode ? (
              <>
                <PrivateModeAutoLoginEffect
                  onError={() => setHasPrivateModeAutoLoginFailed(true)}
                />
                <StyledLoaderContainer>
                  <Loader color="gray" />
                </StyledLoaderContainer>
              </>
            ) : (
              signInUpForm
            )
          }
          signInUpStep={signInUpStep}
          title={title}
          onClickOnLogo={onClickOnLogo}
        />
      )}
    </StyledBackground>
  );
};
