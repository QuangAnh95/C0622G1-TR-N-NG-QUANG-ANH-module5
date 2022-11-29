import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListProductComponent} from "./product/product/list-product/list-product.component";
import {CreateProductComponent} from "./product/product/create-product/create-product.component";
import {CategoryModule} from "./product/category/category.module";
import {CommonModule} from "@angular/common";
import {ProductModule} from "./product/product/product.module";


const routes: Routes = [
  {path: 'product', loadChildren: () => ProductModule},
  {path: 'category', loadChildren: () => CategoryModule}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule {
}
