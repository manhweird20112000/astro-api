import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { jwtConfig } from '@/infra/jwt/config';

@Injectable()
export class JwtAppService extends JwtService {
  constructor() {
    super({
      secret: jwtConfig.jwtSecret,
      privateKey: jwtConfig.jwtSecret,
      signOptions: {
        expiresIn: jwtConfig.tokenExpiration,
      },
    });
  }
}
