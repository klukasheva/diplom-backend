import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

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
}
