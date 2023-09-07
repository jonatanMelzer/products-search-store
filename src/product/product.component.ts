import { CommonModule } from '@angular/common';
import { Component, effect, inject } from '@angular/core';
import { MatSliderModule } from '@angular/material/slider';
import { ProductStore } from './product-store.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  standalone: true,
  imports: [CommonModule, MatSliderModule],
})
export class ProductComponent {
  private store = inject(ProductStore);
  minPrice = this.store.minPrice;
  maxPrice = this.store.maxPrice;
  products = this.store.products;

  constructor() {
    effect(() => {
      console.log('load');
      this.store.load();
    });
  }

  updateRange(minPrice: number, maxPrice: number): void {
    this.store.updateRange(minPrice, maxPrice);
  }
}
