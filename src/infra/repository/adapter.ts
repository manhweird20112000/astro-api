import { EntityId } from 'typeorm/repository/EntityId';
import {
  DeleteResult,
  FindOneOptions,
  FindOptionsWhere,
  UpdateResult,
} from 'typeorm';

export abstract class IAdapterRepository<T> {
  abstract findById(id: EntityId): Promise<T>;
  abstract store(data: any): Promise<T>;
  abstract find<TQuery = FindOptionsWhere<T> | FindOptionsWhere<T>[]>(
    query: TQuery,
  ): Promise<T[]>;
  abstract findByOne<TQuery = FindOneOptions<T>>(query: TQuery): Promise<T>;
  abstract updateOne<TQuery = FindOptionsWhere<T>, TOptions = object>(
    query: TQuery,
    payload: TOptions,
  ): Promise<UpdateResult>;
  abstract remove<TQuery = FindOptionsWhere<T> | number | number[]>(
    query: TQuery,
  ): Promise<DeleteResult>;
}
