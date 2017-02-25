import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { loginRoutes } from "./login/login.routing";
import {homeRoutes} from "./home/home.routing";
import {signupRoutes} from "./signup/signup.routing";


const appRoutes: Routes = [
    ...loginRoutes,
    ...signupRoutes,
    ...homeRoutes
];

export const appRoutingProviders: any[] = [
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);