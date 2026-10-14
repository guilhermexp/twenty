import { type ExecutionContext, Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

import { type Request } from 'express';

import {
  AuthException,
  AuthExceptionCode,
} from 'src/engine/core-modules/auth/auth.exception';
import { GuardRedirectService } from 'src/engine/core-modules/guard-redirect/services/guard-redirect.service';

@Injectable()
export class GoogleOauthGuard extends AuthGuard('google') {
  constructor(private readonly guardRedirectService: GuardRedirectService) {
    super({
      prompt: 'select_account',
    });
  }

  async canActivate(context: ExecutionContext) {
    const request = context.switchToHttp().getRequest<Request>();

    try {
      if (
        request.query.workspaceId &&
        typeof request.query.workspaceId === 'string'
      ) {
        request.params.workspaceId = request.query.workspaceId;
      }

      if (request.query.error === 'access_denied') {
        throw new AuthException(
          'Google OAuth access denied',
          AuthExceptionCode.OAUTH_ACCESS_DENIED,
        );
      }

      return (await super.canActivate(context)) as boolean;
    } catch (err) {
      this.guardRedirectService.dispatchErrorFromGuard(context, err);

      return false;
    }
  }
}
