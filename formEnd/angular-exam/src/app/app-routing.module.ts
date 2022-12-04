import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HeaderComponent} from "./header/header.component";
import {FooterComponent} from "./footer/footer.component";
import {VeXeListComponent} from "./veXe/ve-xe-list/ve-xe-list.component";
import {VeXeCreateComponent} from "./veXe/ve-xe-create/ve-xe-create.component";
import {VeXeEditComponent} from "./veXe/ve-xe-edit/ve-xe-edit.component";


const routes: Routes = [
  {path: '', component: VeXeListComponent},
  {path: 'create', component: VeXeCreateComponent},
  {path: 'edit/:id', component: VeXeEditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  declarations: [
    HeaderComponent,
    FooterComponent
  ],
  exports: [RouterModule, HeaderComponent, FooterComponent]
})
export class AppRoutingModule {
}
