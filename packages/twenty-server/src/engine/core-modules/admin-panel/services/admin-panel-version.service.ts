import { Injectable } from '@nestjs/common';

import { type VersionInfoDTO } from 'src/engine/core-modules/admin-panel/dtos/version-info.dto';
import { TwentyConfigService } from 'src/engine/core-modules/twenty-config/twenty-config.service';

@Injectable()
export class AdminPanelVersionService {
  constructor(private readonly twentyConfigService: TwentyConfigService) {}

  getVersionInfo(): VersionInfoDTO {
    return {
      currentVersion: this.twentyConfigService.get('APP_VERSION'),
    };
  }
}
