import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Category } from './Category';

@Injectable()
export class CategoriesService {
    constructor(
    @InjectRepository(Category)
    private CategorysRepository: Repository<Category>,
  ) {}

  getAll(): Promise<Category[]> {
    return this.CategorysRepository.find();
  }

  getById(id: number): Promise<Category> {
    let result = this.CategorysRepository.findOneBy({ id });
    if(!result){
      console.warn("there is no such category ID");
      return undefined;
    }
    return result; 
  }

  async Update(id: number, item: Category): Promise<boolean> {
    let result = await this.CategorysRepository.createQueryBuilder()
    .update("category")
    .set({id,...item})
    .where("id = :id", { id })
    .execute();
    if(result.affected == 0){
        // console.warn("there is no such category ID");
        return false;
    }
    return true;
}

  async create(item: Category): Promise<Category>{
    let result = await this.CategorysRepository.save(item);
    return result; 
  }

  async delete(id: number): Promise<boolean>{
    let res = await this.CategorysRepository.delete(id);
    if(res.affected == 0){
      return false;
    }
    return true;
  }
}
