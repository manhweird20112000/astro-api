import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { InfraModule } from '@/infra';
import { AdminModules } from '@/modules/admin';
import { EntitiesModule } from '@/models/module';
import { MulterUtilModule } from '@/utils/uploads';
import { ThrottlerModule } from '@nestjs/throttler';
import { UserModules } from '@/modules/user';

@Module({
  imports: [
    ThrottlerModule.forRoot({
      throttlers: [
        {
          ttl: 60000,
          limit: 10,
        },
      ],
    }),
    MulterUtilModule,
    InfraModule,
    EntitiesModule,
    AdminModules,
    UserModules,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
