import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/front-end/home/home.component';
import { ContactComponent } from './pages/front-end/contact/contact.component';
import { PortfolioComponent } from './pages/front-end/Portfolio/Portfolio.component';
import { ProductComponent } from './pages/front-end/product/product.component';
import { ProductDetailComponent } from './pages/front-end/product/product-detail/product-detail.component';
import { ProductContentComponent } from './pages/front-end/product/product-content/product-content.component';
import { LoginComponent } from './pages/login/login.component';
import { CmsComponent } from './pages/back-end/cms/cms.component';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'product',
    component: ProductComponent,
    children: [
      {
        path: '',
        component: ProductContentComponent
      },
      {
        path: 'detail/:id',
        component: ProductDetailComponent
      }
      ]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'cms',
    component: CmsComponent
  }
  // {
  //   path: 'portfolio',
  //   component: PortfolioComponent
  // }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

