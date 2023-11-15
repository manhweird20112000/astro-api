import { Module } from '@nestjs/common';
import { UserController } from '@/modules/admin/user/controllers';
import { UserService } from '@/modules/admin/user/services';
import { UserRepository } from '@/models/repository/user.repository';
import { RoleRepository } from '@/models/repository/role.repository';

@Module({
  controllers: [UserController],
  providers: [UserService, UserRepository, RoleRepository],
})
export class UserHttpModule {}
