import { Injectable } from '@nestjs/common';
import { ProductsService } from 'src/products/products.service';
import { initialData } from './data/seed-data';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/auth/entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class SeedService {
  constructor(
    private readonly productService: ProductsService,
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}

  async runSeed() {
    await this.deleteTables();

    const adminUser = await this.insertUsers();

    await this.insertNewProducts(adminUser);
    return 'SEED EXECUTED';
  }

  private async deleteTables() {
    await this.productService.deleteAllProducts();
    const queryBuilder = this.userRepository.createQueryBuilder();
    await queryBuilder.delete().where({}).execute();
  }

  private async insertUsers() {
    const users = initialData.users;

    const insertPromises: Promise<any>[] = [];
    users.forEach((user) => {
      insertPromises.push(this.userRepository.save(user));
    });

    await Promise.all(insertPromises);

    return users[0] as User;
  }

  private async insertNewProducts(user: User) {
    await this.productService.deleteAllProducts();

    const products = initialData.products;

    const insertPromises: Promise<any>[] = [];
    products.forEach((product) => {
      insertPromises.push(this.productService.create(product, user));
    });

    await Promise.all(insertPromises);
  }
}
