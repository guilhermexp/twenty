import { useIsSettingsDrawer } from '@/navigation/hooks/useIsSettingsDrawer';
import { isNavigationDrawerExpandedState } from '@/ui/navigation/states/isNavigationDrawerExpanded';
import { useAtomStateValue } from '@/ui/utilities/state/jotai/hooks/useAtomStateValue';
import { useIsMobile } from 'twenty-ui/utilities';

export const useNavigationDrawerExpanded = () => {
  const isMobile = useIsMobile();
  const isSettingsDrawer = useIsSettingsDrawer();
  const isNavigationDrawerExpanded = useAtomStateValue(
    isNavigationDrawerExpandedState,
  );
  return isMobile
    ? isNavigationDrawerExpanded
    : isSettingsDrawer || isNavigationDrawerExpanded;
};
