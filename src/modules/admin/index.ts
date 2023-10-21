import { Module } from '@nestjs/common';
import { AuthHttpModule } from '@/modules/admin/auth';

@Module({
  imports: [AuthHttpModule],
})
export class AdminModules {}
