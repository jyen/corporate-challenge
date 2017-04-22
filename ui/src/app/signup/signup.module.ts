import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupComponent } from './signup.component';
import { BusyModule } from 'angular2-busy';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
      BusyModule
  ],
  declarations: [SignupComponent]
})
export class SignupModule { }
