import { Table, Column, Model, DataType, HasMany } from 'sequelize-typescript';
import { Order } from '../orders/orders.module';

// Interface định nghĩa những field cần khi tạo User mới
export interface UserCreationAttrs {
  name: string;
  email: string;
  password: string;
}

@Table({ tableName: 'users', timestamps: true })
export class User extends Model<User, UserCreationAttrs> {
  @Column({ type: DataType.INTEGER, autoIncrement: true, primaryKey: true })
  declare id: number;

  @Column({ type: DataType.STRING, allowNull: false })
  declare name: string;

  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  declare email: string;

  @Column({ type: DataType.STRING, allowNull: false })
  declare password: string;

  @Column({ type: DataType.ENUM('customer', 'admin'), defaultValue: 'customer' })
  declare role: string;

  @HasMany(() => Order)
  declare orders: Order[];
}
