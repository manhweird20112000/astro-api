import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy, VerifyCallback } from 'passport-google-oauth2';
import { IAdapterSecret } from '@/infra/secrets/adapter';

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy, 'google') {
  constructor(private readonly configService: IAdapterSecret) {
    super({
      clientID: configService.GOOGLE_AUTH_CLIENT_ID,
      clientSecret: configService.GOOGLE_AUTH_CLIENT_SECRET,
      callbackURL: `${configService.APP_DOMAIN}/api/auth/google/callback`,
      scope: ['profile', 'email'],
    });
  }

  async validate(
    _accessToken: string,
    _refreshToken: string,
    profile: any,
    done: VerifyCallback,
  ): Promise<any> {
    const user = {
      accessToken: _accessToken,
      refreshToken: _refreshToken,
      fullname: profile.name.givenName + ' ' + profile.name.familyName,
      email: profile.email,
      avatar: profile.picture,
    };
    done(null, user);
  }
}
