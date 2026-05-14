import { ApiProperty, PartialType } from '@nestjs/swagger';
import {
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
  MinLength,
} from 'class-validator';

export class CreateVehicleDto {
  @IsInt()
  @IsPositive()
  @IsNotEmpty()
  @IsNumber()
  @ApiProperty()
  model_id!: number;

  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  @ApiProperty()
  vin!: string;

  @IsInt()
  @IsNumber()
  @IsPositive()
  @IsOptional()
  @ApiProperty()
  year?: number;

  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  @ApiProperty()
  color!: string;

  @IsInt()
  @IsPositive()
  @IsOptional()
  @ApiProperty()
  mileage!: number;

  @IsNumber()
  @IsPositive()
  @IsNumber()
  @IsNotEmpty()
  @ApiProperty()
  price!: number;

  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  @ApiProperty()
  status!: string;
}

export class UpdateVehicleDto extends PartialType(CreateVehicleDto) {}
