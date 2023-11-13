import { BaseEntity, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from './user';
import { Module } from './module';
import { Permission } from './permission';

@Entity('user_module_permission')
export class UserModulePermission extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, (user) => user.permission)
  user: User;

  @ManyToOne(() => Module, (module) => module.permissions)
  module: Module;

  @ManyToOne(() => Permission)
  permission: Permission;
}
