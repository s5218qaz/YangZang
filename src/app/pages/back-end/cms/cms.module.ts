import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CmsComponent } from '../cms/cms.component';
import { RouterModule } from '@angular/router';
import { BannerComponent } from '../banner/banner.component';
import { ProductListComponent } from '../product-list/product-list.component';


@NgModule({
  declarations: [
    CmsComponent,
    BannerComponent,
    ProductListComponent,
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class CmsModule { }
