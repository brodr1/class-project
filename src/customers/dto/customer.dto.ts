import { ApiProperty, PartialType } from '@nestjs/swagger';

import {
  IsEmail,
  IsNotEmpty,
  IsString,
  MinLength,
} from 'class-validator';

export class CreateCustomerDto {

  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  @ApiProperty()
  first_name!: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  @ApiProperty()
  last_name!: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(10)
  @ApiProperty()
  cedula!: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  phone!: string;

  @IsEmail()
  @IsNotEmpty()
  @ApiProperty()
  email!: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(5)
  @ApiProperty()
  address!: string;
}

export class UpdateCustomerDto extends PartialType(CreateCustomerDto) {}