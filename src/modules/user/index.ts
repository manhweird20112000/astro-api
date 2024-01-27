import { Module } from '@nestjs/common';
import { AuthUserHttpModule } from '@/modules/user/auth';

@Module({
  imports: [AuthUserHttpModule],
})
export class UserModules {}
