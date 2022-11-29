import {RouterModule, Routes} from "@angular/router";
import {ListProductComponent} from "./list-product/list-product.component";
import {CreateProductComponent} from "./create-product/create-product.component";
import {EditProductComponent} from "./edit-product/edit-product.component";
import {DeleteProductComponent} from "./delete-product/delete-product.component";
import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";

const routes: Routes = [
  {path: '', component: ListProductComponent},
  {path: 'create', component: CreateProductComponent},
  {path: 'edit/:productId', component: EditProductComponent},
  {path: 'delete/:productId', component: DeleteProductComponent},
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class Product_routingModule {

}
