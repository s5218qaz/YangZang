import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CmsComponent } from '../cms/cms.component';
import { RouterModule } from '@angular/router';
import { BannerComponent } from '../banner/banner.component';
import { ProductListComponent } from '../product-list/product-list.component';
import { ProductDetailDialogComponent } from '../product-list/product-detail-dialog/product-detail-dialog.component';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    CmsComponent,
    BannerComponent,
    ProductListComponent,
    ProductDetailDialogComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
  ]
})
export class CmsModule { }
