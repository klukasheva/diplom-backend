import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { VacansyEntity } from '../entities/vacansy.entity';

@Injectable()
export class VacansyService {
  constructor(
    @InjectRepository(VacansyEntity)
    private readonly vacansy: Repository<VacansyEntity>,
  ) {}

  async getList() {
    return this.vacansy.find();
  }

  async create(data: VacansyEntity) {
    return await this.vacansy.save(data);
  }

  async update(data: VacansyEntity) {
    const vacansy = await this.vacansy.findOne({ id: data.id });
    if (vacansy) {
      return this.vacansy.save(data);
    }
  }

  async delete(ids: number[]) {
    const arr = await this.vacansy.findByIds(ids);
    return await this.vacansy.remove(arr);
  }
}
