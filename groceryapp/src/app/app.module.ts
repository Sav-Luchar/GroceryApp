import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppGroceryComponent } from './app-grocery/app-grocery.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome'; 
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  declarations: [
    AppComponent,
    AppGroceryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFontAwesomeModule, 
    FormsModule, BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppGroceryComponent,
  AppComponent]
})
export class AppModule { }
