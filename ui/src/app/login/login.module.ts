import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { FormsModule } from '@angular/forms';
import { BusyModule } from 'angular2-busy';

@NgModule({
  imports: [
    CommonModule,
      FormsModule,
      BusyModule
  ],
  declarations: [LoginComponent]
})
export class LoginModule { }
