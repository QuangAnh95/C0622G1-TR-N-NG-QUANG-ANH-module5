import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './caseStudy/home/home.component';
import { HeaderComponent } from './caseStudy/header/header.component';
import { FooterComponent } from './caseStudy/footer/footer.component';
import { ListFacilityComponent } from './caseStudy/list-facility/list-facility.component';
import { EditFacilityComponent } from './caseStudy/edit-facility/edit-facility.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    ListFacilityComponent,
    EditFacilityComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
