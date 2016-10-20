import {Routes, RouterModule}  from '@angular/router';
import {ModuleWithProviders} from "@angular/core";

import {EventsComponent} from "./events.component";

export const eventsRoutes: Routes = [
    {
        path: 'events',
        component: EventsComponent
    }

];

export const eventsRouting: ModuleWithProviders = RouterModule.forChild(eventsRoutes);