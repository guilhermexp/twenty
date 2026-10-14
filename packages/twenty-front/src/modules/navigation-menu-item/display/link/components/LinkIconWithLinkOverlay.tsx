import { styled } from '@linaria/react';
import { useContext } from 'react';
import { getIconTileColorShades } from 'twenty-ui/data-display';
import { type IconComponent } from 'twenty-ui/icon';
import { ThemeContext, themeCssVariables } from 'twenty-ui/theme-constants';

import { DEFAULT_NAVIGATION_MENU_ITEM_COLOR_LINK } from '@/navigation-menu-item/common/constants/NavigationMenuItemDefaultColorLink';

const StyledCompositeContainer = styled.div`
  align-items: center;
  border-radius: ${themeCssVariables.border.radius.sm};
  box-sizing: border-box;
  display: flex;
  flex-shrink: 0;
  height: 16px;
  justify-content: center;
  position: relative;
  width: 16px;
`;

const StyledMainIconWrapper = styled.div<{ $backgroundColor: string }>`
  align-items: center;
  background-color: ${({ $backgroundColor }) => $backgroundColor};
  border: none;
  border-radius: ${themeCssVariables.border.radius.sm};
  box-sizing: border-box;
  display: flex;
  inset: 0;
  justify-content: center;
  position: absolute;
`;

const StyledLinkOverlay = styled.div<{ $backgroundColor: string }>`
  align-items: center;
  background-color: ${({ $backgroundColor }) => $backgroundColor};
  border-radius: ${themeCssVariables.border.radius.xs};
  bottom: -5px;
  display: flex;
  height: 14px;
  justify-content: center;
  position: absolute;
  right: -6px;
  width: 14px;
`;

export type LinkIconWithLinkOverlayProps = {
  LinkIcon: IconComponent;
  DefaultIcon: IconComponent;
  color?: string | null;
};

export const LinkIconWithLinkOverlay = ({
  LinkIcon,
  DefaultIcon,
  color: navItemColor,
}: LinkIconWithLinkOverlayProps) => {
  const { theme } = useContext(ThemeContext);
  const linkStyle = getIconTileColorShades(
    navItemColor ?? DEFAULT_NAVIGATION_MENU_ITEM_COLOR_LINK,
  );

  return (
    <StyledCompositeContainer>
      <StyledMainIconWrapper $backgroundColor={linkStyle.backgroundColor}>
        <DefaultIcon
          size="14px"
          stroke={theme.icon.stroke.md}
          color={linkStyle.iconColor}
        />
      </StyledMainIconWrapper>
      <StyledLinkOverlay $backgroundColor={themeCssVariables.grayScale.gray4}>
        <LinkIcon
          size="14px"
          stroke={theme.icon.stroke.md}
          color={themeCssVariables.grayScale.gray10}
        />
      </StyledLinkOverlay>
    </StyledCompositeContainer>
  );
};
