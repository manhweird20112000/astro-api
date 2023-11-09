import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { initializeTransactionalContext } from 'typeorm-transactional';
import { I18nValidationExceptionFilter, I18nValidationPipe } from 'nestjs-i18n';
import { HttpStatus, Logger } from '@nestjs/common';
import { Helper } from '@/utils/helper';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { HttpLoggerInterceptor } from '@/utils/interceptors/http-logger.interceptor';
import { HttpExceptionFilter } from '@/utils/filters/http-exception.filter';
import { WINSTON_MODULE_NEST_PROVIDER } from 'nest-winston';

async function bootstrap() {
  initializeTransactionalContext();
  const app = await NestFactory.create(AppModule);
  const logger = new Logger();
  app.useLogger(app.get(WINSTON_MODULE_NEST_PROVIDER));
  app.useGlobalPipes(new I18nValidationPipe());
  app.useGlobalFilters(
    new HttpExceptionFilter(logger),
    new I18nValidationExceptionFilter({
      errorFormatter: (errors) => {
        return Helper.formatErrorsValidate(errors);
      },
      errorHttpStatusCode: HttpStatus.BAD_REQUEST,
    }),
  );

  app.useGlobalInterceptors(new HttpLoggerInterceptor());

  const config = new DocumentBuilder()
    .setTitle('API')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}
bootstrap();
