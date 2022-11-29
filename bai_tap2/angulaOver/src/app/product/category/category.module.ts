import {NgModule} from "@angular/core";
import {ListCategoryComponent} from "./list-category/list-category.component";
import {DeleteCategoryComponent} from "./delete-category/delete-category.component";
import {EditCategoryComponent} from "./edit-category/edit-category.component";
import {CreateCategoryComponent} from "./create-category/create-category.component";
import {CommonModule} from "@angular/common";
import {ReactiveFormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";
import {CategoryRoutingModule} from "./category_routing.module";

@NgModule({
  declarations: [ListCategoryComponent, DeleteCategoryComponent, EditCategoryComponent, CreateCategoryComponent],
  imports: [
    CommonModule,
    CategoryRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule
  ]
})
export class CategoryModule {
}
