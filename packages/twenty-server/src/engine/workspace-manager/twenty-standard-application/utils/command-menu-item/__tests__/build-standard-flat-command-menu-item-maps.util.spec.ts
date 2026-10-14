import { RETIRED_STANDARD_COMMAND_MENU_ITEM_NAMES } from 'src/engine/workspace-manager/twenty-standard-application/constants/retired-standard-command-menu-item-names.constant';
import { STANDARD_COMMAND_MENU_ITEMS } from 'src/engine/workspace-manager/twenty-standard-application/constants/standard-command-menu-item.constant';
import { computeTwentyStandardApplicationAllFlatEntityMaps } from 'src/engine/workspace-manager/twenty-standard-application/utils/twenty-standard-application-all-flat-entity-maps.constant';

describe('buildStandardFlatCommandMenuItemMaps', () => {
  const { flatCommandMenuItemMaps } =
    computeTwentyStandardApplicationAllFlatEntityMaps({
      now: '2026-10-01T00:00:00.000Z',
      workspaceId: 'workspace-id',
      twentyStandardApplicationId: 'application-id',
    }).allFlatEntityMaps;
  const commandMenuItemNames = Object.keys(
    STANDARD_COMMAND_MENU_ITEMS,
  ) as Array<keyof typeof STANDARD_COMMAND_MENU_ITEMS>;

  it('does not build retired standard command menu items', () => {
    const retiredCommandMenuItemNames = commandMenuItemNames.filter(
      (commandMenuItemName) =>
        RETIRED_STANDARD_COMMAND_MENU_ITEM_NAMES[commandMenuItemName] === true,
    );

    expect(retiredCommandMenuItemNames).toContain('goToSettingsUpdates');

    for (const commandMenuItemName of retiredCommandMenuItemNames) {
      expect(
        flatCommandMenuItemMaps.byUniversalIdentifier[
          STANDARD_COMMAND_MENU_ITEMS[commandMenuItemName].universalIdentifier
        ],
      ).toBeUndefined();
    }
  });

  it('builds every non-retired standard command menu item', () => {
    for (const commandMenuItemName of commandMenuItemNames) {
      if (RETIRED_STANDARD_COMMAND_MENU_ITEM_NAMES[commandMenuItemName]) {
        continue;
      }

      expect(
        flatCommandMenuItemMaps.byUniversalIdentifier[
          STANDARD_COMMAND_MENU_ITEMS[commandMenuItemName].universalIdentifier
        ],
      ).toBeDefined();
    }
  });
});
