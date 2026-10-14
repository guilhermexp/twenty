import { styled } from '@linaria/react';
import { Trans } from '@lingui/react/macro';

import { useWorkspaceBypass } from '@/auth/sign-in-up/hooks/useWorkspaceBypass';
import { themeCssVariables } from 'twenty-ui/theme-constants';

const StyledBypassButton = styled.button`
  background: none;
  border: none;
  color: ${themeCssVariables.font.color.tertiary};
  cursor: pointer;
  font-family: inherit;
  font-size: ${themeCssVariables.font.size.sm};
  padding: 0;

  &:hover {
    text-decoration: underline;
  }
`;

export const FooterNote = () => {
  const { shouldOfferBypass, shouldUseBypass, enableBypass } =
    useWorkspaceBypass();

  if (!shouldOfferBypass || shouldUseBypass) {
    return null;
  }

  return (
    <StyledBypassButton type="button" onClick={enableBypass}>
      <Trans>Bypass SSO</Trans>
    </StyledBypassButton>
  );
};
