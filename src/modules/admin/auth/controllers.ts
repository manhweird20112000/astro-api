import { Body, Controller, Post, Req, Res } from '@nestjs/common';
import { AuthService } from '@/modules/admin/auth/services';
import { Response, Request } from 'express';
import { LoginDto } from '@/modules/admin/auth/dto/login.dto';

@Controller('admin/auth')
export class AuthController {
  constructor(private readonly service: AuthService) {}

  @Post('/login')
  async login(
    @Body() payload: LoginDto,
    @Res() res: Response,
    @Req() req: Request,
  ) {
    this.service.login();
  }
}
