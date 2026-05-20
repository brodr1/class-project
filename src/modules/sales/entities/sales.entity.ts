import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('sales')
export class Sale {

  @PrimaryGeneratedColumn('increment', { type: 'int4' })
  id!: number;

  @Column({
    type: 'int4',
  })
  customer_id!: number;

  @Column({
    type: 'int4',
  })
  vehicle_id!: number;

  @Column({
    type: 'decimal',
    precision: 10,
    scale: 2,
  })
  total_price!: number;

  @Column({
    type: 'date',
  })
  sale_date!: Date;
}