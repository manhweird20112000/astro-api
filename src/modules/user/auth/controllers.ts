import {
  Controller,
  Get,
  HttpStatus,
  Req,
  Res,
  UseGuards,
} from '@nestjs/common';
import { GoogleOauthGuard } from '@/infra/jwt/guards/google-oauth';
import { I18n, I18nContext } from 'nestjs-i18n';
import { ResponseData } from '@/utils/response-data';
import { Request, Response } from 'express';
import { AuthUserService } from '@/modules/user/auth/services';
import { FacebookOauthGuard } from '@/infra/jwt/guards/facebook-oauth';

@Controller('api/auth')
export class AuthUserController {
  constructor(private readonly service: AuthUserService) {}
  @Get('google')
  @UseGuards(GoogleOauthGuard)
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  async google() {}

  @Get('google/callback')
  @UseGuards(GoogleOauthGuard)
  async authCallbackGoogle(
    @Res() res: Response,
    @Req() req: Request,
    @I18n() i18n: I18nContext,
  ) {
    const data = await this.service.signInGoogle(req['user']);
    return res
      .status(HttpStatus.OK)
      .json(
        new ResponseData(data, HttpStatus.OK, i18n.t('common.auth.success')),
      );
  }

  @Get('facebook')
  @UseGuards(FacebookOauthGuard)
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  async facebook() {}

  @Get('facebook/callback')
  @UseGuards(FacebookOauthGuard)
  async authCallbackFacebook(
    @Res() res: Response,
    @Req() req: Request,
    @I18n() i18n: I18nContext,
  ) {
    const data = await this.service.signInFacebook(req['user']);
    return res
      .status(HttpStatus.OK)
      .json(
        new ResponseData(data, HttpStatus.OK, i18n.t('common.auth.success')),
      );
  }
}
