import { RepositoryService } from '@/infra/repository/service';
import { User } from '@/models/entities/user';
import { InjectRepository } from '@nestjs/typeorm';
import { FindOneOptions, Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { IPaginationMeta, paginate, Pagination } from 'nestjs-typeorm-paginate';

@Injectable()
export class UserRepository extends RepositoryService<User> {
  constructor(
    @InjectRepository(User)
    readonly repository: Repository<User>,
  ) {
    super(repository);
  }

  async findOneRelations(options: FindOneOptions<User>) {
    return await this.repository.findOne(options);
  }

  async paginateData(query): Promise<Pagination<User, IPaginationMeta>> {
    const { page, per_page } = query;
    const queryBuilder = this.repository.createQueryBuilder('user');
    return paginate<User>(queryBuilder, { limit: per_page, page: page });
  }
}
