import { ApiProperty, PartialType } from '@nestjs/swagger';

import {
  IsDateString,
  IsInt,
  IsNotEmpty,
  IsPositive,
} from 'class-validator';

export class CreateSalesDto {

  @IsInt()
  @IsPositive()
  @IsNotEmpty()
  @ApiProperty()
  customer_id!: number;

  @IsInt()
  @IsPositive()
  @IsNotEmpty()
  @ApiProperty()
  vehicle_id!: number;

  @IsPositive()
  @IsNotEmpty()
  @ApiProperty()
  total_price!: number;

  @IsDateString()
  @IsNotEmpty()
  @ApiProperty()
  sale_date!: Date;
}

export class UpdateSalesDto extends PartialType(CreateSalesDto) {}