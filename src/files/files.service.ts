import { join } from 'path';
import { existsSync } from 'fs';
import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class FilesService {
  getProductImagePath(imageName: string) {
    const imagePath = join(__dirname, '../../static/products', imageName);

    if (!existsSync(imagePath))
      throw new NotFoundException(`No product found with image ${imageName}`);

    return imagePath;
  }
}
