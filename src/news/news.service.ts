import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { NewsEntity } from '../entities/news.entity';
import { Repository } from 'typeorm';

@Injectable()
export class NewsService {
  constructor(
    @InjectRepository(NewsEntity)
    private newsEntity: Repository<NewsEntity>,
  ) {}
  async create(data: NewsEntity): Promise<NewsEntity> {
    return this.newsEntity.save(data);
  }

  async getList(): Promise<NewsEntity[]> {
    return await this.newsEntity.find();
  }

  async get(id: number): Promise<NewsEntity> {
    return await this.newsEntity.findOne(id);
  }

  async delete(ids: number[]): Promise<NewsEntity[]> {
    const news = await this.newsEntity.findByIds(ids);
    return await this.newsEntity.remove(news);
  }

  async update(data: Partial<NewsEntity>): Promise<NewsEntity> {
    return this.newsEntity.save(data);
  }
}
