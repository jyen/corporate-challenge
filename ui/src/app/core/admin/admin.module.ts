import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import {SetupOrganizationComponent} from "./setup-organization/setup-organization.component";
import { FormsModule } from '@angular/forms';
import {adminRouting} from "./admin.routing";

@NgModule({
  imports: [
    CommonModule,
      FormsModule,
      adminRouting
  ],
  declarations: [AdminComponent, SetupOrganizationComponent]
})
export class AdminModule { }
