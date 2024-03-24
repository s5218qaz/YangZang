import { Component, OnInit } from '@angular/core';
import {ProductService, ProductVm} from '../../../shared/service/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  productList: ProductVm[];
  productTitle = '';
  productDescription = '';
  status = '';
  currentIndex = -1;
  productImgs: string[] = [];
  constructor(
    private productService: ProductService
  ) { }

  ngOnInit(): void {
    this.productList = this.productService.products;
  }

  openDialog(actionStatus: string, index: number): void{
     this.status = actionStatus;
     if (this.status === 'edit') {
       this.productTitle = this.productList[index].title;
       this.productDescription = this.productList[index].description;
       this.productImgs = this.productList[index].imgUrls;
       this.currentIndex = index;
     } else {
       this.productTitle = '';
       this.productDescription = '';
       this.currentIndex = -1;
     }
  }

  setProduct(product: ProductVm): void {
     if (this.status === 'edit') {
       this.productList.splice(this.currentIndex, 1, product);
     } else {
       this.productList.push(product);
     }
  }

}
