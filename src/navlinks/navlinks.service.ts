import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { NavlinksEntity } from '../entities/navlinks.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class NavlinksService {
  constructor(
    @InjectRepository(NavlinksEntity)
    private readonly navlinks: Repository<NavlinksEntity>,
  ) {}

  async create(data: NavlinksEntity) {
    return await this.navlinks.save(data);
  }

  async list() {
    return this.navlinks.find();
  }

  async getOne(id: number) {
    return await this.navlinks.findOne({ id: id });
  }

  async update(data: Partial<NavlinksEntity>) {
    const item = await this.navlinks.findOne({ id: data.id });
    if (item) {
      return await this.navlinks.save(data);
    }
  }

  async delete(ids: number[]) {
    const items = await this.navlinks.findByIds(ids);
    return await this.navlinks.remove(items);
  }
}
