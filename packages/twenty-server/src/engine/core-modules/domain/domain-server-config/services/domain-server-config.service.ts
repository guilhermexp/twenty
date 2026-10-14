import { Injectable } from '@nestjs/common';

import {
  getHostnameFromUrlOrUndefined,
  isHostUnderPublicFunctionDomain,
} from 'src/engine/core-modules/domain/domain-server-config/utils/public-function-domain.util';
import { TwentyConfigService } from 'src/engine/core-modules/twenty-config/twenty-config.service';

@Injectable()
export class DomainServerConfigService {
  constructor(private readonly twentyConfigService: TwentyConfigService) {}

  getFrontUrl() {
    return new URL(
      this.twentyConfigService.get('FRONTEND_URL') ??
        this.twentyConfigService.get('SERVER_URL'),
    );
  }

  getPublicDomainUrl(): URL {
    return new URL(this.twentyConfigService.get('PUBLIC_DOMAIN_URL'));
  }

  getPublicBaseHostnameOrUndefined(): string | undefined {
    return getHostnameFromUrlOrUndefined(
      this.twentyConfigService.get('PUBLIC_DOMAIN_URL'),
    );
  }

  isPublicDomainOrigin(url: string) {
    return isHostUnderPublicFunctionDomain({
      host: new URL(url).hostname,
      publicDomainBaseHostname: this.getPublicBaseHostnameOrUndefined(),
    });
  }
}
