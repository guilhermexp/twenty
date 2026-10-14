import { assertUnreachable } from 'twenty-shared/utils';

import {
  ConflictError,
  ForbiddenError,
  NotFoundError,
} from 'src/engine/core-modules/graphql/utils/graphql-errors.util';
import {
  WorkspaceException,
  WorkspaceExceptionCode,
} from 'src/engine/core-modules/workspace/workspace.exception';

export const workspaceGraphqlApiExceptionHandler = (error: Error) => {
  if (error instanceof WorkspaceException) {
    switch (error.code) {
      case WorkspaceExceptionCode.WORKSPACE_NOT_FOUND:
        throw new NotFoundError(error);
      case WorkspaceExceptionCode.APPLICATION_UNINSTALL_IN_PROGRESS:
        throw new ConflictError(error);
      case WorkspaceExceptionCode.ENVIRONMENT_VAR_NOT_ENABLED:
        throw new ForbiddenError(error);
      default: {
        return assertUnreachable(error.code);
      }
    }
  }

  throw error;
};
