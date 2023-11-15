import { Factory, Seeder } from 'typeorm-seeding';
import { Connection } from 'typeorm';
import { Role } from '@/models/entities/role';

export class RoleSeed implements Seeder {
  async run(factory: Factory, connection: Connection): Promise<void> {
    await connection.createQueryBuilder().delete().from(Role).execute();
    await connection.query('ALTER TABLE role AUTO_INCREMENT = 1;');
    await connection
      .createQueryBuilder()
      .createQueryBuilder()
      .insert()
      .into(Role)
      .values([{ name: 'Supper Admin' }, { name: 'Admin' }, { name: 'Normal' }])
      .execute();

    return Promise.resolve(undefined);
  }
}
