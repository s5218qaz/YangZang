import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { ProductSectionComponent } from './blocks/product-section/product-section.component';
import { ProfileSectionComponent } from './blocks/profile-section/profile-section.component';
import { IndexNavComponent } from './layout/index-nav/index-nav.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { NavBarComponent } from './layout/nav-bar/nav-bar.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ProductComponent } from './pages/product/product.component';
import { ProfileComponent } from './pages/profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ProductSectionComponent,
    ProfileSectionComponent,
    IndexNavComponent,
    HomeComponent,
    NavBarComponent,
    ContactComponent,
    ProductComponent,
    ProfileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
