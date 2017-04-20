import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventsComponent } from './events.component';
import { BusyModule } from 'angular2-busy';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
      BusyModule,
      FormsModule
  ],
  declarations: [EventsComponent]
})
export class EventsModule { }
