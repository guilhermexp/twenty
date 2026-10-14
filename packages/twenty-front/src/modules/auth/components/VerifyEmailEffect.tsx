import { verifyEmailRedirectPathState } from '@/app/states/verifyEmailRedirectPathState';
import { useAuth } from '@/auth/hooks/useAuth';
import { useVerifyLogin } from '@/auth/hooks/useVerifyLogin';
import { workspacePublicDataState } from '@/auth/states/workspacePublicDataState';
import { clientConfigApiStatusState } from '@/client-config/states/clientConfigApiStatusState';
import { useGetPublicWorkspaceDataByDomain } from '@/domain-manager/hooks/useGetPublicWorkspaceDataByDomain';
import { useSnackBar } from '@/ui/feedback/snack-bar-manager/hooks/useSnackBar';
import { useAtomStateValue } from '@/ui/utilities/state/jotai/hooks/useAtomStateValue';
import { useSetAtomState } from '@/ui/utilities/state/jotai/hooks/useSetAtomState';
import { CombinedGraphQLErrors } from '@apollo/client/errors';
import { useLingui } from '@lingui/react/macro';
import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { AppPath } from 'twenty-shared/types';
import { isDefined } from 'twenty-shared/utils';
import { useNavigateApp } from '~/hooks/useNavigateApp';
import { isGraphqlErrorOfType } from '~/utils/is-graphql-error-of-type.util';

type VerifyEmailEffectProps = {
  onError: () => void;
};

export const VerifyEmailEffect = ({ onError }: VerifyEmailEffectProps) => {
  const {
    verifyEmailAndGetLoginToken,
    verifyEmailAndGetWorkspaceAgnosticToken,
  } = useAuth();

  const { enqueueErrorSnackBar, enqueueSuccessSnackBar } = useSnackBar();

  const [searchParams] = useSearchParams();

  const setVerifyEmailRedirectPath = useSetAtomState(
    verifyEmailRedirectPathState,
  );

  const email = searchParams.get('email');
  const emailVerificationToken = searchParams.get('emailVerificationToken');
  const verifyEmailRedirectPath = searchParams.get('nextPath');

  const navigate = useNavigateApp();
  const { verifyLoginToken } = useVerifyLogin();
  const clientConfigApiStatus = useAtomStateValue(clientConfigApiStatusState);
  const workspacePublicData = useAtomStateValue(workspacePublicDataState);
  const { error: workspacePublicDataError } =
    useGetPublicWorkspaceDataByDomain();
  const isWorkspaceResolved =
    isDefined(workspacePublicData) || isDefined(workspacePublicDataError);

  const { t } = useLingui();
  useEffect(() => {
    const verifyEmailToken = async () => {
      if (!email || !emailVerificationToken) {
        enqueueErrorSnackBar({
          message: t`Invalid email verification link.`,
          options: {
            dedupeKey: 'email-verification-link-dedupe-key',
          },
        });
        return navigate(AppPath.SignInUp);
      }

      const successSnackbarParams = {
        message: t`Email verified.`,
        options: {
          dedupeKey: 'email-verification-dedupe-key',
        },
      };

      try {
        // The first account is verified before the only workspace exists.
        if (!isDefined(workspacePublicData)) {
          await verifyEmailAndGetWorkspaceAgnosticToken(
            emailVerificationToken,
            email,
          );

          enqueueSuccessSnackBar(successSnackbarParams);

          return navigate(AppPath.SignInUp);
        }

        const { loginToken } = await verifyEmailAndGetLoginToken(
          emailVerificationToken,
          email,
        );

        enqueueSuccessSnackBar(successSnackbarParams);

        if (isDefined(verifyEmailRedirectPath)) {
          setVerifyEmailRedirectPath(verifyEmailRedirectPath);
        }

        await verifyLoginToken(loginToken.token);
      } catch (error) {
        enqueueErrorSnackBar({
          ...(CombinedGraphQLErrors.is(error)
            ? { apolloError: error }
            : { message: t`Email verification failed` }),
          options: {
            dedupeKey: 'email-verification-error-dedupe-key',
          },
        });
        if (isGraphqlErrorOfType(error, 'EMAIL_ALREADY_VERIFIED')) {
          navigate(AppPath.SignInUp);
        }

        onError();
      }
    };

    if (!clientConfigApiStatus.isLoadedOnce || !isWorkspaceResolved) {
      return;
    }

    verifyEmailToken();

    // Verify email only needs to run once, after the workspace lookup settles
    // oxlint-disable-next-line react-hooks/exhaustive-deps
  }, [clientConfigApiStatus.isLoadedOnce, isWorkspaceResolved]);

  return <></>;
};
