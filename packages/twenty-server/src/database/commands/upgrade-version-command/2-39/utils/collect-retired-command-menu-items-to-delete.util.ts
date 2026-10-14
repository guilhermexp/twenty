import { isDefined } from 'twenty-shared/utils';

import { type FlatCommandMenuItem } from 'src/engine/metadata-modules/flat-command-menu-item/types/flat-command-menu-item.type';
import { type FlatCommandMenuItemMaps } from 'src/engine/metadata-modules/flat-command-menu-item/types/flat-command-menu-item-maps.type';

export const collectRetiredCommandMenuItemsToDelete = ({
  existingFlatCommandMenuItemMaps,
  universalIdentifiers,
}: {
  existingFlatCommandMenuItemMaps: FlatCommandMenuItemMaps;
  universalIdentifiers: readonly string[];
}): FlatCommandMenuItem[] =>
  universalIdentifiers
    .map(
      (universalIdentifier) =>
        existingFlatCommandMenuItemMaps.byUniversalIdentifier[
          universalIdentifier
        ],
    )
    .filter(isDefined);
