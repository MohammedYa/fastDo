import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AboutComponent } from './about/about.component';
import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/products/products.component';
import { DistributorsComponent } from './components/distributors/distributors.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { StagnantComponent } from './components/stagnant/stagnant.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { FilterPipe } from './core/pipes/filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
 
    AboutComponent,
      HomeComponent,
      ProductsComponent,
      DistributorsComponent,
      CategoriesComponent,
      StagnantComponent,
      LoginComponent,
      RegisterComponent,
      NavbarComponent,
      FooterComponent,
      FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
