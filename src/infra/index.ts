import { Module } from '@nestjs/common';
import { TranslateModule } from '@/infra/i18n';
import { SecretsModule } from '@/infra/secrets';
import { MysqlModule } from '@/infra/database/mysql';
import { JwtAppModule } from '@/infra/jwt';
import { LoggerWinstonModule } from '@/infra/logger';

@Module({
  imports: [SecretsModule, LoggerWinstonModule, TranslateModule, MysqlModule],
})
export class InfraModule {}
