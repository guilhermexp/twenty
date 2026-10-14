/* @license Enterprise */

import { Field, Float, ObjectType } from '@nestjs/graphql';

import { UsageUnit } from 'src/engine/core-modules/usage/enums/usage-unit.enum';

@ObjectType('UsageBreakdownItem')
export class UsageBreakdownItemDTO {
  @Field(() => String)
  key: string;

  @Field(() => String, { nullable: true })
  label?: string;

  @Field(() => UsageUnit)
  unit: UsageUnit;

  @Field(() => Float)
  quantity: number;
}
