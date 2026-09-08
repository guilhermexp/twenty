# `src/modules` vs `src/engine`

This is the **actual** boundary, not the intended one. Do not move files between the two trees to “fix” layering.

## What lives where

`src/engine/` is the platform: Nest GraphQL/API, Twenty ORM, metadata, workspace lifecycle, cache, and core-modules (auth, config, billing, i18n, …).

`src/modules/` is CRM domain: standard objects (Person, Company, Opportunity, Task, …), messaging/calendar, workflows, dashboards, onboarding. Wired through `modules.module.ts` (`MessagingModule`, `CalendarModule`, `ConnectedAccountModule`, `WorkflowModule`, `WorkspaceMemberModule`, …).

The two trees import each other freely. That is how the repo is built.

## Counts (do not “clean up”)

- **129** files under `src/engine/` import `src/modules/`.
- **670** files under `src/modules/` import `src/engine/`.

## Engine importing modules

Engine code depends on domain entities and domain Nest modules:

- `src/engine/twenty-orm/custom.workspace-entity.ts` types custom objects against `AttachmentWorkspaceEntity`, `NoteTargetWorkspaceEntity`, `TaskTargetWorkspaceEntity`, `TimelineActivityWorkspaceEntity` from `src/modules/*/standard-objects/`.
- `src/engine/metadata-modules/page-layout/page-layout.module.ts` imports `DashboardSyncModule` from `src/modules/dashboard-sync/dashboard-sync.module`.
- `src/engine/metadata-modules/page-layout/services/page-layout.service.ts` injects `DashboardSyncService` from `src/modules/dashboard-sync/services/dashboard-sync.service`.

## Modules importing engine

Domain objects are ORM entities and Nest services on top of engine primitives:

- `src/modules/person/standard-objects/person.workspace-entity.ts` extends `BaseWorkspaceEntity` (`src/engine/twenty-orm/base.workspace-entity`) and uses `EntityRelation` from `src/engine/workspace-manager/workspace-migration/types/entity-relation.interface`.
- `src/modules/opportunity/standard-objects/opportunity.workspace-entity.ts` same pattern.
- `src/modules/onboarding-invite-suggestions/services/onboarding-invite-suggestions.service.ts` uses engine cache (`InjectCacheStorage`, `CacheStorageService`) and `ConnectedAccountEntity` from `src/engine/metadata-modules/connected-account/entities/connected-account.entity`.

## Standard objects

The TypeScript class for a standard object lives here (`src/modules/<object>/standard-objects/<object>.workspace-entity.ts`). Fields, views, layouts, and indexes are authored under `src/engine/workspace-manager/twenty-standard-application/` — see that folder’s `AGENTS.md`.

## What this folder is not

`engine/core-modules/` (auth, twenty-config, billing, feature flags) is not domain CRM, even when a module service reads those services. `engine/workspace-manager/twenty-standard-application/` authors the metadata that *describes* the entities that live here. `engine/metadata-modules/` is the metadata GraphQL/API, not a Person/Company module.

If you need a new standard object, add the class here and follow `../engine/workspace-manager/twenty-standard-application/AGENTS.md`. Do not relocate `person/` into `engine/` or `twenty-orm/` into `modules/`.
