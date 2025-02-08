import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { RestService } from './rest.service';
import { ConvertDto } from './dto/Input.dto';

@Controller('api/rest')
export class RestController {
  constructor(private readonly restService: RestService) {}

  @Get('/:from/:to/:amount')
  @UsePipes(new ValidationPipe({ transform: true }))
  async convert(@Param() params: ConvertDto) {
    return await this.restService.fromTo(params.from, params.to, params.amount);
  }
  @Post('/convert')
  async convert_body(@Body() Body: ConvertDto) {
    return await this.restService.fromTo(Body.from, Body.to, Body.amount);
  }
}
