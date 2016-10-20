import {Routes, RouterModule}  from '@angular/router';
import {ModuleWithProviders} from "@angular/core";

import {RosterComponent} from "./roster.component";

export const rosterRoutes: Routes = [
    {
        path: 'roster',
        component: RosterComponent
    }

];

export const rosterRouting: ModuleWithProviders = RouterModule.forChild(rosterRoutes);