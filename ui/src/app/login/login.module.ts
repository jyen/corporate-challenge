import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import {AuthService} from "../shared/data-services/auth/auth.service";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [LoginComponent]
})
export class LoginModule { }
