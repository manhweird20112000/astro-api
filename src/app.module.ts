import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { InfraModule } from '@/infra';
import { AdminModules } from '@/modules/admin';

@Module({
  imports: [InfraModule, AdminModules],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
