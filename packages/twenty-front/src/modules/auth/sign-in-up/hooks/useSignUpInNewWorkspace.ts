import { useAuth } from '@/auth/hooks/useAuth';
import { useSnackBar } from '@/ui/feedback/snack-bar-manager/hooks/useSnackBar';
import { CombinedGraphQLErrors } from '@apollo/client/errors';
import { useMutation } from '@apollo/client/react';
import {
  SignUpInNewWorkspaceDocument,
  UploadNewWorkspaceLogoDocument,
} from '~/generated-metadata/graphql';
import { assertIsDefinedOrThrow, isDefined } from 'twenty-shared/utils';
import { useLingui } from '@lingui/react/macro';

export const useSignUpInNewWorkspace = () => {
  const { getAuthTokensFromLoginToken } = useAuth();
  const { enqueueErrorSnackBar } = useSnackBar();
  const { t } = useLingui();

  const [signUpInNewWorkspaceMutation] = useMutation(
    SignUpInNewWorkspaceDocument,
  );
  const [uploadNewWorkspaceLogoMutation] = useMutation(
    UploadNewWorkspaceLogoDocument,
  );

  const createWorkspace = async ({
    displayName,
    logo,
  }: {
    displayName?: string;
    logo?: File;
  } = {}): Promise<boolean> => {
    try {
      const { data } = await signUpInNewWorkspaceMutation({
        variables: { input: { displayName } },
      });
      assertIsDefinedOrThrow(data?.signUpInNewWorkspace);

      const workspaceId = data.signUpInNewWorkspace.workspace.id;

      if (isDefined(logo)) {
        try {
          await uploadNewWorkspaceLogoMutation({
            variables: { workspaceId, file: logo },
          });
        } catch (logoUploadError) {
          enqueueErrorSnackBar(
            CombinedGraphQLErrors.is(logoUploadError)
              ? { apolloError: logoUploadError }
              : {
                  message:
                    logoUploadError instanceof Error
                      ? logoUploadError.message
                      : t`Workspace logo upload failed`,
                },
          );
        }
      }

      await getAuthTokensFromLoginToken(
        data.signUpInNewWorkspace.loginToken.token,
      );

      return true;
    } catch (error) {
      enqueueErrorSnackBar(
        CombinedGraphQLErrors.is(error)
          ? { apolloError: error }
          : {
              message:
                error instanceof Error
                  ? error.message
                  : t`Workspace creation failed`,
            },
      );

      return false;
    }
  };

  return {
    createWorkspace,
  };
};
