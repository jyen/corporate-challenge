import {Routes, RouterModule}  from '@angular/router';
import {ModuleWithProviders} from "@angular/core";

import {AdminComponent} from "./admin.component";

export const adminRoutes: Routes = [
    {
        path: 'admin',
        component: AdminComponent
    }

];

export const adminRouting: ModuleWithProviders = RouterModule.forChild(adminRoutes);