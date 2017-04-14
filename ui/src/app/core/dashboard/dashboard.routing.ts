import {Routes, RouterModule}  from '@angular/router';
import {ModuleWithProviders} from "@angular/core";

import {DashboardComponent} from "./dashboard.component";
import {SetupWorkflowComponent} from "./setup-workflow/setup-workflow.component";
import {ProfileComponent} from "./profile/profile.component";
import {AuthGuard} from "../../shared/auth/auth-guard.service";

export const dashboardRoutes: Routes = [
    {
        path: 'dashboard',
        component: DashboardComponent,
        children: [{
            path: 'setup-workflow',
            component: SetupWorkflowComponent
        }, {
            path: 'profile',
            component: ProfileComponent
        }]
    }

];

export const dashboardRouting: ModuleWithProviders = RouterModule.forChild(dashboardRoutes);