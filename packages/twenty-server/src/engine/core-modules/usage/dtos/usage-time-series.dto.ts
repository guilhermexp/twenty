/* @license Enterprise */

import { Field, Float, ObjectType } from '@nestjs/graphql';

import { UsageUnit } from 'src/engine/core-modules/usage/enums/usage-unit.enum';

@ObjectType('UsageTimeSeries')
export class UsageTimeSeriesDTO {
  @Field(() => String)
  date: string;

  @Field(() => UsageUnit)
  unit: UsageUnit;

  @Field(() => Float)
  quantity: number;
}
