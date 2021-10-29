import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { ProductEntity } from './product.entity';

@Entity()
export class ImagesEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ default: '' })
  link: string;
  @ManyToOne(() => ProductEntity, (product) => product.additionalImages, {
    onDelete: 'CASCADE',
  })
  product: ProductEntity;
}
