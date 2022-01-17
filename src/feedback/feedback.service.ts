import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { FeedbackEntity } from '../entities/feedback.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class FeedbackService {
  constructor(
    @InjectRepository(FeedbackEntity)
    private feedbackEntity: Repository<FeedbackEntity>,
  ) {}

  async createFeedback(data: FeedbackEntity): Promise<FeedbackEntity> {
    return await this.feedbackEntity.save(data);
  }
  async changeStatus(data: Partial<FeedbackEntity>): Promise<FeedbackEntity> {
    const feedback = await this.feedbackEntity.findOne({ id: data.id });
    if (feedback) {
      return await this.feedbackEntity.save(data);
    }
  }
  async getList(): Promise<FeedbackEntity[]> {
    return this.feedbackEntity.find();
  }
}
