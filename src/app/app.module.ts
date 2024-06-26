import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FooterComponent } from './layout/footer/footer.component';
import { ProductSectionComponent } from './blocks/product-section/product-section.component';
import { PortfolioSectionComponent } from './blocks/Portfolio-section/Portfolio-section.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './pages/front-end/home/home.component';
import { NavBarComponent } from './layout/nav-bar/nav-bar.component';
import { ContactComponent } from './pages/front-end/contact/contact.component';
import { PortfolioComponent } from './pages/front-end//Portfolio/Portfolio.component';
import { IntroduceSectionComponent } from './blocks/introduce-section/introduce-section.component';
import { GoToTopBtnComponent } from './components/go-to-top-btn/go-to-top-btn.component';
import { HomePageHeaderComponent } from './layout/home-page-header/home-page-header.component';
import { ProductModule } from './pages/front-end/product/product.module';
import { CmsModule } from './pages/back-end/cms/cms.module';
import { LoginComponent } from './pages/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginService } from './shared/service/login.service';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    ProductSectionComponent,
    PortfolioSectionComponent,
    HomeComponent,
    NavBarComponent,
    ContactComponent,
    PortfolioComponent,
    IntroduceSectionComponent,
    GoToTopBtnComponent,
    HomePageHeaderComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProductModule,
    CmsModule,
    ReactiveFormsModule
  ],
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
