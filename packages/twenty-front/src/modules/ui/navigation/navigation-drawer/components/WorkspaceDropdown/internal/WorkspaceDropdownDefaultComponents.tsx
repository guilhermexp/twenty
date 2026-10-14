import { DEFAULT_WORKSPACE_LOGO } from '@/ui/navigation/navigation-drawer/constants/DefaultWorkspaceLogo';

import { useAuth } from '@/auth/hooks/useAuth';
import { currentWorkspaceState } from '@/auth/states/currentWorkspaceState';
import { useOpenRecordInPreference } from '@/settings/experience/hooks/useOpenRecordInPreference';
import { Dropdown } from '@/ui/layout/dropdown/components/Dropdown';
import { DropdownContent } from '@/ui/layout/dropdown/components/DropdownContent';
import { DropdownMenuHeader } from '@/ui/layout/dropdown/components/DropdownMenuHeader/DropdownMenuHeader';
import { DropdownMenuHeaderLeftComponent } from '@/ui/layout/dropdown/components/DropdownMenuHeader/internal/DropdownMenuHeaderLeftComponent';
import { DropdownMenuItemsContainer } from '@/ui/layout/dropdown/components/DropdownMenuItemsContainer';
import { useCloseDropdown } from '@/ui/layout/dropdown/hooks/useCloseDropdown';
import { WORKSPACE_DROPDOWN_ID } from '@/ui/navigation/navigation-drawer/constants/WorkspaceDropdownId';
import { OPEN_RECORD_IN_OPTIONS } from '@/ui/navigation/navigation-drawer/constants/OpenRecordInOptions';
import { workspaceDropdownState } from '@/ui/navigation/navigation-drawer/states/workspaceDropdownState';
import { useColorScheme } from '@/ui/theme/hooks/useColorScheme';
import { useAtomStateValue } from '@/ui/utilities/state/jotai/hooks/useAtomStateValue';
import { useSetAtomState } from '@/ui/utilities/state/jotai/hooks/useSetAtomState';
import { useLingui } from '@lingui/react/macro';
import { SettingsPath } from 'twenty-shared/types';
import { getSettingsPath } from 'twenty-shared/utils';
import { Avatar } from 'twenty-ui/data-display';
import {
  IconDotsVertical,
  IconLogout,
  IconSettings,
  IconUserPlus,
} from 'twenty-ui/icon';
import { LightIconButton } from 'twenty-ui/input';
import { MenuItem, UndecoratedLink } from 'twenty-ui/navigation';
import { useIsMobile } from 'twenty-ui/utilities';
import { useNavigateSettings } from '~/hooks/useNavigateSettings';
import { getAbsoluteImageUrl } from '~/utils/image/getAbsoluteImageUrl';

export const WorkspaceDropdownDefaultComponents = () => {
  const currentWorkspace = useAtomStateValue(currentWorkspaceState);
  const { t } = useLingui();
  const { closeDropdown } = useCloseDropdown();
  const { signOut } = useAuth();
  const { colorScheme, colorSchemeList } = useColorScheme();

  const setWorkspaceDropdown = useSetAtomState(workspaceDropdownState);

  const { openRecordInPreference } = useOpenRecordInPreference();
  const navigateSettings = useNavigateSettings();

  const isMobile = useIsMobile();
  const canDisplaySidePanel = !isMobile;

  const handleSettings = () => {
    closeDropdown(WORKSPACE_DROPDOWN_ID);
    navigateSettings(SettingsPath.ProfilePage);
  };

  return (
    <DropdownContent>
      <DropdownMenuHeader
        StartComponent={
          <DropdownMenuHeaderLeftComponent
            Avatar={
              <Avatar
                placeholder={currentWorkspace?.displayName || ''}
                avatarUrl={getAbsoluteImageUrl(
                  currentWorkspace?.logo ?? DEFAULT_WORKSPACE_LOGO,
                )}
              />
            }
          />
        }
        EndComponent={
          <Dropdown
            clickableComponent={
              <LightIconButton
                Icon={IconDotsVertical}
                size="small"
                accent="tertiary"
              />
            }
            dropdownId="workspace-dropdown-context-menu"
            dropdownComponents={
              <DropdownContent>
                <DropdownMenuItemsContainer>
                  <MenuItem
                    LeftIcon={IconLogout}
                    text={t`Log out`}
                    onClick={signOut}
                  />
                </DropdownMenuItemsContainer>
              </DropdownContent>
            }
          />
        }
      >
        {currentWorkspace?.displayName}
      </DropdownMenuHeader>
      <DropdownMenuItemsContainer>
        {/* Desktop reaches settings from the drawer's mode switcher, which
            mobile does not render, so the workspace menu is where it lives. */}
        {isMobile && (
          <MenuItem
            LeftIcon={IconSettings}
            text={t`Settings`}
            onClick={handleSettings}
          />
        )}
        <MenuItem
          LeftIcon={colorSchemeList.find(({ id }) => id === colorScheme)?.icon}
          text={t`Theme`}
          contextualText={colorScheme}
          hasSubMenu={true}
          onClick={() => setWorkspaceDropdown('themes')}
        />
        {canDisplaySidePanel && (
          <MenuItem
            LeftIcon={OPEN_RECORD_IN_OPTIONS[openRecordInPreference].Icon}
            text={t`Open in`}
            contextualText={t(
              OPEN_RECORD_IN_OPTIONS[openRecordInPreference].label,
            )}
            hasSubMenu={true}
            onClick={() => setWorkspaceDropdown('open-record-in')}
          />
        )}
        <UndecoratedLink
          to={`${getSettingsPath(SettingsPath.WorkspaceMembersPage)}#invite`}
          onClick={() => {
            closeDropdown(WORKSPACE_DROPDOWN_ID);
          }}
        >
          <MenuItem LeftIcon={IconUserPlus} text={t`Invite user`} />
        </UndecoratedLink>
      </DropdownMenuItemsContainer>
    </DropdownContent>
  );
};
