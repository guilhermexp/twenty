import { type ExecutionContext, Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

import {
  AuthException,
  AuthExceptionCode,
} from 'src/engine/core-modules/auth/auth.exception';
import { GoogleAPIsOauthRequestCodeStrategy } from 'src/engine/core-modules/auth/strategies/google-apis-oauth-request-code.auth.strategy';
import { TransientTokenService } from 'src/engine/core-modules/auth/token/services/transient-token.service';
import { setRequestExtraParams } from 'src/engine/core-modules/auth/utils/google-apis-set-request-extra-params.util';
import { GuardRedirectService } from 'src/engine/core-modules/guard-redirect/services/guard-redirect.service';
import { TwentyConfigService } from 'src/engine/core-modules/twenty-config/twenty-config.service';

@Injectable()
export class GoogleAPIsOauthRequestCodeGuard extends AuthGuard('google-apis') {
  constructor(
    private readonly twentyConfigService: TwentyConfigService,
    private readonly transientTokenService: TransientTokenService,
    private readonly guardRedirectService: GuardRedirectService,
  ) {
    super({
      prompt: 'select_account',
    });
  }

  async canActivate(context: ExecutionContext) {
    try {
      const request = context.switchToHttp().getRequest();

      const { workspaceId, userId } =
        await this.transientTokenService.verifyTransientToken(
          request.query.transientToken,
        );

      setRequestExtraParams(request, {
        transientToken: request.query.transientToken,
        redirectLocation: request.query.redirectLocation,
        calendarVisibility: request.query.calendarVisibility,
        messageVisibility: request.query.messageVisibility,
        skipMessageChannelConfiguration:
          request.query.skipMessageChannelConfiguration,
        loginHint: request.query.loginHint,
        userId: userId,
        workspaceId: workspaceId,
      });

      if (
        !this.twentyConfigService.get('MESSAGING_PROVIDER_GMAIL_ENABLED') &&
        !this.twentyConfigService.get('CALENDAR_PROVIDER_GOOGLE_ENABLED')
      ) {
        throw new AuthException(
          'Google apis auth is not enabled',
          AuthExceptionCode.GOOGLE_API_AUTH_DISABLED,
        );
      }

      new GoogleAPIsOauthRequestCodeStrategy(this.twentyConfigService);

      return (await super.canActivate(context)) as boolean;
    } catch (err) {
      this.guardRedirectService.dispatchErrorFromGuard(context, err);

      return false;
    }
  }
}
