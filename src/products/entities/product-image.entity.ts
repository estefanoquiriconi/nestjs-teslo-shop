import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Product } from './product.entity';

@Entity({ name: 'product_images' })
export class ProductImage {
  @ApiProperty({
    example: 1,
    description: 'Unique identifier for the product image',
  })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({
    example: 'image.jpg',
    description: 'NAME of the product image',
  })
  @Column('text')
  url: string;

  @ApiProperty({
    description: 'Product associated with this image',
  })
  @ManyToOne(() => Product, (product) => product.images, {
    onDelete: 'CASCADE',
  })
  product: Product;
}
