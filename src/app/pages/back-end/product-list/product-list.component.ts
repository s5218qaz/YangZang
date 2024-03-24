import { Component, OnInit } from '@angular/core';
import {ProductService, ProductVm} from '../../../shared/service/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  productList: ProductVm[];
  constructor(
    private productService: ProductService
  ) { }

  ngOnInit(): void {
    this.productList = this.productService.products;
  }

}
