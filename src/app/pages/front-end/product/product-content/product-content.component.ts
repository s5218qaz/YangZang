import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {ProductService, ProductVm} from '../../../../shared/service/product.service';

@Component({
  selector: 'app-product-content',
  templateUrl: './product-content.component.html',
  styleUrls: ['./product-content.component.scss']
})
export class ProductContentComponent implements OnInit {
  productList: ProductVm[] = [];
  constructor(
    private router: Router,
    private productService: ProductService,
  ) { }

  ngOnInit(): void {
    this.productList = this.productService.products;
  }

  openProdetailPage(index): void {
    this.router.navigate([`product/detail/${index}`]);
  }
}
