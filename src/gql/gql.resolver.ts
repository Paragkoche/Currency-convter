import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { GqlService } from './gql.service';
import { ConvertDto } from './dto/Input.dto';

@Resolver('api/gql')
export class GqlResolver {
  constructor(private readonly gqlService: GqlService) {}

  @Mutation('convert')
  async convert(@Args('convert_input') args: ConvertDto) {
    return await this.gqlService.fromTo(args.from, args.to, args.amount);
  }
}
