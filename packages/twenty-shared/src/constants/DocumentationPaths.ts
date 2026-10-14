// Static help-path constants consumed by the CRM UI.
// Kept as a regular source file after the public docs package was removed.
// Only paths still imported by the product remain; DOCUMENTATION_DEFAULT_PATH
// also reads GETTING_STARTED_INTRODUCTION.

export const DOCUMENTATION_PATHS = {
  DEVELOPERS_EXTEND_APPS_OPERATIONS_PUBLISHING:
    '/developers/extend/apps/operations/publishing',
  DEVELOPERS_SELF_HOST_CAPABILITIES_SETUP:
    '/developers/self-host/capabilities/setup',
  GETTING_STARTED_INTRODUCTION: '/getting-started/introduction',
} as const;

export type DocumentationPath =
  (typeof DOCUMENTATION_PATHS)[keyof typeof DOCUMENTATION_PATHS];
