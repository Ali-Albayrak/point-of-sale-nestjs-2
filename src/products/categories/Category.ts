
import { IsNotEmpty, IsNumber } from "class-validator";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Product } from "../Product";

@Entity()
export class Category {
  // @IsNumber()
  @PrimaryGeneratedColumn()
  id: number;
  
  @IsNotEmpty()
  @Column()
  name: string;

  @IsNotEmpty()
  @Column()
  icon: string;

  @Column()
  color: string;

  @OneToMany(() => Product, (product) => product.category_id)
  products: Product[]  
}

