import { Module } from '@nestjs/common';
import { MailerModule } from '@nestjs-modules/mailer';
import { PugAdapter } from '@nestjs-modules/mailer/dist/adapters/pug.adapter';
import { IAdapterSecret } from '@/infra/secrets/adapter';
import { SecretsModule } from '@/infra/secrets';
import { MailService } from '@/infra/mail/service';
import * as path from "path";

@Module({
  imports: [
    MailerModule.forRootAsync({
      inject: [IAdapterSecret],
      imports: [SecretsModule],
      useFactory: ({
        MAIL_TLS,
        MAIL_PORT,
        MAIL_PASSWORD,
        MAIL_USER,
        MAIL_SSL,
        MAIL_HOST,
      }: IAdapterSecret) => {
        return {
          transport: {
            host: MAIL_HOST,
            port: MAIL_PORT,
            ssl: MAIL_SSL,
            tls: MAIL_TLS,
            auth: {
              user: MAIL_USER,
              pass: MAIL_PASSWORD,
            },
          },
          defaults: {
            from: '',
          },
          template: {
            dir: path.join(__dirname.replace('dist', 'src'), 'templates'),
            adapter: new PugAdapter(),
            options: {
              strict: true,
            },
          },
        };
      },
    }),
  ],
  providers: [MailService],
  exports: [MailService],
})
export class MailModule {}
