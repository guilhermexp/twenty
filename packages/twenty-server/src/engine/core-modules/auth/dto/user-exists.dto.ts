import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType('CheckUserExist')
export class CheckUserExistDTO {
  @Field(() => Boolean)
  exists: boolean;

  @Field(() => Boolean)
  isEmailVerified: boolean;
}
