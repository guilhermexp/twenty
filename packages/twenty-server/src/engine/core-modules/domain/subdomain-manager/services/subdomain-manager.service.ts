import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import {
  capitalize,
  getSubdomainSlugFromDisplayName,
  isDefined,
} from 'twenty-shared/utils';
import { In, Repository } from 'typeorm';

import { type WorkspaceCreationDefaultsDTO } from 'src/engine/core-modules/domain/subdomain-manager/dtos/workspace-creation-defaults.dto';
import { generateRandomSubdomain } from 'src/engine/core-modules/domain/subdomain-manager/utils/generate-random-subdomain.util';
import { getSubdomainFromEmail } from 'src/engine/core-modules/domain/subdomain-manager/utils/get-subdomain-from-email.util';
import { isSubdomainValid } from 'src/engine/core-modules/domain/subdomain-manager/utils/is-subdomain-valid.util';
import { WorkspaceEntity } from 'src/engine/core-modules/workspace/workspace.entity';

const SUBDOMAIN_MAX_LENGTH = 30;
const MAX_NUMBERED_SUFFIX_ATTEMPTS = 50;
const MAX_RANDOM_FALLBACK_ATTEMPTS = 10;

@Injectable()
export class SubdomainManagerService {
  constructor(
    @InjectRepository(WorkspaceEntity)
    private readonly workspaceRepository: Repository<WorkspaceEntity>,
  ) {}

  async generateSubdomain({
    userEmail,
    workspaceDisplayName,
  }: {
    userEmail?: string;
    workspaceDisplayName?: string;
  }) {
    const extractedSubdomain =
      getSubdomainFromEmail(userEmail) ||
      getSubdomainSlugFromDisplayName(workspaceDisplayName);

    return this.findAvailableSubdomain(extractedSubdomain ?? '');
  }

  async getWorkspaceCreationDefaults(
    email?: string,
  ): Promise<WorkspaceCreationDefaultsDTO> {
    const subdomainBase = getSubdomainFromEmail(email);

    return {
      displayName: isDefined(subdomainBase) ? capitalize(subdomainBase) : '',
    };
  }

  private async findAvailableSubdomain(desired: string): Promise<string> {
    const derivedBase = isSubdomainValid(desired)
      ? desired
      : getSubdomainSlugFromDisplayName(desired);

    const base =
      isDefined(derivedBase) && isSubdomainValid(derivedBase)
        ? derivedBase
        : generateRandomSubdomain();

    const candidates = this.buildSubdomainCandidates(base);

    const [availableSubdomain] =
      await this.filterFreeToUseSubdomains(candidates);

    return availableSubdomain ?? generateRandomSubdomain();
  }

  private buildSubdomainCandidates(base: string): string[] {
    const numberedCandidates = Array.from(
      { length: MAX_NUMBERED_SUFFIX_ATTEMPTS - 1 },
      (_, index) => this.appendNumberedSuffix(base, index + 2),
    );

    const randomCandidates = Array.from(
      { length: MAX_RANDOM_FALLBACK_ATTEMPTS },
      () => generateRandomSubdomain(),
    );

    return [...new Set([base, ...numberedCandidates, ...randomCandidates])];
  }

  private async filterFreeToUseSubdomains(
    candidates: string[],
  ): Promise<string[]> {
    const validCandidates = candidates.filter(isSubdomainValid);

    if (validCandidates.length === 0) {
      return [];
    }

    const existingWorkspaces = await this.workspaceRepository.find({
      where: { subdomain: In(validCandidates) },
      withDeleted: true,
      select: { subdomain: true },
    });

    const takenSubdomains = new Set(
      existingWorkspaces.map((workspace) => workspace.subdomain),
    );

    return validCandidates.filter(
      (candidate) => !takenSubdomains.has(candidate),
    );
  }

  private appendNumberedSuffix(base: string, suffix: number): string {
    const suffixPart = `-${suffix}`;
    const maxBaseLength = SUBDOMAIN_MAX_LENGTH - suffixPart.length;
    const trimmedBase =
      base.length > maxBaseLength
        ? base.slice(0, maxBaseLength).replace(/-+$/g, '')
        : base;

    return `${trimmedBase}${suffixPart}`;
  }
}
