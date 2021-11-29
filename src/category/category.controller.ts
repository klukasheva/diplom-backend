import { Body, Controller, Delete, Get, Post, Put } from '@nestjs/common';
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
  @Put('')
  update(@Body() data: Partial<CategoryEntity>) {
    return this.categoryService.update(data);
  }
  @Delete('')
  delete(@Body() ids: { ids: number[] }) {
    return this.categoryService.delete(ids.ids);
  }
}
