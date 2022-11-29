import {RouterModule, Routes} from "@angular/router";
import {ListCategoryComponent} from "./list-category/list-category.component";
import {CreateCategoryComponent} from "./create-category/create-category.component";
import {EditCategoryComponent} from "./edit-category/edit-category.component";
import {DeleteCategoryComponent} from "./delete-category/delete-category.component";
import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";

const routes: Routes = [
  {path: '', component: ListCategoryComponent},
  {path: 'create', component: CreateCategoryComponent},
  {path: 'edit/:categoryId', component: EditCategoryComponent},
  {path: 'delete/:categoryId', component: DeleteCategoryComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes), CommonModule],
  exports: [RouterModule]
})
export class CategoryRoutingModule { }
