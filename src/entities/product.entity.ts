import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ImagesEntity } from './images.entity';
import { CategoryEntity } from './category.entity';
import { OrderEntity } from './order.entity';

@Entity()
export class ProductEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ default: '' })
  image: string;
  @Column()
  title: string;
  @Column({ type: 'float' })
  cost: number;
  @Column({ default: 1 })
  count: number;
  @Column({ type: 'float' })
  stockCost: number;
  @Column({ length: 10000 })
  description: string;
  @OneToMany(() => ImagesEntity, (image) => image.product)
  @JoinTable({
    name: 'product_images',
    joinColumn: { name: 'productId', referencedColumnName: 'id' },
    inverseJoinColumn: { name: 'imageId', referencedColumnName: 'id' },
  })
  additionalImages: ImagesEntity[];
  @ManyToOne(() => CategoryEntity, (category) => category.products)
  category: CategoryEntity;
  @ManyToMany(() => OrderEntity, (order) => order.products)
  orders: OrderEntity[];
}
