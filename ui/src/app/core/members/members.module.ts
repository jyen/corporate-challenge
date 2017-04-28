import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MembersComponent } from './members.component';
import { BusyModule } from 'angular2-busy';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SportsListComponent } from './sports/sports-list/sports-list.component';
import { MembersListComponent } from './sports/members-list/members-list.component';
import { AgGridModule } from 'ag-grid-angular';

@NgModule({
  imports: [
    CommonModule,
      BusyModule,
    NgbModule,
    AgGridModule.withComponents(
        [
          MembersListComponent
        ])
  ],
  declarations: [MembersComponent, SportsListComponent, MembersListComponent]
})
export class MembersModule { }
