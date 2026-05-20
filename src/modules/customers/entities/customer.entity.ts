import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('customers')
export class Customer {

  @PrimaryGeneratedColumn('increment', { type: 'int4' })
  id!: number;

  @Column({
    type: 'varchar',
    length: 100,
  })
  first_name!: string;

  @Column({
    type: 'varchar',
    length: 100,
  })
  last_name!: string;

  @Column({
    type: 'varchar',
    length: 20,
    unique: true,
  })
  cedula!: string;

  @Column({
    type: 'varchar',
    length: 20,
  })
  phone!: string;

  @Column({
    type: 'varchar',
    length: 150,
    unique: true,
  })
  email!: string;

  @Column({
    type: 'varchar',
    length: 255,
  })
  address!: string;
}