import {
  BaseEntity,
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  ManyToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  JoinTable,
} from 'typeorm';
import { Status } from '@/constants';
import { Permission } from './permission';

@Entity('module')
export class Module extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ type: 'enum', enum: Status, default: Status.active })
  status: Status;

  @ManyToMany(() => Permission, { cascade: true })
  @JoinTable({
    name: 'module_permission',
  })
  permissions: Permission[];

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @DeleteDateColumn()
  deleted_at: Date;
}
