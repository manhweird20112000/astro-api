import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SecretsService } from '@/infra/secrets/service';
import { IAdapterSecret } from '@/infra/secrets/adapter';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ['.env'],
    }),
  ],
  providers: [
    {
      provide: IAdapterSecret,
      useClass: SecretsService,
    },
  ],
  exports: [IAdapterSecret],
})
export class SecretsModule {}
