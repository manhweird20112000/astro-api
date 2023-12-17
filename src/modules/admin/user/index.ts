import { Module } from '@nestjs/common';
import { UserController } from '@/modules/admin/user/controllers';
import { UserService } from '@/modules/admin/user/services';
import { UserRepository } from '@/models/repository/user.repository';
import { RoleRepository } from '@/models/repository/role.repository';
import { IsUniquePipe } from '@/modules/admin/user/pipes/is-unique.pipe';
import { BullModule } from '@nestjs/bull';
import { EmailConsumer } from '@/modules/admin/user/consumers';
// import { UserSchedules } from '@/modules/admin/user/schedules';

@Module({
  imports: [BullModule.registerQueue({ name: 'email' })],
  controllers: [UserController],
  providers: [
    UserService,
    UserRepository,
    RoleRepository,
    IsUniquePipe,
    EmailConsumer,
    // UserSchedules,
  ],
})
export class UserHttpModule {}
