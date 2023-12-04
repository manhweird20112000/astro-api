import { Module } from '@nestjs/common';
import { AuthController } from '@/modules/admin/auth/controllers';
import { AuthService } from '@/modules/admin/auth/services';
import { AdminModule } from '@/modules/admin/auth/module';
import { JwtAppModule } from '@/infra/jwt';
import { UserRepository } from '@/models/repository/user.repository';

@Module({
  imports: [AdminModule, JwtAppModule],
  controllers: [AuthController],
  providers: [AuthService, UserRepository],
})
export class AuthHttpModule {}
