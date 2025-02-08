import { Module } from '@nestjs/common';

import { RestModule } from './rest/rest.module';
import { GqlModule } from './gql/gql.module';
import { WebSocketModule } from './web-socket/web-socket.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    RestModule,
    GqlModule,
    WebSocketModule,
  ],
})
export class AppModule {}
