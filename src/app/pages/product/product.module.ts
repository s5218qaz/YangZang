import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductContentComponent } from './product-content/product-content.component';
import { ProductComponent } from '../product/product.component';


@NgModule({
  declarations: [
    ProductComponent,
    ProductDetailComponent,
    ProductContentComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ProductModule { }
