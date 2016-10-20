import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { loginRoutes } from "./login/login.routing";
import {homeRoutes} from "./home/home.routing";


const appRoutes: Routes = [
    ...loginRoutes,
    ...homeRoutes
];

export const appRoutingProviders: any[] = [
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);