import { LoginDto } from '@/modules/admin/auth/dto/login.dto';
import {
  HttpStatus,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtAppService } from '@/infra/jwt/strategies/service';
import * as bcrypt from 'bcrypt';
import { ResponseData } from '@/utils/response-data';
import { User } from '@/models/entities/user';
import { UserRepository } from '@/models/repository/user.repository';

@Injectable()
export class AuthService {
  constructor(
    private repository: UserRepository,
    private jwtService: JwtAppService,
  ) {}
  async login(payload: LoginDto) {
    const { email, password } = payload;
    const user = await this.repository.findOneRelations({
      where: { email },
      relations: ['role'],
    });
    if (user) {
      const isVerifyPassword = bcrypt.compareSync(password, user.password);
      if (isVerifyPassword) {
        const accessToken = this.jwtService.sign({
          id: user.id,
          role: user.role['id'],
        });
        return { accessToken };
      } else {
        throw new UnauthorizedException();
      }
    } else {
      throw new NotFoundException();
    }
  }

  async me(id: number): Promise<User> {
    const user: User = await this.repository.findById(id);

    if (!user) {
      throw new NotFoundException(
        new ResponseData(null, HttpStatus.NOT_FOUND, ''),
      );
    }
    user.password = null;
    return user;
  }
}
