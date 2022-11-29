import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalculatorComponent } from './calculator/calculator.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { ColorComponent } from './color/color/color.component';
import { ArticleComponent } from './hacker_news/article/article.component';
import { FooterComponent } from './hacker_news/footer/footer/footer.component';
import { NavbarComponent } from './hacker_news/navbar/navbar/navbar.component';
import { FormLoginComponent } from './form-login/form-login.component';
import { FormRegisterComponent } from './form-register/form-register.component';
import { CreateProductComponent } from './product/product/create-product/create-product.component';
import { ListProductComponent } from './product/product/list-product/list-product.component';
import { CreateCategoryComponent } from './product/category/create-category/create-category.component';
import { DeleteCategoryComponent } from './product/category/delete-category/delete-category.component';
import { EditCategoryComponent } from './product/category/edit-category/edit-category.component';
import { ListCategoryComponent } from './product/category/list-category/list-category.component';
import { DeleteProductComponent } from './product/product/delete-product/delete-product.component';
import { EditProductComponent } from './product/product/edit-product/edit-product.component';
import { NavBarComponent } from './product/header/nav-bar/nav-bar.component';
import {HttpClientModule} from "@angular/common/http";
import {Product_routingModule} from "./product/product/product_routing.module";

@NgModule({
  declarations: [
    AppComponent,
    // CalculatorComponent,
    // ColorComponent,
    // ArticleComponent,
    // FooterComponent,
    // NavbarComponent,
    // FormLoginComponent,
    // FormRegisterComponent,
    CreateProductComponent,
    ListProductComponent,
    CreateCategoryComponent,
    DeleteCategoryComponent,
    EditCategoryComponent,
    ListCategoryComponent,
    DeleteProductComponent,
    EditProductComponent,
    NavBarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    Product_routingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
