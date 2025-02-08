import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { GqlService } from './gql.service';
import { ConvertDto } from './dto/Input.dto';
import { ObjectType, Field, Float } from '@nestjs/graphql';

@ObjectType()
export class ConvertResult {
  @Field(() => Float)
  conversion: number;

  @Field()
  from: string;

  @Field()
  to: string;
}

@Resolver('api/gql')
export class GqlResolver {
  constructor(private readonly gqlService: GqlService) {}
  @Query(() => String)
  healthCheck(): string {
    return 'GraphQL API is running!';
  }

  @Mutation(() => ConvertResult)
  async convert(@Args('convert_input') args: ConvertDto) {
    return await this.gqlService.fromTo(args.from, args.to, args.amount);
  }
}
