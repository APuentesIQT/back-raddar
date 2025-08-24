import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';

@Injectable()
export class ProductsService {
  private products: Product[] = [
    new Product(1, 'Laptop HP', 'Laptop HP Pavilion 15.6"', 15000, 10),
    new Product(
      2,
      'Mouse Logitech',
      'Mouse inalámbrico Logitech MX Master',
      1200,
      25,
    ),
    new Product(3, 'Teclado Mecánico', 'Teclado mecánico RGB', 2500, 15),
  ];
  private nextId = 4;

  findAll(): Product[] {
    return this.products;
  }

  findOne(id: number): Product {
    const product = this.products.find((p) => p.id === id);
    if (!product) {
      throw new NotFoundException(`Producto con ID ${id} no encontrado`);
    }
    return product;
  }

  create(createProductDto: CreateProductDto): Product {
    const product = new Product(
      this.nextId++,
      createProductDto.nombre,
      createProductDto.descripcion,
      createProductDto.precio,
      createProductDto.stock,
    );
    this.products.push(product);
    return product;
  }

  update(id: number, updateProductDto: UpdateProductDto): Product {
    const productIndex = this.products.findIndex((p) => p.id === id);
    if (productIndex === -1) {
      throw new NotFoundException(`Producto con ID ${id} no encontrado`);
    }

    const product = this.products[productIndex];
    Object.assign(product, updateProductDto);
    return product;
  }

  remove(id: number): void {
    const productIndex = this.products.findIndex((p) => p.id === id);
    if (productIndex === -1) {
      throw new NotFoundException(`Producto con ID ${id} no encontrado`);
    }
    this.products.splice(productIndex, 1);
  }
}
