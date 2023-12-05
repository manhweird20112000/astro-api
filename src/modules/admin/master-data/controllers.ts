import {
  Controller,
  FileTypeValidator,
  HttpStatus,
  MaxFileSizeValidator,
  ParseFilePipe,
  Post,
  Res,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { ResponseData } from '@/utils/response-data';
import { Express, Response } from 'express';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('admin/master-data')
export class MasterDataController {
  constructor() {}

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
    console.log(file);
    return res
      .status(HttpStatus.OK)
      .json(new ResponseData([], HttpStatus.OK, ''));
  }
}
