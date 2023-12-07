import { HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';
import { ResponseData } from '@/utils/response-data';
import { Express } from 'express';

@Injectable()
export class MasterDataService {
  async upload(file: Express.Multer.File) {
    const rootFolder = __dirname.slice(0, __dirname.lastIndexOf('dist'));
    const pathSource = path.join(rootFolder, file.path);
    if (fs.existsSync(pathSource)) {
    }
  }

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
