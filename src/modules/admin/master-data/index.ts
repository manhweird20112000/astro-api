import { Module } from '@nestjs/common';
import { MasterDataService } from '@/modules/admin/master-data/services';
import { MasterDataController } from '@/modules/admin/master-data/controllers';
@Module({
  imports: [],
  controllers: [MasterDataController],
  providers: [MasterDataService],
})
export class MasterHttpModule {}
