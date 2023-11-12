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
  LOG_LEVEL = this.get('LOG_LEVEL');
  REDIS_HOST = this.get('REDIS_HOST');
  REDIS_PORT = this.get('REDIS_PORT');
}
