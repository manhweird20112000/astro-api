import {
  BaseEntity,
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Role } from './role';
import { Permission } from './permission';
import { Gender, Roles, Status } from '@/constants';

@Entity('user')
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255 })
  full_name: string;

  @Column({ nullable: true })
  username: string;

  @Column({ type: 'enum', enum: Status, default: Status.approval })
  status: Status;

  @Column({ type: 'enum', enum: Gender, default: Gender.other })
  gender: Gender;

  @Column({ type: 'datetime', nullable: true })
  dob: Date;

  @Column({ type: 'varchar', length: 255, unique: true })
  email: string;

  @Column({ nullable: true })
  phone: string;

  @Column({ type: 'varchar', length: 255 })
  password: string;

  @ManyToOne(() => Role, (role) => role.id)
  role: Roles;

  @ManyToMany(() => Permission, { cascade: true })
  @JoinTable({
    name: 'user_permission',
  })
  permission: Permission[];

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @DeleteDateColumn()
  deleted_at: Date;
}
