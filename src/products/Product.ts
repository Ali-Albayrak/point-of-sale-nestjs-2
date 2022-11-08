import { Column, Entity, JoinTable, ManyToMany, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { Category } from "./categories/Category";

@Entity()
export class Product {

    @Column()
    name: string;

    @Column()
    price: number;

    @PrimaryColumn()
    barcode: string;

    @Column()
    low_stock: number;

    @Column()
    optimal_stock: number;

    @Column()
    stock_type: string;

    // @ManyToMany(type => Category)
    // @JoinTable()
    // categoryID: Category["id"];
    // @Column()
    @ManyToOne(() => Category, (Category) => Category.id)
    category_id: Category;
}