import { Module } from '@nestjs/common';
import { WebSocketService } from './web-socket.service';
import { WebSocketGatewayClass } from './web-socket.gateway';

@Module({
  providers: [WebSocketGatewayClass, WebSocketService],
})
export class WebSocketModule {}
