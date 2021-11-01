import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put, Query,
  UploadedFile,
  UploadedFiles,
  UseInterceptors
} from "@nestjs/common";
import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';
import { ProductEntity } from 'src/entities/product.entity';
import { ProductService } from './product.service';
import { diskStorage } from 'multer';
import { editFileName, imageFileFilter } from 'src/utils';

@Controller({ path: 'product' })
export class ProductController {
  constructor(private productService: ProductService) {}

  @Get(':id')
  getOne(@Param('id') id: number): Promise<ProductEntity> {
    return this.productService.get(id);
  }
  @Put()
  update(@Body() data: Partial<ProductEntity>): Promise<ProductEntity> {
    return this.productService.update(data);
  }

  @Get('')
  getList(@Query('category') category): Promise<ProductEntity[]> {
    return this.productService.getProductList(category);
  }

  @Delete('')
  deleteItem(@Body() ids: { ids: number[] }): Promise<ProductEntity[]> {
    return this.productService.delete(ids.ids);
  }

  @Post('upload')
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: './uploads',
        filename: editFileName,
      }),
      fileFilter: imageFileFilter,
    }),
  )
  upload(
    @UploadedFile() file: Express.Multer.File,
    @Body() key: { id: string },
  ) {
    return this.productService.update({ id: +key.id, image: file.filename });
  }

  @Post('')
  create(@Body() data: Omit<ProductEntity, 'image'>): Promise<ProductEntity> {
    return this.productService.create(data);
  }
}
