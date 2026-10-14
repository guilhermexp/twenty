import { ExecutionContext, Injectable } from '@nestjs/common';

import { AppPath } from 'twenty-shared/types';

import {
  AuthException,
  AuthExceptionCode,
} from 'src/engine/core-modules/auth/auth.exception';
import { WorkspaceDomainsService } from 'src/engine/core-modules/domain/workspace-domains/services/workspace-domains.service';
import { ExceptionHandlerService } from 'src/engine/core-modules/exception-handler/exception-handler.service';
import { type CustomException } from 'src/utils/custom-exception';

@Injectable()
export class GuardRedirectService {
  constructor(
    private readonly exceptionHandlerService: ExceptionHandlerService,
    private readonly workspaceDomainsService: WorkspaceDomainsService,
  ) {}

  dispatchErrorFromGuard(
    context: ExecutionContext,
    error: Error | CustomException,
    pathname = AppPath.Verify,
  ) {
    if ('contextType' in context && context.contextType === 'graphql') {
      throw error;
    }

    context.switchToHttp().getResponse().redirect(
      this.getRedirectErrorUrlAndCaptureExceptions({
        error,
        pathname,
      }),
    );
  }

  private captureException(err: Error | CustomException, workspaceId?: string) {
    if (
      err instanceof AuthException &&
      err.code !== AuthExceptionCode.INTERNAL_SERVER_ERROR
    )
      return;

    this.exceptionHandlerService.captureExceptions([err], {
      workspace: {
        id: workspaceId,
      },
    });
  }

  getRedirectErrorUrlAndCaptureExceptions({
    error,
    workspaceId,
    pathname,
  }: {
    error: Error | AuthException;
    workspaceId?: string;
    pathname: string;
  }) {
    this.captureException(error, workspaceId);

    const errorMessage =
      error instanceof AuthException
        ? error.message
        : `Authentication error: ${error instanceof Error ? error.message : String(error)}`;

    return this.workspaceDomainsService.computeWorkspaceRedirectErrorUrl(
      errorMessage,
      pathname,
    );
  }
}
