import { Body, Controller, HttpStatus, Post, Res } from '@nestjs/common';
import { Response } from 'express';
import { I18n, I18nContext } from 'nestjs-i18n';
import { ResponseData } from '@/utils/response-data';
import { UserService } from '@/modules/admin/user/services';
import { SaveDto } from '@/modules/admin/user/dto/save.dto';

@Controller('admin/user')
export class UserController {
  constructor(private readonly service: UserService) {}

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
}
