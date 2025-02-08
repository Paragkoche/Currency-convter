import { InputType, Field, Float } from '@nestjs/graphql';

@InputType()
export class ConvertDto {
  @Field()
  from: string;

  @Field()
  to: string;

  @Field(() => Float)
  amount: number;
}
