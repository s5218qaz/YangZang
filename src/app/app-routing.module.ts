import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { PortfolioComponent } from './pages/Portfolio/Portfolio.component';
import { ProductComponent } from './pages/product/product.component';


const routes: Routes = [
  { 
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  { path: 'home', component: HomeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'product', component: ProductComponent },
  { path: 'portfolio', component: PortfolioComponent },
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

