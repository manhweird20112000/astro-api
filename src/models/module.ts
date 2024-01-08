import { Global, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { entities, schemas } from '@/models/index';
import { MongooseModule } from '@nestjs/mongoose';

@Global()
@Module({
  imports: [
    TypeOrmModule.forFeature(entities),
    MongooseModule.forFeature(schemas),
  ],
  exports: [TypeOrmModule],
})
export class EntitiesModule {}
