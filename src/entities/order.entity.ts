import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ProductEntity } from './product.entity';

@Entity()
export class OrderEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  phoneNumber: string;
  @Column()
  customerName: string;
  @Column()
  address: string;
  @Column()
  status: boolean;
  @Column()
  cost: number;
  @Column({ length: 10000 })
  description: string;
  @ManyToMany(() => ProductEntity, (product) => product.orders)
  @JoinTable()
  products: ProductEntity[];
}
