import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { OrderEntity } from '../entities/order.entity';

@Injectable()
export class OrderService {
  constructor(
    @InjectRepository(OrderEntity)
    private order: Repository<OrderEntity>,
  ) {}

  async createOrder(data: OrderEntity): Promise<OrderEntity> {
    return await this.order.save(data);
  }

  async changeStatus(data: Partial<OrderEntity>): Promise<OrderEntity> {
    const order = await this.order.findOne({ id: data.id });
    if (order) {
      return await this.order.save(data);
    }
  }

  async getList(): Promise<OrderEntity[]> {
    return this.order.find({
      relations: ['products'],
    });
  }
}
