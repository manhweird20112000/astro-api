import { HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { SaveDto } from '@/modules/admin/user/dto/save.dto';
import * as bcrypt from 'bcrypt';
import { UserRepository } from '@/models/repository/user.repository';
import { User } from '@/models/entities/user';
import { Roles } from '@/constants';
import { RoleRepository } from '@/models/repository/role.repository';
import { Role } from '@/models/entities/role';
import { Transactional } from 'typeorm-transactional';
import { UpdateDto } from '@/modules/admin/user/dto/update.dto';
import { ResponseData } from '@/utils/response-data';
import { DeleteResult, UpdateResult } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    private readonly repository: UserRepository,
    private readonly roleRepository: RoleRepository,
  ) {}

  @Transactional()
  async save(payload: SaveDto): Promise<User> {
    payload.password = bcrypt.hashSync(payload.password, 10);
    const role: Role = await this.roleRepository.findById(Roles.Admin);
    return this.repository.store({ role, ...payload });
  }

  @Transactional()
  async update({ id, ...payload }: UpdateDto): Promise<UpdateResult> {
    const user: User = await this.repository.findById(id);
    if (!user) {
      throw new NotFoundException(
        new ResponseData(null, HttpStatus.NOT_FOUND, 'Not Found.'),
      );
    }

    return this.repository.updateOne({ id }, payload);
  }

  @Transactional()
  async remove(id: number): Promise<DeleteResult> {
    const user: User = await this.repository.findById(id);

    if (!user) {
      throw new NotFoundException(
        new ResponseData(null, HttpStatus.NOT_FOUND, 'Not Found.'),
      );
    }

    return this.repository.remove({ id });
  }
}
