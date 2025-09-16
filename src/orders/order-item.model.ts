import { Table, Column, Model, DataType, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { Order } from './orders.module';
import { Product } from '../products/products.module';

@Table({ tableName: 'order_items', timestamps: false })
export class OrderItem extends Model<OrderItem> {
  @Column({ type: DataType.INTEGER, autoIncrement: true, primaryKey: true })
  declare id: number;

  @ForeignKey(() => Order)
  @Column({ type: DataType.INTEGER })
  declare orderId: number;

  @BelongsTo(() => Order)
  declare order: Order;

  @ForeignKey(() => Product)
  @Column({ type: DataType.INTEGER })
  declare productId: number;

  @BelongsTo(() => Product)
  declare product: Product;

  @Column({ type: DataType.INTEGER, allowNull: false })
  declare quantity: number;

  @Column({ type: DataType.DECIMAL(10, 2), allowNull: false })
  declare price: number;
}
