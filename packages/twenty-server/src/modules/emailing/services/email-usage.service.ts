import { Injectable } from '@nestjs/common';

import { UsageOperationType } from 'src/engine/core-modules/usage/enums/usage-operation-type.enum';
import { UsageResourceType } from 'src/engine/core-modules/usage/enums/usage-resource-type.enum';
import { UsageUnit } from 'src/engine/core-modules/usage/enums/usage-unit.enum';
import { UsageRecorderService } from 'src/engine/core-modules/usage/services/usage-recorder.service';

@Injectable()
export class EmailUsageService {
  constructor(private readonly usageRecorderService: UsageRecorderService) {}

  async recordSentEmails({
    workspaceId,
    sentEmailCount,
    userWorkspaceId,
  }: {
    workspaceId: string;
    sentEmailCount: number;
    userWorkspaceId?: string | null;
  }): Promise<void> {
    if (sentEmailCount <= 0) {
      return;
    }

    await this.usageRecorderService.record(workspaceId, [
      {
        resourceType: UsageResourceType.EMAIL,
        operationType: UsageOperationType.EMAIL_SEND,
        quantity: sentEmailCount,
        unit: UsageUnit.INVOCATION,
        spenders: { userWorkspaceId },
      },
    ]);
  }
}
