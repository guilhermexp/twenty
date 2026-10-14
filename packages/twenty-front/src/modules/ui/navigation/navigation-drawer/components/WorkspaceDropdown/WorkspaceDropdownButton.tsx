import { isLayoutCustomizationModeEnabledState } from '@/layout-customization/states/isLayoutCustomizationModeEnabledState';
import { Dropdown } from '@/ui/layout/dropdown/components/Dropdown';
import { WorkspaceDropdownClickableComponent } from '@/ui/navigation/navigation-drawer/components/WorkspaceDropdown/internal/WorkspaceDropdownClickableComponent';
import { WorkspaceDropdownDefaultComponents } from '@/ui/navigation/navigation-drawer/components/WorkspaceDropdown/internal/WorkspaceDropdownDefaultComponents';
import { WorkspaceDropdownOpenRecordInComponents } from '@/ui/navigation/navigation-drawer/components/WorkspaceDropdown/internal/WorkspaceDropdownOpenRecordInComponents';
import { WorkspaceDropdownThemesComponents } from '@/ui/navigation/navigation-drawer/components/WorkspaceDropdown/internal/WorkspaceDropdownThemesComponents';
import { WORKSPACE_DROPDOWN_ID } from '@/ui/navigation/navigation-drawer/constants/WorkspaceDropdownId';
import { WORKSPACE_DROPDOWN_MOBILE_BOUNDARY_PADDING } from '@/ui/navigation/navigation-drawer/constants/WorkspaceDropdownMobileBoundaryPadding';
import { workspaceDropdownState } from '@/ui/navigation/navigation-drawer/states/workspaceDropdownState';
import { useAtomState } from '@/ui/utilities/state/jotai/hooks/useAtomState';
import { useAtomStateValue } from '@/ui/utilities/state/jotai/hooks/useAtomStateValue';
import { useMemo } from 'react';
import { useIsMobile } from 'twenty-ui/utilities';

type WorkspaceDropdownButtonProps = {
  shouldHideLabel?: boolean;
};

export const WorkspaceDropdownButton = ({
  shouldHideLabel = false,
}: WorkspaceDropdownButtonProps) => {
  const [workspaceDropdown, setWorkspaceDropdown] = useAtomState(
    workspaceDropdownState,
  );
  const isLayoutCustomizationModeEnabled = useAtomStateValue(
    isLayoutCustomizationModeEnabledState,
  );
  const isMobile = useIsMobile();

  const DropdownComponents = useMemo(() => {
    switch (workspaceDropdown) {
      case 'themes':
        return WorkspaceDropdownThemesComponents;
      case 'open-record-in':
        return WorkspaceDropdownOpenRecordInComponents;
      default:
        return WorkspaceDropdownDefaultComponents;
    }
  }, [workspaceDropdown]);

  return (
    <Dropdown
      dropdownId={WORKSPACE_DROPDOWN_ID}
      // The trigger spans the whole row so the panel can overlay it. Aligned
      // to the row's end that lands on the drawer edge on desktop, but on
      // mobile the row is the full screen and the panel drifted away from the
      // workspace name it belongs to.
      dropdownPlacement={isMobile ? 'bottom-start' : 'bottom-end'}
      middlewareBoundaryPadding={
        isMobile
          ? {
              left: WORKSPACE_DROPDOWN_MOBILE_BOUNDARY_PADDING,
              right: WORKSPACE_DROPDOWN_MOBILE_BOUNDARY_PADDING,
            }
          : undefined
      }
      dropdownOffset={
        // The drawer trigger is full width and the panel sits over it; the
        // icon-only trigger is too small for that, so the panel drops below.
        shouldHideLabel ? { y: 4, x: 0 } : { y: -31, x: -5 }
      }
      clickableComponent={
        <WorkspaceDropdownClickableComponent
          disabled={isLayoutCustomizationModeEnabled}
          shouldHideLabel={shouldHideLabel}
        />
      }
      clickableComponentWidth={shouldHideLabel ? 'auto' : '100%'}
      disableClickForClickableComponent={isLayoutCustomizationModeEnabled}
      dropdownComponents={<DropdownComponents />}
      onClose={() => {
        setWorkspaceDropdown('default');
      }}
    />
  );
};
