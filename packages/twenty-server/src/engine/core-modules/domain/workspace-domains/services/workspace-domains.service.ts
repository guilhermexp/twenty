import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { isNonEmptyString } from '@sniptt/guards';
import { assertIsDefinedOrThrow, isDefined } from 'twenty-shared/utils';
import { Repository } from 'typeorm';

import { DomainServerConfigService } from 'src/engine/core-modules/domain/domain-server-config/services/domain-server-config.service';
import { buildUrlWithPathnameAndSearchParams } from 'src/engine/core-modules/domain/domain-server-config/utils/build-url-with-pathname-and-search-params.util';
import { WorkspaceDomainConfig } from 'src/engine/core-modules/domain/workspace-domains/types/workspace-domain-config.type';
import { NodeEnvironment } from 'src/engine/core-modules/twenty-config/interfaces/node-environment.interface';
import { TwentyConfigService } from 'src/engine/core-modules/twenty-config/twenty-config.service';
import { WorkspaceEntity } from 'src/engine/core-modules/workspace/workspace.entity';
import { WorkspaceNotFoundDefaultError } from 'src/engine/core-modules/workspace/workspace.exception';
import { SEED_APPLE_WORKSPACE_ID } from 'src/engine/workspace-manager/dev-seeder/core/constants/seeder-workspaces.constant';

@Injectable()
export class WorkspaceDomainsService {
  constructor(
    private readonly domainServerConfigService: DomainServerConfigService,
    private readonly twentyConfigService: TwentyConfigService,
    @InjectRepository(WorkspaceEntity)
    private readonly workspaceRepository: Repository<WorkspaceEntity>,
  ) {}

  buildWorkspaceURL({
    workspace,
    pathname,
    searchParams,
    hash,
  }: {
    workspace: WorkspaceDomainConfig;
    pathname?: string;
    searchParams?: Record<string, string | number | boolean>;
    hash?: string;
  }) {
    const workspaceUrls = this.getWorkspaceUrls(workspace);

    const url = buildUrlWithPathnameAndSearchParams({
      baseUrl: new URL(workspaceUrls.subdomainUrl),
      pathname,
      searchParams,
      hash,
    });

    return url;
  }

  computeWorkspaceRedirectErrorUrl(
    errorMessage: string,
    workspace: WorkspaceDomainConfig,
    pathname: string,
  ) {
    const url = this.buildWorkspaceURL({
      workspace,
      pathname,
      searchParams: { errorMessage },
    });

    return url.toString();
  }

  private async getDefaultWorkspace() {
    if (this.twentyConfigService.get('IS_MULTIWORKSPACE_ENABLED')) {
      throw new Error(
        'Default workspace does not exist when multi-workspace is enabled',
      );
    }

    const workspaces = await this.workspaceRepository.find({
      order: {
        createdAt: 'DESC',
      },
      relations: ['workspaceSsoIdentityProviders'],
    });

    if (workspaces.length > 1) {
      Logger.warn(
        `${workspaces.length} workspaces found in database. In single-workspace mode, there should be only one workspace. The most recently created workspace will be used.`,
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
    workspace: WorkspaceEntity | undefined;
    isIsolatedOrigin: boolean;
  }> {
    const { subdomain, isPublicDomainOrigin } =
      this.domainServerConfigService.getSubdomainFromUrl(origin);

    if (!this.twentyConfigService.get('IS_MULTIWORKSPACE_ENABLED')) {
      return {
        workspace: await this.getDefaultWorkspace(),
        isIsolatedOrigin: isPublicDomainOrigin,
      };
    }

    const workspaceFromSubdomain = isDefined(subdomain)
      ? ((await this.workspaceRepository.findOne({
          where: { subdomain },
          relations: ['workspaceSsoIdentityProviders'],
        })) ?? undefined)
      : undefined;

    return {
      workspace: workspaceFromSubdomain,
      isIsolatedOrigin: isPublicDomainOrigin,
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

  private getTwentyWorkspaceUrl(subdomain: string) {
    const url = this.domainServerConfigService.getFrontUrl();

    url.hostname = this.twentyConfigService.get('IS_MULTIWORKSPACE_ENABLED')
      ? `${subdomain}.${url.hostname}`
      : url.hostname;

    return url.toString();
  }

  getSubdomainFromWorkspaceFallbackOnDefaultSubdomain(
    workspace?: WorkspaceDomainConfig | null,
  ): WorkspaceDomainConfig {
    return {
      subdomain:
        workspace?.subdomain ??
        this.twentyConfigService.get('DEFAULT_SUBDOMAIN'),
    };
  }

  getWorkspaceUrls({ subdomain }: WorkspaceDomainConfig) {
    return {
      subdomainUrl: this.getTwentyWorkspaceUrl(subdomain),
    };
  }
}
