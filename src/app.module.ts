import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Category } from './products/categories/Category';
import { Product } from './products/Product';
import { ProductsModule } from './products/products.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3307,
      username: 'root',
      password: 'root',
      database: 'my_test',
      entities: [Category,Product],
      synchronize: true,
    }),    
    ProductsModule,    
    AuthModule,    
    UsersModule,    
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
