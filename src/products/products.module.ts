import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoriesController } from './categories/categories.controller';
import { CategoriesService } from './categories/categories.service';
import { Category } from './categories/Category';
import { Product } from './Product';
import { ProductsContoller } from './products.controller';
import { ProductsService } from './Products.service';

@Module({
  imports:[TypeOrmModule.forFeature([Category]), TypeOrmModule.forFeature([Product])],
  controllers: [CategoriesController, ProductsContoller],
  providers: [CategoriesService,ProductsService]
})
export class ProductsModule {}
