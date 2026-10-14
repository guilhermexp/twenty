import { useSignUpInNewWorkspace } from '@/auth/sign-in-up/hooks/useSignUpInNewWorkspace';
import { OnboardingStepAnimatedItem } from '@/onboarding/components/OnboardingStepAnimatedItem';
import { ONBOARDING_CONTENT_BLOCK_WIDTH } from '@/onboarding/constants/OnboardingContentBlockWidth';
import { isCreatingWorkspaceState } from '@/auth/states/isCreatingWorkspaceState';
import { TextInput } from '@/ui/input/components/TextInput';
import { useAtomStateValue } from '@/ui/utilities/state/jotai/hooks/useAtomStateValue';
import { useSetAtomState } from '@/ui/utilities/state/jotai/hooks/useSetAtomState';
import { styled } from '@linaria/react';
import { useLingui } from '@lingui/react/macro';
import { isNonEmptyString } from '@sniptt/guards';
import { useEffect, useRef, useState } from 'react';
import { useApolloClient } from '@apollo/client/react';
import { Key } from 'ts-key-enum';
import { isDefined } from 'twenty-shared/utils';
import { Avatar } from 'twenty-ui/data-display';
import { IconTrash, IconUpload } from 'twenty-ui/icon';
import { Button, LightIconButton, MainButton } from 'twenty-ui/input';
import { themeCssVariables } from 'twenty-ui/theme-constants';
import { GetWorkspaceCreationDefaultsDocument } from '~/generated-metadata/graphql';

const StyledContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${themeCssVariables.spacing[14]};
  max-width: 100%;
  width: ${ONBOARDING_CONTENT_BLOCK_WIDTH}px;
`;

const StyledHeading = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${themeCssVariables.spacing[4]};
`;

const StyledTitle = styled.div`
  color: ${themeCssVariables.font.color.primary};
  font-size: ${themeCssVariables.font.size.xl};
  font-weight: ${themeCssVariables.font.weight.semiBold};
  line-height: 1.2;
`;

const StyledSubtitle = styled.div`
  color: ${themeCssVariables.font.color.secondary};
  font-size: ${themeCssVariables.font.size.md};
  line-height: 1.4;
`;

const StyledFormSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${themeCssVariables.spacing[8]};
  padding-bottom: ${themeCssVariables.spacing[4]};
  width: 100%;
`;

const StyledLogoRow = styled.div`
  align-items: center;
  display: flex;
  gap: ${themeCssVariables.spacing[2]};
`;

const StyledLogoAvatar = styled(Avatar)`
  height: ${themeCssVariables.spacing[8]};
  width: ${themeCssVariables.spacing[8]};
`;

const StyledLogoButtons = styled.div`
  align-items: center;
  display: flex;
  gap: ${themeCssVariables.spacing['0.5']};
`;

const StyledHiddenFileInput = styled.input`
  display: none;
`;

export const SignInUpWorkspaceCreationForm = () => {
  const { t } = useLingui();
  const { createWorkspace } = useSignUpInNewWorkspace();
  const apolloClient = useApolloClient();

  const [workspaceName, setWorkspaceName] = useState(
    () =>
      apolloClient.readQuery({ query: GetWorkspaceCreationDefaultsDocument })
        ?.getWorkspaceCreationDefaults.displayName ?? '',
  );

  const isCreatingWorkspace = useAtomStateValue(isCreatingWorkspaceState);
  const setIsCreatingWorkspace = useSetAtomState(isCreatingWorkspaceState);
  const [logo, setLogo] = useState<File | undefined>(undefined);
  const [logoPreviewUrl, setLogoPreviewUrl] = useState<string | undefined>(
    undefined,
  );
  const hiddenFileInputRef = useRef<HTMLInputElement>(null);

  const isContinueDisabled = workspaceName.trim() === '' || isCreatingWorkspace;

  const openFilePicker = () => {
    hiddenFileInputRef.current?.click();
  };

  const handleLogoUpload = (file: File) => {
    if (!isDefined(file)) {
      return;
    }
    setLogo(file);
    setLogoPreviewUrl(URL.createObjectURL(file));
  };

  const handleLogoRemove = () => {
    setLogo(undefined);
    setLogoPreviewUrl(undefined);
  };

  useEffect(() => {
    if (!isDefined(logoPreviewUrl)) {
      return;
    }

    return () => {
      URL.revokeObjectURL(logoPreviewUrl);
    };
  }, [logoPreviewUrl]);

  const handleSubmit = async () => {
    if (isContinueDisabled) {
      return;
    }

    setIsCreatingWorkspace(true);

    const isWorkspaceCreated = await createWorkspace({
      displayName: workspaceName.trim(),
      logo,
    });

    if (!isWorkspaceCreated) {
      setIsCreatingWorkspace(false);
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.nativeEvent.isComposing || event.keyCode === 229) {
      return;
    }
    if (event.key === Key.Enter) {
      event.preventDefault();
      handleSubmit();
    }
  };

  return (
    <StyledContentContainer>
      <StyledHeading>
        <OnboardingStepAnimatedItem index={0}>
          <StyledTitle>{t`Create your workspace`}</StyledTitle>
        </OnboardingStepAnimatedItem>
        <OnboardingStepAnimatedItem index={1}>
          <StyledSubtitle>
            {t`Move work forward across teams and agents`}
          </StyledSubtitle>
        </OnboardingStepAnimatedItem>
      </StyledHeading>
      <StyledFormSection>
        <OnboardingStepAnimatedItem index={2}>
          <StyledLogoRow>
            <StyledLogoAvatar
              avatarUrl={logoPreviewUrl}
              placeholder={
                isNonEmptyString(workspaceName) ? workspaceName : '?'
              }
              placeholderColorSeed={workspaceName}
              type="squared"
              size="xl"
              onClick={openFilePicker}
            />
            <StyledHiddenFileInput
              type="file"
              ref={hiddenFileInputRef}
              accept="image/jpeg, image/png, image/gif"
              onChange={(event) => {
                const file = event.target.files?.[0];
                if (isDefined(file)) {
                  handleLogoUpload(file);
                }
                event.target.value = '';
              }}
            />
            <StyledLogoButtons>
              <Button
                Icon={IconUpload}
                title={t`Upload logo`}
                variant="secondary"
                onClick={openFilePicker}
              />
              <LightIconButton
                Icon={IconTrash}
                accent="tertiary"
                size="medium"
                onClick={handleLogoRemove}
                disabled={!isDefined(logoPreviewUrl)}
                aria-label={t`Remove logo`}
              />
            </StyledLogoButtons>
          </StyledLogoRow>
        </OnboardingStepAnimatedItem>
        <OnboardingStepAnimatedItem index={3}>
          <TextInput
            autoFocus
            label={t`Name`}
            value={workspaceName}
            placeholder={t`Workspace name`}
            onChange={setWorkspaceName}
            onKeyDown={handleKeyDown}
            fullWidth
          />
        </OnboardingStepAnimatedItem>
      </StyledFormSection>
      <OnboardingStepAnimatedItem index={4}>
        <MainButton
          title={t`Create workspace`}
          onClick={handleSubmit}
          disabled={isContinueDisabled}
          fullWidth
        />
      </OnboardingStepAnimatedItem>
    </StyledContentContainer>
  );
};
