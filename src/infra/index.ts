import { Module } from '@nestjs/common';
import { TranslateModule } from '@/infra/i18n';
import { SecretsModule } from '@/infra/secrets';
import { MysqlModule } from '@/infra/database/mysql';
import { JwtAppModule } from '@/infra/jwt';

@Module({
  imports: [SecretsModule, TranslateModule, MysqlModule],
})
export class InfraModule {}
