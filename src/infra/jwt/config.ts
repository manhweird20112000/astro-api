import { ConfigService } from '@nestjs/config';

const configService = new ConfigService();
export const jwtConfig = {
  jwtSecret: configService.get('JWT_SECRET'),
  tokenExpiration: configService.get('TOKEN_EXPIRATION'),
};
