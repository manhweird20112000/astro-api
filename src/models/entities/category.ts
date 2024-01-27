import {
  BaseEntity,
  Column,
  CreateDateColumn,
  DeleteDateColumn, Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Status } from '@/constants';
import { Mission } from '@/models/entities/mission';

@Entity('category')
export class Category extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ enum: Status, default: Status.active, type: 'enum' })
  status: Status;

  @OneToMany(() => Mission, (mission) => mission.id)
  missions: Mission[];

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @DeleteDateColumn()
  deleted_at: Date;
}
