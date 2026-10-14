// Origin passed as the GraphQL `origin` variable on auth exchanges. The server
// always resolves the single workspace, which is the seeded Apple workspace in
// the test environment; this is unrelated to the HTTP Origin header the CSRF
// and cookie-issuance gates read.
export const buildAppleWorkspaceOrigin = (): string =>
  new URL(`http://localhost:${APP_PORT}`).toString();
