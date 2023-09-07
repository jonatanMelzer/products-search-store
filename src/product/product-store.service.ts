import { inject, Injectable } from '@angular/core';
import { signalStore, withState } from '@ngrx/signals';
import { ProductModel } from './product-model';
import { ProductService } from './product.service';

const initialState = {
  products: [] as ProductModel[],
  minPrice: 0,
  maxPrice: 1500,
};

@Injectable({ providedIn: 'root' })
export class ProductStore extends signalStore(withState(initialState)) {
  private productService = inject(ProductService);

  updateRange(minPrice: number, maxPrice: number): void {
    this.$update({
      minPrice: minPrice,
      maxPrice: maxPrice,
    });
  }

  async load(): Promise<void> {
    const products = await this.productService.find(
      this.minPrice(),
      this.maxPrice()
    );
    this.$update({ products: products });
  }
}
