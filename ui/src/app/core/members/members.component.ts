import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { EventService } from '../../shared/data-services/event/event.service';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute,
              private eventService: EventService) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      let eventId = params['id'];
      this.eventService.getEvent(eventId)
          .subscribe((data) => {
            console.log(data);
          });
    });
  }

}
