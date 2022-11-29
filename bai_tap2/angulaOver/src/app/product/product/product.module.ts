import {NgModel, ReactiveFormsModule} from "@angular/forms";
import {NgModule} from "@angular/core";
import {ListProductComponent} from "./list-product/list-product.component";
import {DeleteProductComponent} from "./delete-product/delete-product.component";
import {EditProductComponent} from "./edit-product/edit-product.component";
import {CreateProductComponent} from "./create-product/create-product.component";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";
import {Product_routingModule} from "./product_routing.module";

@NgModule({
  declarations:[ListProductComponent,DeleteProductComponent,EditProductComponent,CreateProductComponent],
  imports:[
    CommonModule,
    Product_routingModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule
  ]
})
export class ProductModule {

}
