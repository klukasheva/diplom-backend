import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ImagesEntity } from 'src/entities/images.entity';
import { ProductEntity } from 'src/entities/product.entity';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';
import { CategoryEntity } from '../entities/category.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([ProductEntity, ImagesEntity, CategoryEntity]),
  ],
  controllers: [ProductController],
  providers: [ProductService],
  exports: [ProductService],
})
export class ProductModule {}
