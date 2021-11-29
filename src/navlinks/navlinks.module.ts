import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NavlinksEntity } from '../entities/navlinks.entity';
import { NavlinksService } from './navlinks.service';
import { NavlinksController } from './navlinks.controller';

@Module({
  imports: [TypeOrmModule.forFeature([NavlinksEntity])],
  exports:[NavlinksService],
  controllers:[NavlinksController],
  providers:[NavlinksService],
})

export class NavlinksModule{}