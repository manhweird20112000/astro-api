export abstract class IAdapterSecret {
  APP_NAME: string;
  APP_PORT: string;

  MYSQL_URI: string;

  JWT_SECRET: string;

  TOKEN_EXPIRATION: string;

  REDIS_URL: string;

  LOG_LEVEL: string;
}
