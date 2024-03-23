import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CmsComponent } from '../cms/cms.component';
import { LoginComponent } from '../login/login.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    LoginComponent,
    CmsComponent,
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class CmsModule { }
