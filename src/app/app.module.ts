import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FooterComponent } from './layout/footer/footer.component';
import { ProductSectionComponent } from './blocks/product-section/product-section.component';
import { PortfolioSectionComponent } from './blocks/Portfolio-section/Portfolio-section.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { NavBarComponent } from './layout/nav-bar/nav-bar.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ProductComponent } from './pages/product/product.component';
import { PortfolioComponent } from './pages/Portfolio/Portfolio.component';
import { IntroduceSectionComponent } from './blocks/introduce-section/introduce-section.component';
import { GoToTopBtnComponent } from './components/go-to-top-btn/go-to-top-btn.component';
import { HomePageHeaderComponent } from './layout/home-page-header/home-page-header.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    ProductSectionComponent,
    PortfolioSectionComponent,
    HomeComponent,
    NavBarComponent,
    ContactComponent,
    ProductComponent,
    PortfolioComponent,
    IntroduceSectionComponent,
    GoToTopBtnComponent,
    HomePageHeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
