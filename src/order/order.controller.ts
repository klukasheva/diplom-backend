import { Body, Controller, Get, Post, Put } from '@nestjs/common';
import { OrderService } from './order.service';
import { OrderEntity } from '../entities/order.entity';

@Controller('order')
export class OrderController {
  constructor(private orderService: OrderService) {}

  @Post('')
  async create(@Body() data: OrderEntity): Promise<OrderEntity> {
    return this.orderService.createOrder(data);
  }
  @Put('/change-status')
  async changeStatus(@Body() data: Partial<OrderEntity>): Promise<OrderEntity> {
    return this.orderService.changeStatus(data);
  }
  @Get('')
  async getList(): Promise<OrderEntity[]> {
    return this.orderService.getList();
  }
}
