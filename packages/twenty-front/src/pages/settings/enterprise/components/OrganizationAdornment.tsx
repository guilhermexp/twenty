import { t } from '@lingui/core/macro';
import { css } from '@linaria/core';
import { isNonEmptyString } from '@sniptt/guards';
import { useId } from 'react';
import { IconLock } from 'twenty-ui/icon';
import { AppTooltip, TooltipDelay } from 'twenty-ui/surfaces';
import { themeCssVariables } from 'twenty-ui/theme-constants';


const pillClassName = css`
  align-items: center;
  background: ${themeCssVariables.background.secondary};
  border: 1px solid ${themeCssVariables.border.color.light};
  border-radius: ${themeCssVariables.border.radius.pill};
  color: ${themeCssVariables.font.color.tertiary};
  corner-shape: round;
  display: inline-flex;
  font-weight: ${themeCssVariables.font.weight.medium};
  gap: ${themeCssVariables.spacing[1]};
  padding: ${themeCssVariables.spacing[1]} ${themeCssVariables.spacing[2]};
`;


const OrganizationAdornmentContent = () => (
  <>
    <IconLock size={12} />
    {t`Organization`}
  </>
);

type OrganizationAdornmentProps = {
  tooltipContent?: string;
};

export const OrganizationAdornment = ({
  tooltipContent,
}: OrganizationAdornmentProps) => {
  // useId returns a colon-wrapped value that is not a valid CSS selector
  const anchorId = `organization-adornment-${useId().replace(/:/g, '')}`;

  const adornment = (
    <span id={anchorId} className={pillClassName}>
      <OrganizationAdornmentContent />
    </span>
  );

  if (!isNonEmptyString(tooltipContent)) {
    return adornment;
  }

  return (
    <>
      {adornment}
      <AppTooltip
        anchorSelect={`#${anchorId}`}
        content={tooltipContent}
        delay={TooltipDelay.shortDelay}
        place="top"
        width="260px"
        clickable
      />
    </>
  );
};
