/* @license Enterprise */

import { registerEnumType } from '@nestjs/graphql';

export enum UsageUnit {
  TOKEN = 'TOKEN',
  INVOCATION = 'INVOCATION',
  MILLISECOND = 'MILLISECOND',
  REQUEST = 'REQUEST',
}

registerEnumType(UsageUnit, {
  name: 'UsageUnit',
});
