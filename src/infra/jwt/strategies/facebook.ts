import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-facebook';
import { IAdapterSecret } from '@/infra/secrets/adapter';

@Injectable()
export class FacebookStrategy extends PassportStrategy(Strategy, 'facebook') {
  constructor(private readonly configService: IAdapterSecret) {
    super({
      clientID: 356823663956871,
      clientSecret: 'e005a9e6e22a235a91a9edb5b9f6dd2e',
      callbackURL: `${configService.APP_DOMAIN}/api/auth/facebook/callback`,
      scope: ['email', 'user_friends'],
      profileFields: ['emails', 'displayName', 'gender', 'birthday'],
    });
  }

  async validate(_accessToken, _refreshToken, profile, cb) {
    const user = {
      _accessToken,
      _refreshToken,
      fullname: profile.displayName,
      email: profile.emails[0].value,
      avatar: ` https://graph.facebook.com/${profile.id}/picture?type=large`,
    };
    cb(null, user);
  }
}
