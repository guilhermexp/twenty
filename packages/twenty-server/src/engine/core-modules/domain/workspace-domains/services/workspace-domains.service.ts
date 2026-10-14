import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { isNonEmptyString } from '@sniptt/guards';
import { assertIsDefinedOrThrow, isDefined } from 'twenty-shared/utils';
import { Repository } from 'typeorm';

import { DomainServerConfigService } from 'src/engine/core-modules/domain/domain-server-config/services/domain-server-config.service';
import { buildUrlWithPathnameAndSearchParams } from 'src/engine/core-modules/domain/domain-server-config/utils/build-url-with-pathname-and-search-params.util';
import { NodeEnvironment } from 'src/engine/core-modules/twenty-config/interfaces/node-environment.interface';
import { WorkspaceEntity } from 'src/engine/core-modules/workspace/workspace.entity';
import { WorkspaceNotFoundDefaultError } from 'src/engine/core-modules/workspace/workspace.exception';
import { SEED_APPLE_WORKSPACE_ID } from 'src/engine/workspace-manager/dev-seeder/core/constants/seeder-workspaces.constant';

@Injectable()
export class WorkspaceDomainsService {
  constructor(
    private readonly domainServerConfigService: DomainServerConfigService,
    @InjectRepository(WorkspaceEntity)
    private readonly workspaceRepository: Repository<WorkspaceEntity>,
  ) {}

  buildWorkspaceURL({
    pathname,
    searchParams,
    hash,
  }: {
    pathname?: string;
    searchParams?: Record<string, string | number | boolean>;
    hash?: string;
  } = {}) {
    return buildUrlWithPathnameAndSearchParams({
      baseUrl: this.domainServerConfigService.getFrontUrl(),
      pathname,
      searchParams,
      hash,
    });
  }

  computeWorkspaceRedirectErrorUrl(errorMessage: string, pathname: string) {
    const url = this.buildWorkspaceURL({
      pathname,
      searchParams: { errorMessage },
    });

    return url.toString();
  }

  private async getDefaultWorkspace() {
    const workspaces = await this.workspaceRepository.find({
      order: {
        createdAt: 'DESC',
      },
      relations: ['workspaceSsoIdentityProviders'],
    });

    if (workspaces.length > 1) {
      Logger.warn(
        `${workspaces.length} workspaces found in database. There should be only one workspace. The most recently created workspace will be used.`,
      );
    }

    const foundWorkspace =
      process.env.NODE_ENV === NodeEnvironment.TEST
        ? (workspaces.find(
            (workspace) => workspace.id === SEED_APPLE_WORKSPACE_ID,
          ) ?? workspaces[0])
        : workspaces[0];

    assertIsDefinedOrThrow(foundWorkspace, WorkspaceNotFoundDefaultError);

    return foundWorkspace;
  }

  async getWorkspaceByOriginOrDefaultWorkspace(origin: string) {
    const { workspace } = await this.resolveWorkspaceFromOrigin(origin);

    return workspace;
  }

  async resolveWorkspaceFromOrigin(origin: string): Promise<{
    workspace: WorkspaceEntity;
    isIsolatedOrigin: boolean;
  }> {
    return {
      workspace: await this.getDefaultWorkspace(),
      isIsolatedOrigin:
        this.domainServerConfigService.isPublicDomainOrigin(origin),
    };
  }

  buildPublicFunctionBaseUrl(
    workspace: Pick<WorkspaceEntity, 'subdomain'>,
  ): string | undefined {
    const publicBaseHostname =
      this.domainServerConfigService.getPublicBaseHostnameOrUndefined();

    if (!isNonEmptyString(publicBaseHostname)) {
      return undefined;
    }

    const url = this.domainServerConfigService.getPublicDomainUrl();

    url.hostname = `${workspace.subdomain}.${publicBaseHostname}`;

    return url.origin;
  }

  buildPublicFunctionUrl({
    workspace,
    path,
  }: {
    workspace: Pick<WorkspaceEntity, 'subdomain'>;
    path: string;
  }): string | undefined {
    const baseUrl = this.buildPublicFunctionBaseUrl(workspace);

    if (!isDefined(baseUrl)) {
      return undefined;
    }

    return `${baseUrl}${path.startsWith('/') ? path : `/${path}`}`;
  }

  getWorkspaceUrls() {
    return {
      subdomainUrl: this.domainServerConfigService.getFrontUrl().toString(),
    };
  }
}
