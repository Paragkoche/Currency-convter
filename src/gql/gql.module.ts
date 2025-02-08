import { Module } from '@nestjs/common';
import { GqlService } from './gql.service';
import { GqlResolver } from './gql.resolver';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver } from '@nestjs/apollo';

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: true,
      driver: ApolloDriver, // or specify a path e.g., 'schema.gql'
    }),
  ],
  providers: [GqlResolver, GqlService],
})
export class GqlModule {}
