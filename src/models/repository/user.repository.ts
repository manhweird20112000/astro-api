import { RepositoryService } from '@/infra/repository/service';
import { User } from '@/models/entities/user';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UserRepository extends RepositoryService<User> {
  constructor(
    @InjectRepository(User)
    readonly repository: Repository<User>,
  ) {
    super(repository);
  }
}
