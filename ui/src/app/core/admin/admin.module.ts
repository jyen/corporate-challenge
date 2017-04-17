import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import {SetupOrganizationComponent} from "./setup-organization/setup-organization.component";
import { FormsModule } from '@angular/forms';
import {adminRouting} from "./admin.routing";
import { AdminEventsComponent } from './admin-events/admin-events.component';
import { AdminOrganizationComponent } from './admin-organization/admin-organization.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {BusyModule} from 'angular2-busy';


@NgModule({
  imports: [
    CommonModule,
      FormsModule,
      adminRouting,
      NgbModule,
      BusyModule
  ],
  declarations: [AdminComponent, SetupOrganizationComponent, AdminEventsComponent, AdminOrganizationComponent]
})
export class AdminModule { }
