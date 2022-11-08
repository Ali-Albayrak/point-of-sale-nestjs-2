import { Body, Controller, Delete, Get, HttpCode, HttpException, HttpStatus, Param, Patch, Post, Res,  } from '@nestjs/common';
import { getDataSourceName, InjectRepository } from '@nestjs/typeorm';
import { response } from 'express';
import { Repository } from 'typeorm';
import { CategoriesService } from './categories.service';
import { Category } from './Category';

@Controller('products/categories')
export class CategoriesController {

    constructor(
        @InjectRepository(Category)
        private CategorysRepository: Repository<Category>,
        private categoriesService: CategoriesService){ }
    
    @Get(":id")
    async GetById(@Param() params) {
        return this.categoriesService.getById(params.id);
    }

    @HttpCode(200)
    @Get()
    GetAll() {
        return this.categoriesService.getAll();
    }
    
    @HttpCode(201)
    @Post()
    Create(@Body()item:Category): Promise<Category>{
        let res = this.categoriesService.create(item);
        if(!res){
            throw new HttpException("400 Bad Request: something went wrong",HttpStatus.BAD_REQUEST);
        }
        return res;
    }

    @HttpCode(200)
    @Patch(":id")
    async Update(@Param() params, @Body()item:Category) {
        let res = this.categoriesService.Update(params.id,item);
        if (!res){
            throw new HttpException("404 Not Found: there is no such category ID",HttpStatus.NOT_FOUND);  
        }
        return true;
    }

    @Delete(":id")
    delete(@Param() params){
        return this.categoriesService.delete(params.id);
    }
}
