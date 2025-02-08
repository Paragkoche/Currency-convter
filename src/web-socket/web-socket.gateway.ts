import {
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
} from '@nestjs/websockets';
import { WebSocketService } from './web-socket.service';
import { ConvertDto } from './dto/Input.dto';
import { ApiBody, ApiOperation, ApiTags } from '@nestjs/swagger';
@ApiTags('websocket')
@WebSocketGateway()
export class WebSocketGatewayClass {
  constructor(private readonly webSocketService: WebSocketService) {}

  @SubscribeMessage('convection')
  @ApiOperation({ summary: 'Convert currency via WebSocket' })
  @ApiBody({ type: ConvertDto, description: 'Payload for currency conversion' })
  convert(@MessageBody() body: ConvertDto) {
    return this.webSocketService.fromTo(body.from, body.to, body.amount);
  }
}
