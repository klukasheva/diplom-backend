import { Body, Controller, Get, Post } from '@nestjs/common';
import { OrderService } from './order.service';
import { OrderEntity } from '../entities/order.entity';

@Controller('order')
export class OrderController {
  constructor(private orderService: OrderService) {}

  @Post('')
  async create(@Body() data: OrderEntity): Promise<OrderEntity> {
    return this.orderService.createOrder(data);
  }

  @Get('')
  async getList(): Promise<OrderEntity[]> {
    return this.orderService.getList();
  }
}
