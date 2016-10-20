import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CoreComponent} from './core.component';

import {NavbarComponent} from '../shared/navbar/navbar.component';

import {DashboardModule} from './dashboard/dashboard.module';
import {AdminModule} from "./admin/admin.module";
import {EventsModule} from "./events/events.module";
import {MembersModule} from "./members/members.module";
import {RosterModule} from "./roster/roster.module";

import {coreRouting} from "./core.routing";

@NgModule({
    imports: [
        CommonModule,
        DashboardModule,
        AdminModule,
        EventsModule,
        MembersModule,
        RosterModule,
        coreRouting
    ],
    declarations: [
        CoreComponent,
        NavbarComponent
    ]
})
export class CoreModule {
}
