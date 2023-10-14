import { Module } from '@nestjs/common';
import {
  AcceptLanguageResolver,
  HeaderResolver,
  I18nModule,
  QueryResolver,
} from 'nestjs-i18n';
import * as path from 'path';

@Module({
  imports: [
    I18nModule.forRootAsync({
      useFactory: () => ({
        fallbackLanguage: 'jp',
        loaderOptions: {
          path: path.join(__dirname, '../../languages/'),
          watch: true,
        },
        // typesOutputPath: path.join(
        //   __dirname,
        //   '../../generated/i18n.generated.ts',
        // ),
      }),
      resolvers: [
        { use: QueryResolver, options: ['lang'] },
        AcceptLanguageResolver,
        new HeaderResolver(['x-lang']),
      ],
    }),
  ],
})
export class TranslateModule {}
