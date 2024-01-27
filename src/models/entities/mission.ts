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
import { ELevel, Status } from '@/constants';
import { Category } from '@/models/entities/category';

@Entity('mission')
export class Mission extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ nullable: false })
  description: string;

  @Column({ type: 'simple-json' })
  condition: string;

  @Column({ type: 'enum', enum: ELevel, default: ELevel.easy })
  level: ELevel;

  @Column({ enum: Status, type: 'enum', default: Status.inactive })
  status: Status;

  @Column({ type: 'datetime' })
  publish_at: Date;

  @Column({ type: 'simple-json' })
  gift: string;

  @ManyToOne(() => Category, (category) => category.id)
  category: Category;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @DeleteDateColumn()
  deleted_at: Date;
}
