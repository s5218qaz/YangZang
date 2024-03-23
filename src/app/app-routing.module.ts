import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { PortfolioComponent } from './pages/Portfolio/Portfolio.component';
import { ProductComponent } from './pages/product/product.component';
import { ProductDetailComponent } from './pages/product/product-detail/product-detail.component';
import { ProductContentComponent } from './pages/product/product-content/product-content.component';
import { LoginComponent } from './pages/login/login.component';
import { CmsComponent } from './pages/cms/cms.component';


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

