import { Module } from '@nestjs/common';
import { TranslateModule } from '@/infra/i18n';

@Module({
  imports: [TranslateModule],
})
export class InfraModule {}
