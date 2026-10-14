import { DropdownContent } from '@/ui/layout/dropdown/components/DropdownContent';
import { DropdownMenuHeader } from '@/ui/layout/dropdown/components/DropdownMenuHeader/DropdownMenuHeader';
import { DropdownMenuHeaderLeftComponent } from '@/ui/layout/dropdown/components/DropdownMenuHeader/internal/DropdownMenuHeaderLeftComponent';
import { DropdownMenuItemsContainer } from '@/ui/layout/dropdown/components/DropdownMenuItemsContainer';
import { workspaceDropdownState } from '@/ui/navigation/navigation-drawer/states/workspaceDropdownState';
import { useColorScheme } from '@/ui/theme/hooks/useColorScheme';
import { useSetAtomState } from '@/ui/utilities/state/jotai/hooks/useSetAtomState';
import { useLingui } from '@lingui/react/macro';
import { IconCheck, IconChevronLeft } from 'twenty-ui/icon';
import { MenuItem } from 'twenty-ui/navigation';

export const WorkspaceDropdownThemesComponents = () => {
  const { t } = useLingui();

  const { setColorScheme, colorScheme, colorSchemeList } = useColorScheme();

  const setWorkspaceDropdown = useSetAtomState(workspaceDropdownState);

  return (
    <DropdownContent>
      <DropdownMenuHeader
        StartComponent={
          <DropdownMenuHeaderLeftComponent
            onClick={() => setWorkspaceDropdown('default')}
            Icon={IconChevronLeft}
          />
        }
      >
        {t`Theme`}
      </DropdownMenuHeader>
      <DropdownMenuItemsContainer>
        {colorSchemeList.map((theme) => (
          <MenuItem
            key={theme.id}
            LeftIcon={theme.icon}
            text={
              theme.id === 'System'
                ? t`System`
                : theme.id === 'Dark'
                  ? t`Dark`
                  : t`Light`
            }
            onClick={() => setColorScheme(theme.id)}
            RightIcon={theme.id === colorScheme ? IconCheck : undefined}
          />
        ))}
      </DropdownMenuItemsContainer>
    </DropdownContent>
  );
};
