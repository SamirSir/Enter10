import { AppRouting } from './app.routing';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent
  ],

  imports: [
    BrowserModule,
    AppRouting
  ],

  providers: [],

  bootstrap: [AppComponent]
})

export class AppModule { }
