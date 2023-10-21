import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { IAdapterSecret } from '@/infra/secrets/adapter';
import { addTransactionalDataSource } from 'typeorm-transactional';
import { DataSource } from 'typeorm';
import { SecretsModule } from '@/infra/secrets';
import { MySQLService } from '@/infra/database/mysql/service';
// import { entities } from '@/models/entities';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: ({ MYSQL_URI }: IAdapterSecret) => {
        const connection = new MySQLService().getConnection({ url: MYSQL_URI });
        return {
          ...connection,
          timeout: 5000,
          connectionTimeout: 5000,
          autoLoadEntities: true,
          synchronize: true,
          migrationsTableName: 'migration_collection',
          entities: [],
        };
      },
      async dataSourceFactory(options) {
        return addTransactionalDataSource(new DataSource(options));
      },
      imports: [SecretsModule],
      inject: [IAdapterSecret],
    }),
  ],
})
export class MysqlModule {}
