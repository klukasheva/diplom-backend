import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { TagEntity } from './tag.entity';

@Entity()
export class NewsEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  title: string;
  @Column()
  author: string;
  @Column()
  creationDate: string;
  @Column({ length: 10000 })
  content: string;
  @Column({ default: '' })
  image: string;
  @ManyToMany(() => TagEntity, (tags) => tags.news)
  tags: NewsEntity[];
}
