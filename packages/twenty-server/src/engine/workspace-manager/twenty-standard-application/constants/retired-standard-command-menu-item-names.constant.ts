import { type STANDARD_COMMAND_MENU_ITEMS } from 'src/engine/workspace-manager/twenty-standard-application/constants/standard-command-menu-item.constant';

// These entries stay in STANDARD_COMMAND_MENU_ITEMS because committed upgrade
// commands still read their universal identifiers, but their target pages were
// removed from this fork, so they must no longer be seeded or synchronized.
export const RETIRED_STANDARD_COMMAND_MENU_ITEM_NAMES: Partial<
  Record<keyof typeof STANDARD_COMMAND_MENU_ITEMS, true>
> = {
  goToSettingsDomains: true,
  goToSettingsUpdates: true,
};
