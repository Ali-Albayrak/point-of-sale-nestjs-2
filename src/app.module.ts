import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CategoriesController } from './products/categories/categories.controller';
import { Category } from './products/categories/Category';
import { Product } from './products/Product';
import { ProductsModule } from './products/products.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'my_test',
      entities: [Category,Product],
      synchronize: true,
    }),
    
    ProductsModule,    
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
