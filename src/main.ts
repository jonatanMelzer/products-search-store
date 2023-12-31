import 'zone.js/dist/zone';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { ProductComponent } from './product/product.component';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule, ProductComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<app-product></app-product>`,
})
export class App {}

bootstrapApplication(App);
