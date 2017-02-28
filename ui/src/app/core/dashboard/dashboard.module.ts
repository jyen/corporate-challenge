import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import {dashboardRouting} from "./dashboard.routing";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import { FormsModule } from '@angular/forms';

import { SetupWorkflowComponent } from './setup-workflow/setup-workflow.component';
import { SetupOrganizationComponent } from './setup-organization/setup-organization.component';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  imports: [
    CommonModule,
    dashboardRouting,
    NgbModule,
    FormsModule
  ],
  declarations: [DashboardComponent, SetupWorkflowComponent, SetupOrganizationComponent, ProfileComponent]
})
export class DashboardModule { }
