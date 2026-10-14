import { Field, ObjectType } from '@nestjs/graphql';

import { IsOptional, IsString } from 'class-validator';
import GraphQLJSON from 'graphql-type-json';
import { type Manifest } from 'twenty-shared/application';

import { UUIDScalarType } from 'src/engine/api/graphql/workspace-schema-builder/graphql-types/scalars';
import { ApplicationRegistrationSourceType } from 'src/engine/core-modules/application/application-registration/enums/application-registration-source-type.enum';

@ObjectType('ApplicationRegistrationSummary')
export class ApplicationRegistrationSummaryDTO {
  @Field(() => UUIDScalarType)
  id: string;

  @IsOptional()
  @IsString()
  @Field({ nullable: true })
  latestAvailableVersion?: string;

  @Field(() => ApplicationRegistrationSourceType)
  sourceType: ApplicationRegistrationSourceType;

  @IsOptional()
  @IsString()
  @Field(() => String, { nullable: true })
  logoUrl?: string | null;

  @Field(() => String, { nullable: true })
  description?: string | null;

  @Field(() => String, { nullable: true })
  author?: string | null;

  @Field(() => String, { nullable: true })
  category?: string | null;

  @Field(() => String, { nullable: true })
  websiteUrl?: string | null;

  @Field(() => String, { nullable: true })
  aboutDescription?: string | null;

  @Field(() => String, { nullable: true })
  termsUrl?: string | null;

  @Field(() => String, { nullable: true })
  emailSupport?: string | null;

  @Field(() => String, { nullable: true })
  issueReportUrl?: string | null;

  @Field(() => [String])
  galleryImageUrls?: string[];

  @Field(() => GraphQLJSON, { nullable: true })
  manifest?: Manifest | null;
}
