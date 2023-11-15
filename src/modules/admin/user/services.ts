import { Injectable } from '@nestjs/common';
import { SaveDto } from '@/modules/admin/user/dto/save.dto';
import * as bcrypt from 'bcrypt';
import { UserRepository } from '@/models/repository/user.repository';
import { User } from '@/models/entities/user';
import { Roles } from '@/constants';
import { RoleRepository } from '@/models/repository/role.repository';
import { Role } from '@/models/entities/role';

@Injectable()
export class UserService {
  constructor(
    private readonly repository: UserRepository,
    private readonly roleRepository: RoleRepository,
  ) {}
  async save(payload: SaveDto): Promise<User> {
    payload.password = bcrypt.hashSync(payload.password, 10);
    const role: Role = await this.roleRepository.findById(Roles.Admin);
    return this.repository.store({ role, ...payload });
  }
}
