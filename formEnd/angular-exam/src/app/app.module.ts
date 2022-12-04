import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { VeXeListComponent } from './veXe/ve-xe-list/ve-xe-list.component';
import { VeXeCreateComponent } from './veXe/ve-xe-create/ve-xe-create.component';
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import { VeXeEditComponent } from './veXe/ve-xe-edit/ve-xe-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    VeXeListComponent,
    VeXeCreateComponent,
    VeXeEditComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
