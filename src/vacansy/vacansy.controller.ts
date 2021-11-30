import { Body, Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { VacansyEntity } from '../entities/vacansy.entity';
import { VacansyService } from './vacansy.service';

@Controller('vacansy')
export class VacansyController {
  constructor(private readonly service: VacansyService) {
  }

  @Delete()
  async delete(@Body() ids: { ids: number[] }) {
    return this.service.delete(ids.ids);
  }

  @Get()
  async getList(): Promise<VacansyEntity[]> {
    return this.service.getList();
  }

  @Put()
  async update(@Body() body: VacansyEntity) {
    return this.service.update(body);
  }

  @Post()
  async create(@Body() body: VacansyEntity): Promise<VacansyEntity> {
    return this.service.create(body);
  }

}
