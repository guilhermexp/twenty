/* @license Enterprise */

import { type ExecutionContext, Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

import { type Request } from 'express';

import {
  AuthException,
  AuthExceptionCode,
} from 'src/engine/core-modules/auth/auth.exception';
import { SamlAuthStrategy } from 'src/engine/core-modules/auth/strategies/saml.auth.strategy';
import { GuardRedirectService } from 'src/engine/core-modules/guard-redirect/services/guard-redirect.service';
import { SsoService } from 'src/engine/core-modules/sso/services/sso.service';

@Injectable()
export class SamlAuthGuard extends AuthGuard('saml') {
  constructor(
    private readonly ssoService: SsoService,
    private readonly guardRedirectService: GuardRedirectService,
  ) {
    super();
  }

  async canActivate(context: ExecutionContext) {
    const request = context.switchToHttp().getRequest<Request>();

    try {
      const identityProvider =
        await this.ssoService.findSsoIdentityProviderById(
          request.params.identityProviderId,
        );

      if (!identityProvider) {
        throw new AuthException(
          'Identity provider not found',
          AuthExceptionCode.INVALID_DATA,
        );
      }
      new SamlAuthStrategy(this.ssoService);

      return (await super.canActivate(context)) as boolean;
    } catch (err) {
      this.guardRedirectService.dispatchErrorFromGuard(context, err);

      return false;
    }
  }
}
