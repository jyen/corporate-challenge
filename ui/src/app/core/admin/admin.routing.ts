import {Routes, RouterModule}  from '@angular/router';
import {ModuleWithProviders} from "@angular/core";

import {AdminComponent} from "./admin.component";
import {SetupOrganizationComponent} from "./setup-organization/setup-organization.component";

export const adminRoutes: Routes = [
    {
        path: 'admin',
        component: AdminComponent
    }, {
        path: 'admin-setup-organization',
        component: SetupOrganizationComponent
    }


];

export const adminRouting: ModuleWithProviders = RouterModule.forChild(adminRoutes);