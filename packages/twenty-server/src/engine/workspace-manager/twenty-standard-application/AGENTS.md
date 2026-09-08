# Twenty standard application

Workspace CRM metadata (objects, fields, views, layouts, indexes) is built here, then applied to each workspace. The TypeScript entity that Twenty ORM uses lives under `src/modules/<object>/standard-objects/`. Do not move files between `engine/` and `modules/` to “fix” layers.

This directory is the authoring surface. `src/modules/` holds the runtime entity classes. Both are required; neither replaces the other.
Compare Person (`src/modules/person/standard-objects/person.workspace-entity.ts`) with the builders listed below before copying a new object.

Orchestrator: `utils/twenty-standard-application-all-flat-entity-maps.constant.ts` (`computeTwentyStandardApplicationAllFlatEntityMaps`). Names and universal identifiers live in `packages/twenty-shared/src/metadata/constants/standard-object.constant.ts` (`STANDARD_OBJECTS`) and `standard-object-fields.constant.ts` (`STANDARD_OBJECT_FIELDS`). Never mutate an existing universal identifier.

## Add a field to an existing standard object (Person example)

1. Property on the ORM entity: `src/modules/person/standard-objects/person.workspace-entity.ts` (`PersonWorkspaceEntity`).
2. Field universal identifier in `STANDARD_OBJECT_FIELDS.person` (`packages/twenty-shared/src/metadata/constants/standard-object-fields.constant.ts`).
3. Flat field: `utils/field-metadata/compute-person-standard-flat-field-metadata.util.ts` via `createStandardFieldFlatMetadata` (or `createStandardRelationFieldFlatMetadata` for relations). That builder is already registered as `person:` in `utils/field-metadata/build-standard-flat-field-metadata-maps.util.ts`.
4. Index view / record-page view columns: `utils/view-field/compute-standard-person-view-fields.util.ts`.
5. Record page widgets/tabs: `utils/page-layout-config/standard-person-page-layout.config.ts` (wired in `constants/standard-page-layout.constant.ts`).
6. DB index, if needed: `utils/index/compute-person-standard-flat-index-metadata.util.ts` (map in `utils/index/build-standard-flat-index-metadata-maps.util.ts`).
7. Search, if needed: `constants/search-fields-by-standard-object-name.constant.ts`.

Company is the same nine places with `company` / `CompanyWorkspaceEntity` (`src/modules/company/standard-objects/company.workspace-entity.ts`).

## Create a new standard object (Opportunity as the template)

1. Add the object to `STANDARD_OBJECTS` and its fields to `STANDARD_OBJECT_FIELDS`. `AllStandardObjectName` is `keyof typeof STANDARD_OBJECTS`.
2. Entity under `src/modules/<object>/standard-objects/<object>.workspace-entity.ts` (e.g. `src/modules/opportunity/standard-objects/opportunity.workspace-entity.ts`).
3. Object metadata builder in `utils/object-metadata/create-standard-flat-object-metadata.util.ts` (`STANDARD_FLAT_OBJECT_METADATA_BUILDERS_BY_OBJECT_NAME`, e.g. `person:` around the `createStandardObjectFlatMetadata` call). Consumed by `utils/object-metadata/build-standard-flat-object-metadata-maps.util.ts`.
4. New `utils/field-metadata/compute-<object>-standard-flat-field-metadata.util.ts` and register it in `STANDARD_FLAT_FIELD_METADATA_BUILDERS_BY_OBJECT_NAME`.
5. Views: `utils/view/compute-standard-<object>-views.util.ts` + map in `utils/view/build-standard-flat-view-metadata-maps.util.ts`.
6. View fields: `utils/view-field/compute-standard-<object>-view-fields.util.ts` + its builder map.
7. Page layout config + `constants/standard-page-layout.constant.ts` + export in `utils/page-layout-config/index.ts`.
8. Indexes: `utils/index/compute-<object>-standard-flat-index-metadata.util.ts` + builder map.
9. Related IDs: `utils/get-standard-object-metadata-related-entity-ids.util.ts` (and page-layout sibling if the object has a record page).

`computeTwentyStandardApplicationAllFlatEntityMaps` already folds every registered builder; missing the maps above is how new objects silently fail to appear.

Labels use `i18nLabel(msg({ message, context }))` (see `utils/i18n-label.util.ts`). The catalog pin is `__tests__/standard-metadata-label-catalog.spec.ts`. Writability/readability of standard fields/objects are locked by `__tests__/standard-field-writability.spec.ts`, `standard-object-writability.spec.ts`, and `standard-object-readability.spec.ts`.

Field groups on views go in `utils/view-field-group/` (e.g. `compute-standard-person-view-field-groups.util.ts`). Timeline activity types are `utils/timeline-activity-type/`. Command-menu and navigation-menu items have their own `utils/command-menu-item/` and `utils/navigation-menu-item/` builder maps; skip those unless the new object should appear in those surfaces.

Do not edit generated GraphQL / `dist/` as a substitute for these builders.
