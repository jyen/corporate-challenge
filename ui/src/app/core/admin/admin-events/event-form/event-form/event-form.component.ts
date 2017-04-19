import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {EventService} from "../../../../../shared/data-services/event/event.service";
import {Subscription} from "rxjs";
import {Event} from "../../../../../shared/data-services/event/event";
import {OrganizationService} from "../../../../../shared/data-services/organization/organization.service";
import {AuthService} from "../../../../../shared/auth/auth.service";

@Component({
  selector: 'app-event-form',
  templateUrl: './event-form.component.html',
  styleUrls: ['./event-form.component.css']
})
export class EventFormComponent implements OnInit {

  busy: Subscription;

  existingEvent: boolean;

  disabled: boolean;

  @Input() event;

  @Output() onEventChange = new EventEmitter<boolean>();


  constructor(private organizationService: OrganizationService,
              private authService: AuthService,
              private eventService: EventService) {
  }

  ngOnInit() {
    if(!this.event) {
      this.event = new Event();
      this.existingEvent = false;
      this.disabled = false;
    } else {
      this.existingEvent = true;
      this.disabled = true;
    }

  }

  startEdit() {
    this.disabled = false;
  }

  cancel() {
    this.disabled = true;
  }

  save() {
    this.disabled = true;
  }

  addEvent(event) {
    var org = this.authService.getCurrentUser().organization;
    this.busy = this.organizationService.createEvent(org, event)
        .subscribe(() => {
          this.onEventChange.emit(true);
          this.event = new Event();
        });
  }

  editEvent(event) {
    this.busy = this.eventService.updateEvent(event)
        .subscribe(() => {
          this.onEventChange.emit(true);
        });
  }

}
