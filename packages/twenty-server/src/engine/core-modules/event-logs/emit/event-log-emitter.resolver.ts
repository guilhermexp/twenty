import { UseFilters, UseGuards, UsePipes } from '@nestjs/common';
import { Args, Mutation } from '@nestjs/graphql';

import { MetadataResolver } from 'src/engine/api/graphql/graphql-config/decorators/metadata-resolver.decorator';
import { EventLogEmitterExceptionFilter } from 'src/engine/core-modules/event-logs/emit/event-log-emitter-exception.filter';
import {
  EventLogEmitterException,
  EventLogEmitterExceptionCode,
} from 'src/engine/core-modules/event-logs/emit/event-log-emitter.exception';
import { CreateObjectEventInput } from 'src/engine/core-modules/event-logs/emit/dtos/create-object-event.input';
import { PreventNestToAutoLogGraphqlErrorsFilter } from 'src/engine/core-modules/graphql/filters/prevent-nest-to-auto-log-graphql-errors.filter';
import { ResolverValidationPipe } from 'src/engine/core-modules/graphql/pipes/resolver-validation.pipe';
import { UserEntity } from 'src/engine/core-modules/user/user.entity';
import { WorkspaceEntity } from 'src/engine/core-modules/workspace/workspace.entity';
import { AuthUser } from 'src/engine/decorators/auth/auth-user.decorator';
import { AuthWorkspace } from 'src/engine/decorators/auth/auth-workspace.decorator';
import { NoPermissionGuard } from 'src/engine/guards/no-permission.guard';
import { WorkspaceAuthGuard } from 'src/engine/guards/workspace-auth.guard';

import { Analytics } from './dtos/analytics.dto';
import { EventLogEmitterService } from './event-log-emitter.service';

@MetadataResolver(() => Analytics)
@UsePipes(ResolverValidationPipe)
@UseFilters(
  EventLogEmitterExceptionFilter,
  PreventNestToAutoLogGraphqlErrorsFilter,
)
export class EventLogEmitterResolver {
  constructor(
    private readonly eventLogEmitterService: EventLogEmitterService,
  ) {}

  @Mutation(() => Analytics)
  @UseGuards(WorkspaceAuthGuard, NoPermissionGuard)
  async createObjectEvent(
    @Args()
    createObjectEventInput: CreateObjectEventInput,
    @AuthWorkspace() workspace: WorkspaceEntity | undefined,
    @AuthUser({ allowUndefined: true }) user: UserEntity | undefined,
  ) {
    if (!workspace) {
      throw new EventLogEmitterException(
        'Missing workspace',
        EventLogEmitterExceptionCode.INVALID_INPUT,
      );
    }

    const eventLogContext = this.eventLogEmitterService.createContext({
      workspaceId: workspace.id,
      userId: user?.id,
    });

    return eventLogContext.createObjectEvent(createObjectEventInput.event, {
      ...createObjectEventInput.properties,
      recordId: createObjectEventInput.recordId,
      objectMetadataId: createObjectEventInput.objectMetadataId,
      isCustom: true,
    });
  }
}
