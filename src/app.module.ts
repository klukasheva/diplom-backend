import { Module } from '@nestjs/common';
import { MulterModule } from '@nestjs/platform-express';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { ImagesEntity } from './entities/images.entity';
import { ProductEntity } from './entities/product.entity';
import { ProductModule } from './product/product.module';
import { CategoryEntity } from './entities/category.entity';
import { CategoryModule } from './category/category.module';
import { ImagesModule } from './productImages/images.module';
import { NewsEntity } from './entities/news.entity';
import { NewsModule } from './news/news.module';
import { FeedbackModule } from './feedback/feedback.module';
import { FeedbackEntity } from './entities/feedback.entity';
import { OrderModule } from './order/order.module';
import { OrderEntity } from './entities/order.entity';
import { VacansyModule } from './vacansy/vacansy.module';
import { VacansyEntity } from './entities/vacansy.entity';
import { NavlinksEntity } from './entities/navlinks.entity';
import { NavlinksModule } from './navlinks/navlinks.module';
// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: +process.env.DATABASE_PORT,
      username: 'root',
      database: process.env.DATABASE,
      password: process.env.PASSWORD,
      entities: [
        ImagesEntity,
        ProductEntity,
        CategoryEntity,
        NewsEntity,
        FeedbackEntity,
        OrderEntity,
        VacansyEntity,
        NavlinksEntity,
      ],
      synchronize: true,
    }),
    MulterModule.register({
      dest: './uploads',
    }),
    ProductModule,
    CategoryModule,
    ImagesModule,
    NewsModule,
    FeedbackModule,
    OrderModule,
    VacansyModule,
    NavlinksModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {
}
