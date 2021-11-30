import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class NavlinksEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  title: string;
  @Column()
  description: string;
}
