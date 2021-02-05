import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DemoMaterialModule } from './material-module';
import { SearchComponent } from './Components/search/search.component';
import { HttpClientModule } from '@angular/common/http';
import { Search2Component } from './Components/search2/search2.component';
import { Search3Component } from './Components/search3/search3.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    Search2Component,
    Search3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DemoMaterialModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
