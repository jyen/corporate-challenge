
import { BrowserModule } from '@angular/platform-browser';
import {NgModule, Provider} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CustomFormsModule } from 'ng2-validation'
import {HttpModule, Http} from '@angular/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { routing } from "./app.routing";
import { CoreModule } from "./core/core.module";
import {NavbarComponent} from "./shared/navbar/navbar.component";
import {SignupComponent} from "./signup/signup.component";
import {AuthGuard} from "./shared/auth/auth-guard.service";
import {AuthService} from "app/shared/auth/auth.service";
import {HttpService} from "./shared/util/http.service";
import {UserService} from "app/shared/data-services/user/user.service";
import {OrganizationService} from "./shared/data-services/organization/organization.service";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {BusyModule} from 'angular2-busy';
import {EventService} from "./shared/data-services/event/event.service";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    NavbarComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CustomFormsModule,
    HttpModule,
    routing,
    CoreModule,
    BrowserAnimationsModule,
    BusyModule,
    NgbModule.forRoot()
  ],
  providers: [
    AuthService,
    HttpService,
    EventService,
    UserService,
    AuthGuard,
    OrganizationService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }