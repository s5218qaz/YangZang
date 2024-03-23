import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CmsComponent } from '../cms/cms.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    CmsComponent,
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class CmsModule { }
