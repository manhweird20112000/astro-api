import { Factory, Seeder } from 'typeorm-seeding';
import { Connection } from 'typeorm';
import { User } from '../../models/entities/user';

export class AdminCreatedSeed implements Seeder {
  async run(factory: Factory, connection: Connection): Promise<void> {
    await factory(User)().createMany(100);
    return Promise.resolve(undefined);
  }
}
