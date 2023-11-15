import { AuthRepository } from '@/modules/admin/auth/repository';
import { LoginDto } from '@/modules/admin/auth/dto/login.dto';
import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtAppService } from '@/infra/jwt/service';
import bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private repository: AuthRepository,
    private jwtService: JwtAppService,
  ) {}
  async login(payload: LoginDto) {
    const { email, password } = payload;
    const user = await this.repository.findByOne({ email });
    if (user) {
      const isVerifyPassword = user.password === password;
      if (isVerifyPassword) {
        const accessToken = this.jwtService.sign({ id: user.id });
        return { accessToken };
      } else {
        throw new UnauthorizedException();
      }
    } else {
      throw new NotFoundException();
    }
  }
}
