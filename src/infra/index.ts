import { Module } from '@nestjs/common';
import { TranslateModule } from '@/infra/i18n';
import { SecretsModule } from '@/infra/secrets';
import { MysqlModule } from '@/infra/database/mysql';
import { LoggerWinstonModule } from '@/infra/logger';
import { QueueModule } from '@/infra/queue';
import { RedisCacheModule } from '@/infra/cache/redis';
import { MulterModule } from '@nestjs/platform-express';
import { IAdapterSecret } from '@/infra/secrets/adapter';

@Module({
  imports: [
    SecretsModule,
    LoggerWinstonModule,
    TranslateModule,
    RedisCacheModule,
    MysqlModule,
    QueueModule,
    MulterModule.registerAsync({
      useFactory: ({ MAXSIZE_IMAGE }: IAdapterSecret) => {
        return {
          dest: './storage/images',
          storage: './storage/images',
          limits: {
            fileSize: Number(MAXSIZE_IMAGE),
          },
        };
      },
      imports: [SecretsModule],
      inject: [IAdapterSecret],
    }),
  ],
})
export class InfraModule {}
