
import { BrowserModule } from '@angular/platform-browser';
import {NgModule, Provider} from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpModule, Http} from '@angular/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { routing } from "./app.routing";
import { CoreModule } from "./core/core.module";
import {NavbarComponent} from "./shared/navbar/navbar.component";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }