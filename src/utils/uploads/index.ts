import { Global, Module } from '@nestjs/common';
import { MulterModule } from '@nestjs/platform-express';
import { IAdapterSecret } from '@/infra/secrets/adapter';
import { diskStorage } from 'multer';
import e from 'express';
import { extname } from 'path';
import { SecretsModule } from '@/infra/secrets';

@Global()
@Module({
  imports: [
    MulterModule.registerAsync({
      useFactory: ({ MAXSIZE_IMAGE }: IAdapterSecret) => {
        return {
          dest: './src/storage/uploads/',
          storage: diskStorage({
            destination: './src/storage/uploads/',
            filename(
              req: e.Request,
              file: Express.Multer.File,
              callback: (error: Error | null, filename: string) => void,
            ) {
              const randomName = Array(32)
                .fill(null)
                .map(() => Math.round(Math.random() * 16).toString(16))
                .join('');
              callback(null, `${randomName}${extname(file.originalname)}`);
            },
          }),
          fileFilter(
            req: any,
            file: {
              fieldname: string;
              originalname: string;
              encoding: string;
              mimetype: string;
              size: number;
              destination: string;
              filename: string;
              path: string;
              buffer: Buffer;
            },
            callback: (error: Error | null, acceptFile: boolean) => void,
          ) {
            const pattern = /(jpg|jpeg|png|webp|csv)$/;
            callback(null, pattern.test(file.mimetype));
          },
          limits: {
            fileSize: Number(MAXSIZE_IMAGE),
          },
        };
      },
      imports: [SecretsModule],
      inject: [IAdapterSecret],
    }),
  ],
  exports: [MulterModule],
})
export class MulterUtilModule {}
