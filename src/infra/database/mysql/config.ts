import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { config } from 'dotenv';
import { ConfigService } from '@nestjs/config';
// import { entities } from '@/models/entities';

config();

const configService = new ConfigService();
const dataSource = new DataSource({
  type: 'mysql',
  host: configService.get('DB_HOST'),
  port: configService.get('DB_PORT'),
  username: configService.get('DB_USER'),
  password: configService.get('DB_PASSWORD'),
  database: configService.get('DB_NAME'),
  migrationsTableName: 'migration_table',
  migrations: ['src/infra/database/mysql/migrations/*.ts'],
  // entities: entities,
});

dataSource.initialize();
export default dataSource;
