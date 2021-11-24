import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class VacansyEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  salaryStart: number;
  @Column({ nullable: true, default: null })
  salaryEnd: number | null;
  @Column()
  offerName: string;
  @Column({ length: 10000 })
  offerDescription: string;
}
