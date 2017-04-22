import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventsComponent } from './events.component';
import { BusyModule } from 'angular2-busy';
import { FormsModule } from '@angular/forms';
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";

@NgModule({
  imports: [
    NgbModule,
    CommonModule,
    BusyModule,
    FormsModule
  ],
  declarations: [EventsComponent]
})
export class EventsModule { }
