import { Test, TestingModule } from '@nestjs/testing';
import { WebSocketGatewayClass } from './web-socket.gateway';
import { WebSocketService } from './web-socket.service';

describe('WebSocketGateway', () => {
  let gateway: WebSocketGatewayClass;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WebSocketGatewayClass, WebSocketService],
    }).compile();

    gateway = module.get<WebSocketGatewayClass>(WebSocketGatewayClass);
  });

  it('should be defined', () => {
    expect(gateway).toBeDefined();
  });
});
