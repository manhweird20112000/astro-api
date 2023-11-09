import {
  Body,
  Controller,
  HttpStatus,
  Inject,
  Logger,
  Post,
  Req,
  Res,
} from '@nestjs/common';
import { AuthService } from '@/modules/admin/auth/services';
import { Response, Request } from 'express';
import { LoginDto } from '@/modules/admin/auth/dto/login.dto';
import { ResponseData } from '@/utils/response-data';
import { I18n, I18nContext } from 'nestjs-i18n';
import { WINSTON_MODULE_NEST_PROVIDER } from 'nest-winston';

@Controller('admin/auth')
export class AuthController {
  constructor(
    private readonly service: AuthService,
    @Inject(WINSTON_MODULE_NEST_PROVIDER) private readonly logger: Logger,
  ) {}

  @Post('/login')
  async login(
    @Body() payload: LoginDto,
    @Res() res: Response,
    @Req() req: Request,
    @I18n() i18n: I18nContext,
  ) {
    this.logger.error('skjvnfkgbjkg');
    const data = await this.service.login(payload);

    return res
      .status(HttpStatus.OK)
      .json(
        new ResponseData(data, HttpStatus.OK, i18n.t('common.auth.success')),
      );
  }
}
