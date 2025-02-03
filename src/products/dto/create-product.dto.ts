import { ApiProperty } from '@nestjs/swagger';
import {
  IsArray,
  IsIn,
  IsInt,
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
  MinLength,
} from 'class-validator';

export class CreateProductDto {
  @ApiProperty({
    description: 'The title of the product',
    nullable: false,
    minLength: 1,
    type: 'string',
  })
  @IsString()
  @MinLength(1)
  title: string;

  @ApiProperty({
    description: 'The price of the product',
    nullable: true,
    minimum: 1,
    type: 'number',
  })
  @IsNumber()
  @IsPositive()
  @IsOptional()
  price?: number;

  @ApiProperty({
    description: 'The description of the product',
    nullable: true,
    type: 'string',
  })
  @IsString()
  @IsOptional()
  description?: string;

  @ApiProperty({
    description: 'The slug of the product',
    nullable: true,
    type: 'string',
  })
  @IsString()
  @IsOptional()
  slug?: string;

  @ApiProperty({
    description: 'The stock of the product',
    nullable: true,
    minimum: 1,
    type: 'number',
  })
  @IsInt()
  @IsPositive()
  @IsOptional()
  stock?: number;

  @ApiProperty({
    description: 'Sizes of the product',
    nullable: false,
    type: 'array',
  })
  @IsString({ each: true })
  @IsArray()
  sizes: string[];

  @ApiProperty({
    description: 'The gender of the product',
    nullable: false,
    type: 'string',
    enum: ['men', 'women', 'kid', 'unisex'],
  })
  @IsIn(['men', 'women', 'kid', 'unisex'])
  gender: string;

  @ApiProperty({
    description: 'The tags associated with the product',
    nullable: true,
    type: 'array',
  })
  @IsString({ each: true })
  @IsArray()
  @IsOptional()
  tags?: string[];

  @ApiProperty({
    description: 'Images of the product',
    nullable: true,
    type: 'array',
  })
  @IsString({ each: true })
  @IsArray()
  @IsOptional()
  images?: string[];
}
