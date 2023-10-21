import { IAdapterSecret } from '@/infra/secrets/adapter';
import { ConfigService } from '@nestjs/config';

export class SecretsService extends ConfigService implements IAdapterSecret {
  constructor() {
    super();
  }
  APP_NAME = this.get('APP_NAME');
  APP_PORT = this.get('APP_PORT');
  MYSQL_URI = `mysql://${this.get('DB_USER')}:${this.get(
    'DB_PASSWORD',
  )}@${this.get('DB_HOST')}:${this.get('DB_PORT')}/${this.get('DB_NAME')}`;

  JWT_SECRET = this.get('JWT_SECRET');
  TOKEN_EXPIRATION = this.get('TOKEN_EXPIRATION');
  REDIS_URL = this.get('REDIS_URL');
  LOG_LEVEL = this.get('LOG_LEVEL');
}
