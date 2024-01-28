import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { IAdapterSecret } from '@/infra/secrets/adapter';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { SecretsModule } from '@/infra/secrets';
import { JwtStrategy } from '@/infra/jwt/strategy';
import { JwtAppService } from '@/infra/jwt/strategies/service';

@Module({
  imports: [
    PassportModule.register({
      defaultStrategy: 'jwt',
      property: 'user',
      session: false,
    }),
    JwtModule.registerAsync({
      useFactory: ({ JWT_SECRET, TOKEN_EXPIRATION }: IAdapterSecret) => {
        return {
          secret: JWT_SECRET,
          privateKey: JWT_SECRET,
          signOptions: {
            expiresIn: TOKEN_EXPIRATION,
          },
        };
      },
      imports: [SecretsModule],
      inject: [IAdapterSecret],
    }),
  ],
  providers: [JwtStrategy, JwtService, JwtAppService],
  exports: [JwtAppService],
})
export class JwtAppModule {}
