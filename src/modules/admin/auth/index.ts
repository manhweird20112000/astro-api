import { Module } from '@nestjs/common';
import { AuthController } from '@/modules/admin/auth/controllers';
import { AuthService } from '@/modules/admin/auth/services';
import { AdminModule } from '@/modules/admin/auth/module';
import { AuthRepository } from '@/modules/admin/auth/repository';

@Module({
  imports: [AdminModule],
  controllers: [AuthController],
  providers: [AuthService, AuthRepository],
})
export class AuthHttpModule {}
