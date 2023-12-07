import {
  Controller,
  FileTypeValidator,
  Get,
  HttpStatus,
  MaxFileSizeValidator,
  Param,
  ParseFilePipe,
  Post,
  Res,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { ResponseData } from '@/utils/response-data';
import { Express, Response } from 'express';
import { FileInterceptor } from '@nestjs/platform-express';
import { MasterDataService } from '@/modules/admin/master-data/services';

@Controller('admin/master-data')
export class MasterDataController {
  constructor(private readonly service: MasterDataService) {}

  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
  async upload(
    @Res() res: Response,
    @UploadedFile(
      new ParseFilePipe({
        validators: [
          new FileTypeValidator({ fileType: /(jpg|jpeg|png|webp)$/ }),
        ],
      }),
    )
    file: Express.Multer.File,
  ) {
    const data = await this.service.upload(file);
    return res
      .status(HttpStatus.OK)
      .json(new ResponseData([], HttpStatus.OK, ''));
  }

  @Get('image/:filename')
  async preview(@Param('filename') filename: string, @Res() res: Response) {
    const data = await this.service.preview(filename);
    return res.status(HttpStatus.OK).sendFile(data);
  }
}
