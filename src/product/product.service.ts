import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductEntity } from 'src/entities/product.entity';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(ProductEntity)
    private product: Repository<ProductEntity>,
  ) {}

  async create(data: Omit<ProductEntity, 'image'>): Promise<ProductEntity> {
    return await this.product.save(data);
  }
  async update(data: Partial<ProductEntity>): Promise<ProductEntity> {
    const product = await this.product.findOne(
      { id: data.id },
      {
        relations: ['additionalImages'],
      },
    );
    if (product) {
      return await this.product.save(data);
    }
    throw new NotFoundException();
  }

  async get(id: number): Promise<ProductEntity> {
    const product = await this.product.findOne(id, {
      relations: ['additionalImages', 'category'],
    });
    return product;
  }

  async getProductList(): Promise<ProductEntity[]> {
    return this.product.find({
      relations: ['additionalImages', 'category'],
    });
  }

  async delete(ids: number[]): Promise<ProductEntity[]> {
    const items = await this.product.findByIds(ids);
    return await this.product.remove(items);
  }
}
