import { Module } from '@nestjs/common';

import { WorkspaceDomainsModule } from 'src/engine/core-modules/domain/workspace-domains/workspace-domains.module';
import { GuardRedirectService } from 'src/engine/core-modules/guard-redirect/services/guard-redirect.service';

@Module({
  imports: [WorkspaceDomainsModule],
  providers: [GuardRedirectService],
  exports: [GuardRedirectService],
})
export class GuardRedirectModule {}
