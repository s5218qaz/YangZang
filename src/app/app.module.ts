import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { ProductSectionComponent } from './blocks/product-section/product-section.component';
import { ProfileSectionComponent } from './blocks/profile-section/profile-section.component';
import { IndexNavComponent } from './components/index-nav/index-nav.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ProductSectionComponent,
    ProfileSectionComponent,
    IndexNavComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
