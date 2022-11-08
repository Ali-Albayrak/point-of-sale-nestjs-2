import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Product } from "./Product";


@Injectable()
export class ProductsService{
    constructor(
        @InjectRepository(Product)
        private ProductsRepository: Repository<Product>,
    ) {}

    save(item:Product){
        return this.ProductsRepository.save(item);
    }

    GetAll(pageNo:number, pageSize:number){
        let skippedItems = pageNo*pageSize;
        let myQuery = this.ProductsRepository.createQueryBuilder().limit(pageSize).offset(skippedItems).select().execute();
        console.log(myQuery);
        return myQuery;
        return this.ProductsRepository.find();
    }

    // getAll(){
    //     return this.ProductsRepository.find();
    // }
}
