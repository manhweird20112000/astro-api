import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { InfraModule } from '@/infra';

@Module({
  imports: [InfraModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
