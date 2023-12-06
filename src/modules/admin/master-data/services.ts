import { HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';
import { ResponseData } from '@/utils/response-data';

@Injectable()
export class MasterDataService {
  async upload() {}

  async preview(filename: string) {
    const rootFolder = __dirname.slice(0, __dirname.lastIndexOf('dist'));
    const pathSource = path.join(
      rootFolder,
      'src',
      'storage',
      'uploads',
      filename,
    );
    const isExist = fs.existsSync(pathSource);

    if (!isExist) {
      throw new NotFoundException(
        new ResponseData(null, HttpStatus.NOT_FOUND, ''),
      );
    }
    return pathSource;
  }
}
