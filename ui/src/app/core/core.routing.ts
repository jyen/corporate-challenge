import {Routes, RouterModule} from '@angular/router';
import {ModuleWithProviders} from "@angular/core";

import {CoreComponent} from "./core.component";

import {dashboardRoutes} from "./dashboard/dashboard.routing";
import {membersRoutes} from "./members/members.routing";
import {eventsRoutes} from "./events/events.routing";
import {adminRoutes} from "./admin/admin.routing";
import {rosterRoutes} from "./roster/roster.routing";
import {AuthGuard} from "../shared/auth/auth-guard.service";


export const coreRoutes: Routes = [
    {
        path: '',
        redirectTo: 'core/dashboard',
        pathMatch: 'full'
    },
    {
        path: 'core',
        component: CoreComponent,
        children: [
            ...dashboardRoutes,
            ...membersRoutes,
            ...eventsRoutes,
            ...adminRoutes,
            ...rosterRoutes
        ]

    }

];

export const coreRouting: ModuleWithProviders = RouterModule.forChild(coreRoutes);