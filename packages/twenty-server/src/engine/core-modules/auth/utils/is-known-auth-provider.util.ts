import { AuthProviderEnum } from 'src/engine/core-modules/workspace/types/workspace.type';

// Credentials minted by removed flows (e.g. 'impersonation') still carry their
// old provider; treating them as unknown makes them unusable after deploy.
export const isKnownAuthProvider = (
  authProvider: unknown,
): authProvider is AuthProviderEnum =>
  Object.values(AuthProviderEnum).includes(authProvider as AuthProviderEnum);
