import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { NavlinksEntity } from '../entities/navlinks.entity';
import { NavlinksService } from './navlinks.service';

@Controller({ path: 'navlinks' })
export class NavlinksController {
  constructor(private readonly service: NavlinksService) {}

  @Get()
  list(): Promise<NavlinksEntity[]> {
    return this.service.list();
  }
  @Post()
  create(@Body() data: NavlinksEntity) {
    return this.service.create(data);
  }
  @Get(':number')
  getOne(@Param() id: number) {
    return this.service.getOne(id);
  }

  @Put()
  update(@Body() data: NavlinksEntity) {
    return this.service.update(data);
  }

  @Delete()
  delete(@Body() ids: { ids: number[] }) {
    return this.service.delete(ids.ids);
  }
}
