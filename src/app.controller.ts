import { Controller, Get, HttpStatus } from '@nestjs/common';
import { ResponseData } from '@/utils/response-data';

@Controller()
export class AppController {
  @Get()
  getHello(): ResponseData<any> {
    return new ResponseData(null, HttpStatus.OK, 'Hello World.');
  }
}
