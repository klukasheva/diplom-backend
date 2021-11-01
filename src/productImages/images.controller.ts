import {
  Body,
  Controller,
  Post,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';
import { FilesInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { editFileName, imageFileFilter } from '../utils';
import { ImagesService } from './images.service';
import { ProductService } from '../product/product.service';

@Controller('images')
export class ImagesController {
  constructor(
    private readonly imagesService: ImagesService,
    private readonly productService: ProductService,
  ) {}

  @Post('multiple')
  @UseInterceptors(
    FilesInterceptor('image', 20, {
      storage: diskStorage({
        destination: './uploads',
        filename: editFileName,
      }),
      fileFilter: imageFileFilter,
    }),
  )
  async uploadMultipleFiles(
    @UploadedFiles() files,
    @Body() key: { id: string },
  ) {
    const product = await this.productService.get(+key.id);
    files.forEach((file) => {
      this.imagesService.createImage({
        link: file.filename,
        product: product,
      });
    });
  }
}
