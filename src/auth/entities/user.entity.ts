import { Product } from 'src/products/entities';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity({ name: 'users' })
export class User {
  @ApiProperty({ description: 'Unique identifier for the user' })
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ApiProperty({ description: 'User email address, must be unique' })
  @Column('text', { unique: true })
  email: string;

  @ApiProperty({ description: 'User password, not selectable in queries' })
  @Column('text', { select: false })
  password: string;

  @ApiProperty({ description: 'User full name' })
  @Column('text')
  fullName: string;

  @ApiProperty({
    description: 'Indicates if the user is active',
    default: true,
  })
  @Column('boolean', {
    default: true,
  })
  isActive: boolean;

  @ApiProperty({ description: 'Roles assigned to the user', default: ['user'] })
  @Column('text', {
    array: true,
    default: ['user'],
  })
  roles: string[];

  @OneToMany(() => Product, (product) => product.user)
  product: Product;
}
