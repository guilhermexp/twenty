import { useStore } from 'jotai';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { isErrorLike } from '@apollo/client/errors';
import { AppPath } from 'twenty-shared/types';

import { useAuth } from '@/auth/hooks/useAuth';
import { useIsLogged } from '@/auth/hooks/useIsLogged';
import { hasAttemptedPrivateModeAutoLoginState } from '@/auth/states/hasAttemptedPrivateModeAutoLoginState';
import { useSnackBar } from '@/ui/feedback/snack-bar-manager/hooks/useSnackBar';
import {
  REACT_APP_DEV_AUTO_LOGIN,
  REACT_APP_DEV_AUTO_LOGIN_EMAIL,
  REACT_APP_DEV_AUTO_LOGIN_PASSWORD,
  REACT_APP_PRIVATE_MODE,
} from '~/config';

type PrivateModeAutoLoginEffectProps = {
  onError: () => void;
};

export const PrivateModeAutoLoginEffect = ({
  onError,
}: PrivateModeAutoLoginEffectProps) => {
  const isLogged = useIsLogged();
  const { signInWithCredentialsInWorkspace } = useAuth();
  const { enqueueErrorSnackBar } = useSnackBar();
  const navigate = useNavigate();
  const store = useStore();

  useEffect(() => {
    if (
      !REACT_APP_PRIVATE_MODE ||
      !REACT_APP_DEV_AUTO_LOGIN ||
      isLogged ||
      store.get(hasAttemptedPrivateModeAutoLoginState.atom)
    ) {
      return;
    }

    const email = REACT_APP_DEV_AUTO_LOGIN_EMAIL.trim().toLowerCase();
    const password = REACT_APP_DEV_AUTO_LOGIN_PASSWORD;

    if (!email || !password) {
      onError();
      return;
    }

    store.set(hasAttemptedPrivateModeAutoLoginState.atom, true);

    void signInWithCredentialsInWorkspace(email, password)
      .then(() => {
        navigate(AppPath.Index, { replace: true });
      })
      .catch((error: unknown) => {
        enqueueErrorSnackBar({
          ...(isErrorLike(error)
            ? { apolloError: error }
            : { message: 'Dev auto-login failed' }),
        });
        onError();
      })
      // The flag only guards the in-flight request (StrictMode re-runs the
      // effect); a later mount, e.g. after sign-out, must be able to retry.
      .finally(() => {
        store.set(hasAttemptedPrivateModeAutoLoginState.atom, false);
      });
  }, [
    enqueueErrorSnackBar,
    isLogged,
    navigate,
    onError,
    signInWithCredentialsInWorkspace,
    store,
  ]);

  return null;
};
