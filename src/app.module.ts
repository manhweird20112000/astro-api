import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { InfraModule } from '@/infra';
import { AdminModules } from '@/modules/admin';
import { EntitiesModule } from '@/models/module';

@Module({
  imports: [InfraModule, EntitiesModule, AdminModules],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
