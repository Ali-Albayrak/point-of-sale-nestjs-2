import { Body, Controller, Get, Post, Query } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { ProductsService } from './Products.service';
import { Repository } from "typeorm";
import { Product } from "./Product";


@Controller('products')
export class ProductsContoller {
    constructor(
        @InjectRepository(Product) 
        private productRepository: Repository<Product>,
        private productsServis: ProductsService){ }

        @Get()
        GetAll(@Query() queryParams){
            return this.productsServis.GetAll(queryParams.page,queryParams.pageSize);
        }

        @Post()
        save(@Body() item:Product){
            return this.productsServis.save(item);
        }

}