import { collectRetiredCommandMenuItemsToDelete } from 'src/database/commands/upgrade-version-command/2-39/utils/collect-retired-command-menu-items-to-delete.util';
import { type FlatCommandMenuItemMaps } from 'src/engine/metadata-modules/flat-command-menu-item/types/flat-command-menu-item-maps.type';
import { createEmptyFlatEntityMaps } from 'src/engine/metadata-modules/flat-entity/constant/create-empty-flat-entity-maps.constant';
import { createStandardCommandMenuItemFlatMetadata } from 'src/engine/workspace-manager/twenty-standard-application/utils/command-menu-item/create-standard-command-menu-item-flat-metadata.util';
import { addFlatEntityToFlatEntityMapsThroughMutationOrThrow } from 'src/engine/workspace-manager/workspace-migration/utils/add-flat-entity-to-flat-entity-maps-through-mutation-or-throw.util';

const COMMUNITY_SETTINGS_UNIVERSAL_IDENTIFIER =
  '5d1ba354-0090-4a42-9a43-601461b26068';

const buildCommandMenuItem = (
  commandMenuItemName: 'goToSettingsUpdates' | 'goToSettingsAdminPanel',
) =>
  createStandardCommandMenuItemFlatMetadata({
    commandMenuItemName,
    commandMenuItemId: `${commandMenuItemName}-id`,
    workspaceId: 'workspace-id',
    twentyStandardApplicationId: 'application-id',
    dependencyFlatEntityMaps: {
      flatObjectMetadataMaps: createEmptyFlatEntityMaps(),
    },
    now: '2026-10-01T00:00:00.000Z',
  });

const buildExistingMaps = (
  commandMenuItemNames: Array<'goToSettingsUpdates' | 'goToSettingsAdminPanel'>,
): FlatCommandMenuItemMaps => {
  const flatCommandMenuItemMaps: FlatCommandMenuItemMaps =
    createEmptyFlatEntityMaps();

  for (const commandMenuItemName of commandMenuItemNames) {
    addFlatEntityToFlatEntityMapsThroughMutationOrThrow({
      flatEntity: buildCommandMenuItem(commandMenuItemName),
      flatEntityMapsToMutate: flatCommandMenuItemMaps,
    });
  }

  return flatCommandMenuItemMaps;
};

describe('collectRetiredCommandMenuItemsToDelete', () => {
  it('returns only the existing items matching the retired identifiers', () => {
    const commandMenuItemsToDelete = collectRetiredCommandMenuItemsToDelete({
      existingFlatCommandMenuItemMaps: buildExistingMaps([
        'goToSettingsUpdates',
        'goToSettingsAdminPanel',
      ]),
      universalIdentifiers: [COMMUNITY_SETTINGS_UNIVERSAL_IDENTIFIER],
    });

    expect(
      commandMenuItemsToDelete.map((item) => item.universalIdentifier),
    ).toEqual([COMMUNITY_SETTINGS_UNIVERSAL_IDENTIFIER]);
  });

  it('returns nothing when the retired items were already deleted', () => {
    expect(
      collectRetiredCommandMenuItemsToDelete({
        existingFlatCommandMenuItemMaps: buildExistingMaps([
          'goToSettingsAdminPanel',
        ]),
        universalIdentifiers: [COMMUNITY_SETTINGS_UNIVERSAL_IDENTIFIER],
      }),
    ).toEqual([]);
  });
});
