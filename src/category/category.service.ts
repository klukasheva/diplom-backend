import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CategoryEntity } from '../entities/category.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(CategoryEntity)
    private category: Repository<CategoryEntity>,
  ) {}

  async create(
    data: Omit<CategoryEntity, 'id' | 'products'>,
  ): Promise<Omit<CategoryEntity, 'products'>> {
    const checkIsCreated = await this.category.findOne({ title: data.title });

    if (checkIsCreated) {
      throw new Error('Категория с таким названием уже существует');
    }
    return await this.category.save(data);
  }

  async getList(): Promise<CategoryEntity[]> {
    return await this.category.find({
      relations: ['products'],
    });
  }
}
