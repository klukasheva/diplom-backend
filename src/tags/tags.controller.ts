import { Body, Controller, Delete, Get, Post } from '@nestjs/common';
import { TagsService } from './tags.service';
import { TagEntity } from '../entities/tag.entity';

@Controller('tags')
export class TagsController {
  constructor(private readonly tagsService: TagsService) {}

  @Get('')
  getList(): Promise<TagEntity[]> {
    return this.tagsService.getList();
  }

  @Post('')
  create(@Body() data: TagEntity): Promise<TagEntity> {
    return this.tagsService.create(data);
  }

  @Delete('')
  delete(@Body() ids: { ids: number[] }): Promise<TagEntity[]> {
    return this.tagsService.delete(ids.ids);
  }
}
