import {
  Body,
  Controller,
  HttpStatus,
  Post,
  Res,
  Patch,
  Param,
  ParseIntPipe,
  Delete,
  Get,
  Query,
} from '@nestjs/common';
import { Response } from 'express';
import { I18n, I18nContext } from 'nestjs-i18n';
import { ResponseData } from '@/utils/response-data';
import { UserService } from '@/modules/admin/user/services';
import { SaveDto } from '@/modules/admin/user/dto/save.dto';
import { UpdateDto } from '@/modules/admin/user/dto/update.dto';
import { ListQueryDto } from '@/modules/admin/user/dto/list-query.dto';
import { InjectQueue } from '@nestjs/bull';
import { Queue } from 'bull';

@Controller('admin/user')
export class UserController {
  constructor(
    private readonly service: UserService,
    @InjectQueue('email') private readonly queue: Queue,
  ) {}

  @Post('save')
  async save(
    @Body() payload: SaveDto,
    @Res() res: Response,
    @I18n() i18n: I18nContext,
  ) {
    const data = await this.service.save(payload);
    return res
      .status(HttpStatus.OK)
      .json(new ResponseData(data, HttpStatus.OK, ''));
  }

  @Patch('update/:id')
  async update(
    @Body() payload: UpdateDto,
    @Res() res: Response,
    @Param('id', ParseIntPipe) id: number,
  ) {
    const data = await this.service.update({ ...payload, id });
    return res
      .status(HttpStatus.OK)
      .json(new ResponseData(data, HttpStatus.OK, ''));
  }

  @Delete('delete/:id')
  async remove(@Param('id', ParseIntPipe) id: number, @Res() res: Response) {
    const data = await this.service.remove(id);
    return res
      .status(HttpStatus.OK)
      .json(new ResponseData(data, HttpStatus.OK, ''));
  }

  @Get('list')
  async list(@Res() res: Response, @Query() query: ListQueryDto) {
    await this.queue.add('send-email', { email: 'to' });
    const data = await this.service.list(query);
    return res
      .status(HttpStatus.OK)
      .json(new ResponseData(data, HttpStatus.OK, ''));
  }
}
