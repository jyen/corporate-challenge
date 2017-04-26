import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { OrganizationService } from '../../shared/data-services/organization/organization.service';
import { AuthService } from '../../shared/auth/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {

  currentUser;
  events;
  busy: Subscription;

  constructor(private router: Router, private route: ActivatedRoute,
              private organizationService: OrganizationService,
              private authService: AuthService) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      let eventId = params['id'];
      this.currentUser = this.authService.getCurrentUser();
      this.busy = this.organizationService.getOrganization(this.currentUser.organization._id)
          .subscribe((data) => {
            this.events = data.events;
          });
    });
  }

}
