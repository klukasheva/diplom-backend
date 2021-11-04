import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { NewsService } from './news.service';
import { NewsEntity } from '../entities/news.entity';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { editFileName, imageFileFilter } from '../utils';

@Controller('news')
export class NewsController {
  constructor(private readonly newsService: NewsService) {}

  @Get('')
  async getList() {
    return this.newsService.getList();
  }
  @Post('')
  async create(@Body() data: NewsEntity): Promise<NewsEntity> {
    return this.newsService.create(data);
  }
  @Delete('')
  async delete(@Body() ids: number[]) {
    return this.newsService.delete(ids);
  }

  @Get(':id')
  async get(@Param() id: number): Promise<NewsEntity> {
    return this.newsService.get(id);
  }

  @Put('')
  async update(@Body() data: Partial<NewsEntity>): Promise<NewsEntity> {
    return this.newsService.update(data);
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
    return this.newsService.update({ id: +key.id, image: file.filename });
  }
}
