import { Component, OnInit } from '@angular/core';
import {OrganizationService} from "../../../shared/data-services/organization/organization.service";
import {UserService} from "../../../shared/data-services/user/user.service";
import {Router} from "@angular/router";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-setup-workflow',
  templateUrl: './setup-workflow.component.html',
  styleUrls: ['./setup-workflow.component.css']
})
export class SetupWorkflowComponent implements OnInit {

  public availableOrganizations;
  public selectedOrganization;

  busy: Subscription

  constructor(private organizationService: OrganizationService, private  userService: UserService,
  private router:Router) { }

  ngOnInit() {
    this.organizationService.getOrganizations()
        .subscribe(r => {
          return this.availableOrganizations = r;
        });
  }

  public selectOrganization(org) {
    this.busy = this.userService.joinOrganization(JSON.parse(org))
        .delay(1000)
        .subscribe(r => {
            this.router.navigate(['/core/dashboard/profile']);
        });

  }
}
