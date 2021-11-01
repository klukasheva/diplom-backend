import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TagEntity } from '../entities/tag.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TagsService {
  constructor(
    @InjectRepository(TagEntity)
    private readonly tagsEntity: Repository<TagEntity>,
  ) {}

  async create(data: TagEntity): Promise<TagEntity> {
    return await this.tagsEntity.save(data);
  }

  async getList(): Promise<TagEntity[]> {
    return this.tagsEntity.find();
  }

  async delete(ids: number[]): Promise<TagEntity[]> {
    const tags = await this.tagsEntity.findByIds(ids);
    return await this.tagsEntity.remove(tags);
  }
}
