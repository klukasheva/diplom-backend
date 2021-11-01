import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ImagesEntity } from '../entities/images.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ImagesService {
  constructor(
    @InjectRepository(ImagesEntity)
    private images: Repository<ImagesEntity>,
  ) {}

  async createImage(
    data: Omit<ImagesEntity, 'id'>,
  ): Promise<ImagesEntity> {
    return await this.images.save(data);
  }
}
