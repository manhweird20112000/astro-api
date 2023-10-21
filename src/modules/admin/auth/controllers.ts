import { Controller, Post } from '@nestjs/common';
import { AuthService } from '@/modules/admin/auth/services';

@Controller('admin/auth')
export class AuthController {
  constructor(private readonly service: AuthService) {}

  @Post('/login')
  async login() {
    return this.service.login();
  }
}
