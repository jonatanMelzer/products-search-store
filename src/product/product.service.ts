import { Injectable } from '@angular/core';
import { ProductModel } from './product-model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  async find(minPrice: number, maxPrice: number): Promise<ProductModel[]> {
    const products = [
      new ProductModel('Product 1', 50),
      new ProductModel('Product 2', 100),
      new ProductModel('Product 3', 250),
      new ProductModel('Product 4', 500),
      new ProductModel('Product 5', 1500),
    ];

    return Promise.resolve(
      products.filter((p) => p.price >= minPrice && p.price <= maxPrice)
    );
  }
}
