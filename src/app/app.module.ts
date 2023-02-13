import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';


import { AppComponent } from './app.component';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { ButtonComponent } from './components/button/button.component';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { ProductComponent } from './components/product/product.component';
import { BasicAdvancedComponent } from './components/basic-advanced/basic-advanced.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    ButtonComponent,
    ProductsListComponent,
    ProductComponent,
    BasicAdvancedComponent

  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
