import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './caseStudy/home/home.component';
import { HeaderComponent } from './caseStudy/header/header.component';
import { FooterComponent } from './caseStudy/footer/footer.component';
import { ListFacilityComponent } from './caseStudy/facility/list-facility/list-facility.component';
import { EditFacilityComponent } from './caseStudy/facility/edit-facility/edit-facility.component';
import { CreateFacilityComponent } from './caseStudy/facility/create-facility/create-facility.component';
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    ListFacilityComponent,
    EditFacilityComponent,
    CreateFacilityComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
