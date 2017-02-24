import {Routes, RouterModule}  from '@angular/router';
import {ModuleWithProviders} from "@angular/core";

import {MembersComponent} from "./members.component";

export const membersRoutes: Routes = [
    {
        path: 'members',
        component: MembersComponent
    }

];

export const membersRouting: ModuleWithProviders = RouterModule.forChild(membersRoutes);