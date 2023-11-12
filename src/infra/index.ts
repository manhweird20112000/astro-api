import { Module } from '@nestjs/common';
import { TranslateModule } from '@/infra/i18n';
import { SecretsModule } from '@/infra/secrets';
import { MysqlModule } from '@/infra/database/mysql';
import { LoggerWinstonModule } from '@/infra/logger';
import { QueueModule } from '@/infra/queue';

@Module({
  imports: [
    SecretsModule,
    LoggerWinstonModule,
    TranslateModule,
    MysqlModule,
    QueueModule,
  ],
})
export class InfraModule {}
