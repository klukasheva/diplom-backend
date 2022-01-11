import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class NavlinksEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  title: string;
  @Column({
    length: 1000,
  })
  description: string;
}
