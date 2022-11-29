import {NgModule} from "@angular/core";
import {NavBarComponent} from "./nav-bar/nav-bar.component";
import {CommonModule} from "@angular/common";
import {HeaderRoutingModule} from "./header_routing.module";

@NgModule({
  declarations: [NavBarComponent],
  exports: [
    NavBarComponent
  ],
  imports: [
    CommonModule,
    HeaderRoutingModule
  ]
})
export class HeaderModule { }
