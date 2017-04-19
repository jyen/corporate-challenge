import {Component, Input, OnInit} from '@angular/core';
import {AuthService} from "../../../shared/auth/auth.service";
import {OrganizationService} from "../../../shared/data-services/organization/organization.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-admin-events',
  templateUrl: './admin-events.component.html',
  styleUrls: ['./admin-events.component.css']
})
export class AdminEventsComponent implements OnInit {

  public currentUser;
  public busy : Subscription;
  public organization;

  constructor(private authService: AuthService, private organizationService: OrganizationService) {
    this.organization = {};
  }

  ngOnInit() {
    this.currentUser = this.authService.getCurrentUser();
    this.busy = this.organizationService.getOrganization(this.currentUser.organization._id)
        .subscribe(r => {
          this.organization = r;
        })

  }

  onEventChange(change: boolean) {
    if (change) {
      this.busy = this.organizationService.getOrganization(this.currentUser.organization._id)
          .subscribe(r => {
            this.organization = r;
          });
    }
  }
}
