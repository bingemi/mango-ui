import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MangoRouter } from "./app.router";

import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { NavigationComponent } from './components/navigation/navigation.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    MangoRouter
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
