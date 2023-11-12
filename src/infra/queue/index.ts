import { Module } from '@nestjs/common';
import { BullModule } from '@nestjs/bull';
import { IAdapterSecret } from '@/infra/secrets/adapter';
import { SecretsModule } from '@/infra/secrets';

@Module({
  imports: [
    BullModule.forRootAsync({
      useFactory: ({ REDIS_PORT, REDIS_HOST }: IAdapterSecret) => {
        return {
          redis: {
            host: REDIS_HOST,
            port: +REDIS_PORT,
            connectTimeout: 5000,
          },
        };
      },
      imports: [SecretsModule],
      inject: [IAdapterSecret],
    }),
  ],
})
export class QueueModule {}
