import { ISendMailOptions, MailerService } from '@nestjs-modules/mailer';
import { IMailAdapter } from '@/infra/mail/adapter';
import { Injectable } from '@nestjs/common';

@Injectable()
export class MailService implements IMailAdapter {
  constructor(private readonly service: MailerService) {}

  async sendTo(options: ISendMailOptions) {
    return await this.service.sendMail(options);
  }
}
