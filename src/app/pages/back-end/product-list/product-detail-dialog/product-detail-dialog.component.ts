import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ProductVm} from '../../../../shared/service/product.service';

@Component({
  selector: 'app-product-detail-dialog',
  templateUrl: './product-detail-dialog.component.html',
  styleUrls: ['./product-detail-dialog.component.scss']
})
export class ProductDetailDialogComponent implements OnInit {
  @Input() dialogStatus = '';
  @Input() productTitle = '';
  @Input() productDescription = '';
  @Input() productImgs: string[] = [];
  @Output() emitProductData = new EventEmitter<ProductVm>();
  constructor() { }

  ngOnInit(): void {

  }

  saveData(): void {
    const productData: ProductVm = {
      title: this.productTitle,
      description: this.productDescription,
      imgUrls: this.dialogStatus === 'edit' ? this.productImgs : ['img1', 'img2', 'img3']
    };
    this.productTitle = '';
    this.productDescription = '';
    this.emitProductData.emit(productData);
  }

}
