import { Module } from '@nestjs/common';
import { SeedService } from './seed.service';
import { SeedController } from './seed.controller';
import { ProductsModule } from 'src/products/products.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/auth/entities/user.entity';

@Module({
  controllers: [SeedController],
  providers: [SeedService],
  imports: [ProductsModule, TypeOrmModule.forFeature([User])],
})
export class SeedModule {}
