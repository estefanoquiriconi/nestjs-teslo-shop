import {
  BeforeInsert,
  BeforeUpdate,
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ProductImage } from './product-image.entity';
import { User } from 'src/auth/entities/user.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity({ name: 'products' })
export class Product {
  @ApiProperty({
    example: '15a7d223-ba01-4977-ad3d-e5a130749883',
    description: 'Unique identifier for the product',
    uniqueItems: true,
  })
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ApiProperty({
    example: 'T-shirt',
    description: 'The title of the product',
    uniqueItems: true,
  })
  @Column('text', { unique: true })
  title: string;

  @ApiProperty({
    example: 0,
    description: 'The price of the product',
  })
  @Column('float', { default: 0 })
  price: number;

  @ApiProperty({
    example: 'Anim reprehenderit nulla in anim mollit ni irure commodo.',
    description: 'A brief description of the product',
    default: null,
  })
  @Column('text', { nullable: true })
  description: string;

  @ApiProperty({
    example: 't_shirt',
    description: 'A URL-friendly identifier for the product',
    uniqueItems: true,
  })
  @Column('text', { unique: true })
  slug: string;

  @ApiProperty({
    example: 10,
    description: 'The available stock of the product',
    default: 0,
  })
  @Column('int', { default: 0 })
  stock: number;

  @ApiProperty({
    example: ['S', 'M', 'L'],
    description: 'Available sizes for the product',
  })
  @Column('text', { array: true })
  sizes: string[];

  @ApiProperty({
    example: 'women',
    description: 'The target gender for the product',
  })
  @Column('text')
  gender: string;

  @ApiProperty({
    description: 'Tags associated with the product for categorization',
  })
  @Column('text', {
    array: true,
    default: [],
  })
  tags: string[];

  @ApiProperty({
    description: 'Images associated with the product',
  })
  @OneToMany(() => ProductImage, (productImage) => productImage.product, {
    cascade: true,
    eager: true,
  })
  images?: ProductImage[];

  @ManyToOne(() => User, (user) => user.product, { eager: true })
  user: User;

  @BeforeInsert()
  @BeforeUpdate()
  checkSlugInser() {
    if (!this.slug) {
      this.slug = this.title;
    }

    this.slug = this.slug
      .toLowerCase()
      .replaceAll(' ', '_')
      .replaceAll("'", '');
  }
}
