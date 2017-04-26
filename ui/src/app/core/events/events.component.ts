import { Component, OnInit } from '@angular/core';
import { OrganizationService } from '../../shared/data-services/organization/organization.service';
import { AuthService } from '../../shared/auth/auth.service';
import { Subscription } from 'rxjs';
import { EventService } from '../../shared/data-services/event/event.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  currentUser;

  events;

  busy: Subscription

  displayAlert

  constructor(private organizationService: OrganizationService,
              private authService: AuthService,
              private eventService: EventService) { }

  ngOnInit() {
    this.displayAlert = false;
    this.currentUser = this.authService.getCurrentUser();
    console.log(this.currentUser);
    this.busy = this.organizationService.listEvents(this.currentUser.organization)
        .subscribe((data) => {
          this.events = data;
          if (this.events.length == 0) {
            this.displayAlert = true;
          }
          for(var index in this.events) {
            if(this.events[index].members.includes(this.currentUser._id)) {
              this.events[index].selected = true;
            }
          }
        });
  }

  updateEvent(event) {
    if(event.selected) {
      this.busy = this.eventService.joinEvent(event)
          .subscribe(() => {

          });
    } else {
      this.busy = this.eventService.leaveEvent(event)
          .subscribe(() => {

          });
    }

  }


}
