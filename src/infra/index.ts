import { Module } from '@nestjs/common';
import { TranslateModule } from '@/infra/i18n';
import { SecretsModule } from '@/infra/secrets';
import { MysqlModule } from '@/infra/database/mysql';
import { LoggerWinstonModule } from '@/infra/logger';
import { QueueModule } from '@/infra/queue';
import { RedisCacheModule } from '@/infra/cache/redis';
import { ScheduleModule } from '@nestjs/schedule';

@Module({
  imports: [
    SecretsModule,
    LoggerWinstonModule,
    TranslateModule,
    RedisCacheModule,
    MysqlModule,
    QueueModule,
    ScheduleModule.forRoot(),
  ],
})
export class InfraModule {}
