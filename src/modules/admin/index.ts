import { Module } from '@nestjs/common';
import { AuthHttpModule } from '@/modules/admin/auth';
import { UserHttpModule } from '@/modules/admin/user';

@Module({
  imports: [AuthHttpModule, UserHttpModule],
})
export class AdminModules {}
