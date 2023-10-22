import { Module } from '@nestjs/common';
import { AuthController } from '@/modules/admin/auth/controllers';
import { AuthService } from '@/modules/admin/auth/services';
import { AdminModule } from '@/modules/admin/auth/module';
import { AuthRepository } from '@/modules/admin/auth/repository';
import { JwtAppModule } from '@/infra/jwt';

@Module({
  imports: [AdminModule, JwtAppModule],
  controllers: [AuthController],
  providers: [AuthService, AuthRepository],
  exports: [AuthRepository],
})
export class AuthHttpModule {}
