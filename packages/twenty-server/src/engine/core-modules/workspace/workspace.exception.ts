import { type MessageDescriptor } from '@lingui/core';
import { msg } from '@lingui/core/macro';
import { assertUnreachable } from 'twenty-shared/utils';

import { CustomException } from 'src/utils/custom-exception';

export enum WorkspaceExceptionCode {
  SUBDOMAIN_NOT_FOUND = 'SUBDOMAIN_NOT_FOUND',
  SUBDOMAIN_ALREADY_TAKEN = 'SUBDOMAIN_ALREADY_TAKEN',
  SUBDOMAIN_NOT_VALID = 'SUBDOMAIN_NOT_VALID',
  WORKSPACE_NOT_FOUND = 'WORKSPACE_NOT_FOUND',
  ENVIRONMENT_VAR_NOT_ENABLED = 'ENVIRONMENT_VAR_NOT_ENABLED',
  APPLICATION_UNINSTALL_IN_PROGRESS = 'APPLICATION_UNINSTALL_IN_PROGRESS',
}

const getWorkspaceExceptionUserFriendlyMessage = (
  code: WorkspaceExceptionCode,
) => {
  switch (code) {
    case WorkspaceExceptionCode.SUBDOMAIN_NOT_FOUND:
      return msg`Subdomain not found.`;
    case WorkspaceExceptionCode.SUBDOMAIN_ALREADY_TAKEN:
      return msg`This subdomain is already taken.`;
    case WorkspaceExceptionCode.SUBDOMAIN_NOT_VALID:
      return msg`Invalid subdomain.`;
    case WorkspaceExceptionCode.WORKSPACE_NOT_FOUND:
      return msg`Workspace not found.`;
    case WorkspaceExceptionCode.ENVIRONMENT_VAR_NOT_ENABLED:
      return msg`This feature is not enabled.`;
    case WorkspaceExceptionCode.APPLICATION_UNINSTALL_IN_PROGRESS:
      return msg`Application cleanup is still in progress. Please try again.`;
    default:
      assertUnreachable(code);
  }
};

export class WorkspaceException extends CustomException<WorkspaceExceptionCode> {
  constructor(
    message: string,
    code: WorkspaceExceptionCode,
    { userFriendlyMessage }: { userFriendlyMessage?: MessageDescriptor } = {},
  ) {
    super(message, code, {
      userFriendlyMessage:
        userFriendlyMessage ?? getWorkspaceExceptionUserFriendlyMessage(code),
    });
  }
}

export const WorkspaceNotFoundDefaultError = new WorkspaceException(
  'Workspace not found',
  WorkspaceExceptionCode.WORKSPACE_NOT_FOUND,
);
