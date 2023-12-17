import { Process, Processor } from '@nestjs/bull';
import { Job } from 'bull';

@Processor('email')
export class EmailConsumer {
  @Process('send-email')
  handleSendEmail(job: Job) {
    console.log(job.data);
  }
}
