import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsInt, IsPositive, MinLength } from 'class-validator';


export class CreateModelDto {
    @IsInt()
    @IsPositive()
    @IsNotEmpty()
    @ApiProperty()
    brand_id: number;

    @IsString()
    @IsNotEmpty()
    @MinLength(3)
    @ApiProperty({example: 'Corolla'})
    name: string;

    @IsString()
    @IsNotEmpty()
    @MinLength(3)
    @ApiProperty({example: 'Sedan'})
    type: string;
}

export class UpdateVehicleModelDto extends PartialType(CreateModelDto) {}