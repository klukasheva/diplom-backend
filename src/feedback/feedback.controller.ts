import { Body, Controller, Get, Post, Put } from '@nestjs/common';
import { FeedbackService } from './feedback.service';
import { FeedbackEntity } from '../entities/feedback.entity';

@Controller('feedback')
export class FeedbackController {
  constructor(private feedbackService: FeedbackService) {}
  @Get('')
  async getList(): Promise<FeedbackEntity[]> {
    return this.feedbackService.getList();
  }

  @Put('/change-status')
  async changeStatus(@Body() data: Partial<FeedbackEntity>): Promise<FeedbackEntity> {
    return this.feedbackService.changeStatus(data);
  }

  @Post('')
  async create(@Body() data: FeedbackEntity): Promise<FeedbackEntity> {
    return this.feedbackService.createFeedback(data);
  }
}
