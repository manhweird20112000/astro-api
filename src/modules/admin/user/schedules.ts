import { Injectable } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';

@Injectable()
export class UserSchedules {
  @Cron(CronExpression.EVERY_30_SECONDS)
  handleCron() {
    console.log('task schedule');
  }
}
