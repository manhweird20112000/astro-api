export abstract class IAdapterSecret {
  APP_NAME: string;
  APP_PORT: string;

  MYSQL_URI: string;

  JWT_SECRET: string;

  TOKEN_EXPIRATION: string;

  REDIS_PORT: string;

  REDIS_HOST: string;

  LOG_LEVEL: string;

  MAXSIZE_IMAGE: string;
}
