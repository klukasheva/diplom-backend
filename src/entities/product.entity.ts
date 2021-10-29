import {
  Column,
  Entity,
  JoinTable,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ImagesEntity } from './images.entity';
import { CategoryEntity } from './category.entity';

@Entity()
export class ProductEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ default: '' })
  image: string;
  @Column({ default: '' })
  title: string;
  @Column({ default: 0 })
  cost: number;
  @Column({ default: 0 })
  stockCost: number;
  @Column({ default: '' })
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
}
