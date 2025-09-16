import { Table, Column, Model, DataType, ForeignKey, BelongsTo, HasMany } from 'sequelize-typescript';
import { Category } from '../categories/categories.module';
import { OrderItem } from 'src/orders/order-item.model';

@Table({ tableName: 'products', timestamps: true })
export class Product extends Model<Product> {
  @Column({ type: DataType.INTEGER, autoIncrement: true, primaryKey: true })
  declare id: number;

  @Column({ type: DataType.STRING, allowNull: false })
  declare name: string;

  @Column({ type: DataType.TEXT })
  declare description: string;

  @Column({ type: DataType.DECIMAL(10, 2), allowNull: false })
  declare price: number;

  @Column({ type: DataType.INTEGER, defaultValue: 0 })
  declare stock: number;

  @ForeignKey(() => Category)
  @Column({ type: DataType.INTEGER })
  declare categoryId: number;

  @BelongsTo(() => Category)
  declare category: Category;

  @HasMany(() => OrderItem)
  declare orderItems: OrderItem[];
}
