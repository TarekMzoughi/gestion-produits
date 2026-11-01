import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class ProductsService {
  private products = [
    { id: 1, name: 'Laptop', price: 2500 },
    { id: 2, name: 'Souris', price: 40 },
  ];

  findAll() {
    return this.products;
  }

  findOne(id: number) {
    const p = this.products.find((x) => x.id === id);
    if (!p) {
      throw new NotFoundException('Not Found');
    }
    return p;
  }

  create(product: { name: string; price: number }) {
    const newProduct = {
      id:
        this.products.length > 0
          ? Math.max(...this.products.map((p) => p.id)) + 1
          : 1,
      ...product,
    };
    this.products.push(newProduct);
    return newProduct;
  }
}
