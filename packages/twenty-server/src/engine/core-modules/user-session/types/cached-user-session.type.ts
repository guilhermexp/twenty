import { type AuthProviderEnum } from 'src/engine/core-modules/workspace/types/workspace.type';

// Cached under the token hash in Redis; dates as ISO strings so the payload
// survives JSON serialization.
export type CachedUserSession = {
  sessionId: string;
  userId: string;
  workspaceId: string | null;
  userWorkspaceId: string | null;
  authProvider: AuthProviderEnum;
  expiresAt: string;
  lastActiveAt: string;
  authenticatedAt: string;
};
