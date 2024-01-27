import {
  BaseEntity,
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Role } from './role';
import { Gender, Roles, Status } from '@/constants';

@Entity('user')
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255 })
  fullname: string;

  @Column()
  username: string;

  @Column({ type: 'enum', enum: Status, default: Status.inactive })
  status: Status;

  @Column({ type: 'enum', enum: Gender, default: Gender.other })
  gender: Gender;

  @Column({ type: 'datetime', nullable: true })
  dob: Date;

  @Column({ type: 'float', default: 0 })
  height: number;

  @Column({ type: 'float', default: 0 })
  weight: number;

  @Column({ nullable: true })
  avatar: string;

  @Column({ type: 'varchar', length: 255, unique: true })
  email: string;

  @Column({ nullable: true })
  phone: string;

  @Column({ type: 'varchar', length: 255 })
  password: string;

  @ManyToOne(() => Role, (role) => role.id)
  role: Roles;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @DeleteDateColumn()
  deleted_at: Date;
}
