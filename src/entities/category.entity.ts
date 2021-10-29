import {
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ProductEntity } from './product.entity';

@Entity()
export class CategoryEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ default: '' })
  title: string;
  @OneToMany(() => ProductEntity, (product) => product.category)
  // @JoinTable({
  //   name: 'category_products',
  //   joinColumn: { name: 'categoryId', referencedColumnName: 'id' },
  //   inverseJoinColumn: { name: 'productId', referencedColumnName: 'id' },
  // })
  products: ProductEntity[];
}
