import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MembersComponent } from './members.component';
import { BusyModule } from 'angular2-busy';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,
      BusyModule,
    NgbModule,
  ],
  declarations: [MembersComponent]
})
export class MembersModule { }
