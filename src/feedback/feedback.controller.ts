import { Body, Controller, Get, Post } from '@nestjs/common';
import { FeedbackService } from './feedback.service';
import { FeedbackEntity } from '../entities/feedback.entity';

@Controller('feedback')
export class FeedbackController {
  constructor(private feedbackService: FeedbackService) {}
  @Get('')
  async getList(): Promise<FeedbackEntity[]> {
    return this.feedbackService.getList();
  }

  @Post('')
  async create(@Body() data: FeedbackEntity): Promise<FeedbackEntity> {
    return this.feedbackService.createFeedback(data);
  }
}
