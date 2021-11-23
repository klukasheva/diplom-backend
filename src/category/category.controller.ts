import { Body, Controller, Delete, Get, Post } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CategoryEntity } from '../entities/category.entity';

@Controller({ path: 'category' })
export class CategoryController {
  constructor(private categoryService: CategoryService) {}

  @Post('')
  create(
    @Body() data: Omit<CategoryEntity, 'id' | 'products'>,
  ): Promise<Omit<CategoryEntity, 'products'>> {
    return this.categoryService.create(data);
  }

  @Get('')
  getList(): Promise<CategoryEntity[]> {
    return this.categoryService.getList();
  }

  @Delete('')
  delete(@Body() ids: { ids: number[] }) {
    return this.categoryService.delete(ids.ids);
  }
}
