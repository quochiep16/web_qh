import { Table, Column, Model, DataType, ForeignKey, BelongsTo, HasMany } from 'sequelize-typescript';
import { User } from '../users/users.module';
import { OrderItem } from './order-item.model';

@Table({ tableName: 'orders', timestamps: true })
export class Order extends Model<Order> {
  @Column({ type: DataType.INTEGER, autoIncrement: true, primaryKey: true })
  declare id: number;

  @ForeignKey(() => User)
  @Column({ type: DataType.INTEGER })
  declare userId: number;

  @BelongsTo(() => User)
  declare user: User;

  @Column({ type: DataType.DECIMAL(10, 2), allowNull: false })
  declare total: number;

  @Column({
    type: DataType.ENUM('pending', 'paid', 'shipped', 'completed', 'cancelled'),
    defaultValue: 'pending',
  })
  declare status: string;

  @HasMany(() => OrderItem)
  declare orderItems: OrderItem[];
}
