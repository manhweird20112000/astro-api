import { Module } from '@nestjs/common';
import { AuthUserService } from '@/modules/user/auth/services';
import { AuthUserController } from '@/modules/user/auth/controllers';
import { GoogleStrategy } from '@/infra/jwt/strategies/google';
import { SecretsModule } from '@/infra/secrets';
import { UserRepository } from '@/models/repository/user.repository';
import { JwtAppService } from '@/infra/jwt/strategies/service';
import { FacebookStrategy } from '@/infra/jwt/strategies/facebook';

@Module({
  imports: [SecretsModule],
  providers: [
    AuthUserService,
    GoogleStrategy,
    UserRepository,
    JwtAppService,
    FacebookStrategy,
  ],
  controllers: [AuthUserController],
})
export class AuthUserHttpModule {}
