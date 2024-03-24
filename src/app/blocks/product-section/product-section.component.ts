import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {ProductService, ProductVm} from '../../shared/service/product.service';

@Component({
  selector: 'app-product-section',
  templateUrl: './product-section.component.html',
  styleUrls: ['./product-section.component.scss']
})
export class ProductSectionComponent implements OnInit {
  productList: ProductVm[] = [];
  constructor(
    private  router: Router,
    private productService: ProductService,
  ) { }

  ngOnInit(): void {
    this.productList = this.productService.products.slice(0, 6);
  }

  openProdetailPage(index: number): void {
    this.router.navigate([`product/detail/${index}`]);
  }

}
