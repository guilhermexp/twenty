import { useAuth } from '@/auth/hooks/useAuth';
import { useIsLogged } from '@/auth/hooks/useIsLogged';
import {
  SignInUpStep,
  signInUpStepState,
} from '@/auth/states/signInUpStepState';
import { useAtomStateValue } from '@/ui/utilities/state/jotai/hooks/useAtomStateValue';
import { useEffect } from 'react';

export const SignInUpGlobalScopeFormEffect = () => {
  const signInUpStep = useAtomStateValue(signInUpStepState);
  const { navigateToWorkspaceCreation } = useAuth();
  const isLogged = useIsLogged();

  useEffect(() => {
    if (signInUpStep !== SignInUpStep.Init) return;
    if (!isLogged) return;

    void navigateToWorkspaceCreation();
  }, [signInUpStep, isLogged, navigateToWorkspaceCreation]);

  return <></>;
};
