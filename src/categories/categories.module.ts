import { Table, Column, Model, DataType, HasMany } from 'sequelize-typescript';
import { Product } from '../products/products.module';

@Table({ tableName: 'categories', timestamps: true })
export class Category extends Model<Category> {
  @Column({ type: DataType.INTEGER, autoIncrement: true, primaryKey: true })
  declare id: number;

  @Column({ type: DataType.STRING, allowNull: false })
  declare name: string;

  @HasMany(() => Product)
  declare products: Product[];
}
