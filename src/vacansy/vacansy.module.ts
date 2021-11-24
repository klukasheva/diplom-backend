import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VacansyEntity } from '../entities/vacansy.entity';
import { VacansyService } from './vacansy.service';
import { VacansyController } from './vacansy.controller';

@Module({
  imports: [TypeOrmModule.forFeature([VacansyEntity])],
  exports: [VacansyService],
  providers: [VacansyService],
  controllers: [VacansyController],
})
export class VacansyModule {}
