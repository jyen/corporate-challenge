import { Component, OnInit } from '@angular/core';
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
  event: Event;

  constructor(private organizationService: OrganizationService, private authService: AuthService) {
    this.event = new Event();
  }

  ngOnInit() {

  }

  addEvent(event) {
    var org = this.authService.getCurrentUser().organization;
    this.busy = this.organizationService.createEvent(org, event)
        .subscribe();
  }

}
