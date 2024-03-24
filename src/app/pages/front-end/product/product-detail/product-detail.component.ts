import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ProductService, ProductVm} from '../../../../shared/service/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  productId: number;
  productDetail: ProductVm;
  productList: ProductVm[];
  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) { }

  ngOnInit(): void {
    this.productId = +this.route.snapshot.paramMap.get('id');
    this.productList = this.productService.products;
    this.productDetail = this.productList[this.productId];
     // eslint-disable-next-line no-console
    console.log( this.productDetail);
  }

}
