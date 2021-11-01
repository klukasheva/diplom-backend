import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { NewsEntity } from './news.entity';

@Entity()
export class TagEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
  @ManyToMany(() => NewsEntity, (news) => news.tags)
  @JoinTable()
  news: NewsEntity[];
}
