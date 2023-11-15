import { RepositoryService } from '@/infra/repository/service';
import { Role } from '@/models/entities/role';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';

@Injectable()
export class RoleRepository extends RepositoryService<Role> {
  constructor(
    @InjectRepository(Role)
    readonly repository: Repository<Role>,
  ) {
    super(repository);
  }
}
