import { IAdapterRepository } from '@/infra/repository/adapter';
import {
  BaseEntity,
  DeleteResult,
  FindOneOptions,
  FindOptionsWhere,
  Repository,
  UpdateResult,
} from 'typeorm';
import { EntityId } from 'typeorm/repository/EntityId';

export class RepositoryService<T extends BaseEntity>
  implements Omit<IAdapterRepository<T>, 'updateMany'>
{
  constructor(readonly repository: Repository<T>) {}

  async findById(id: EntityId): Promise<T> {
    return await this.repository.findOne({
      where: { id },
    } as unknown as FindOneOptions<T>);
  }

  async findByOne<TQuery = FindOneOptions<T>>(query: TQuery): Promise<T> {
    return await this.repository.findOne({
      where: query,
    } as FindOneOptions<T>);
  }

  async find<TQuery = FindOptionsWhere<T> | FindOptionsWhere<T>[]>(
    query: TQuery,
  ): Promise<T[]> {
    return this.repository.findBy({ ...query } as
      | FindOptionsWhere<T>
      | FindOptionsWhere<T>[]);
  }

  async updateOne<TQuery = FindOptionsWhere<T>, TOptions = object>(
    query: TQuery,
    payload: TOptions,
  ): Promise<UpdateResult> {
    return this.repository.update(
      query as FindOptionsWhere<T>,
      payload as object,
    );
  }

  async remove<TQuery = FindOptionsWhere<T> | number | number[]>(
    query: TQuery,
  ): Promise<DeleteResult> {
    return this.repository.softDelete(query as FindOptionsWhere<T>);
  }
  async store(data: any): Promise<T> {
    return this.repository.save(data);
  }
}
