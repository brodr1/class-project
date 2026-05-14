import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
} from 'typeorm';

@Entity('vehicles')
export class Vehicle {
  @PrimaryGeneratedColumn('increment')
  id!: number;

  @Column({ type: 'int4' })
  model_id!: number;

  @Column({ type: 'varchar', length: 50 })
  vin!: string;

  @Column({ type: 'int4' })
  year!: number;

  @Column({ type: 'varchar', length: 50 })
  color!: string;

  @Column({ type: 'int4', default: 0 })
  milage!: number;

  @Column({ type: 'float8' })
  price!: number;

  @Column({ type: 'varchar', length: 50 })
  status!: string;

  @CreateDateColumn({ type: 'timestamp' })
  created_at!: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updated_at!: Date;

  @DeleteDateColumn({ type: 'timestamp', nullable: true })
  deleted_at!: Date;
}
