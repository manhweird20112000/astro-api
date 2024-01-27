import { Injectable } from '@nestjs/common';
import { UserRepository } from '@/models/repository/user.repository';
import { EAuthType, ESocialType, Status } from '@/constants';
import { User } from '@/models/entities/user';
import { JwtAppService } from '@/infra/jwt/strategies/service';
import { Transactional } from 'typeorm-transactional';

@Injectable()
export class AuthUserService {
  constructor(
    private readonly repository: UserRepository,
    private readonly jwtService: JwtAppService,
  ) {}

  async signInGoogle(data: any) {
    return this.signIn(data, ESocialType.google);
  }

  async signInFacebook(data) {
    return this.signIn(data, ESocialType.facebook);
  }

  @Transactional()
  async signIn(data: any, socialType: ESocialType) {
    const { email, fullname, avatar } = data;
    const exist = await this.repository.findByOne({ email });
    if (!exist) {
      const payload = {
        email,
        fullname,
        avatar,
        status: Status.active,
        social_type: socialType,
        is_oauth: EAuthType.oauth,
        username: email.split('@')[0],
      };
      const user: User = await this.repository.store(payload);

      const accessToken = await this.jwtService.signAsync({
        ...payload,
        id: user.id,
      });

      return { accessToken };
    }

    const accessToken = await this.jwtService.signAsync({
      id: exist.id,
      email: exist.email,
      fullname: exist.fullname,
      avatar: exist.avatar,
      is_oauth: exist.is_oauth,
    });

    return { accessToken };
  }
}
