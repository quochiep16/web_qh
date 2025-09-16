import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { databaseConfig } from './config/database.config';

import { User } from './users/users.module';
import { Category } from './categories/categories.module';
import { Product } from './products/products.module';
import { Order } from './orders/orders.module';
import { OrderItem } from './orders/order-item.model';

import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    SequelizeModule.forRoot({
      ...databaseConfig,
      models: [User, Category, Product, Order, OrderItem],
      autoLoadModels: true,
      synchronize: true,
    }),
    AuthModule,
  ],
})
export class AppModule {}
