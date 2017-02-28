import { Component, OnInit } from '@angular/core';
import {OrganizationService} from "../../../shared/data-services/organization/organization.service";
import {UserService} from "../../../shared/data-services/user/user.service";

@Component({
  selector: 'app-setup-workflow',
  templateUrl: './setup-workflow.component.html',
  styleUrls: ['./setup-workflow.component.css']
})
export class SetupWorkflowComponent implements OnInit {

  public availableOrganizations;
  public selectedOrganization;

  constructor(private organizationService: OrganizationService, private  userService: UserService) { }

  ngOnInit() {
    this.organizationService.getOrganizations()
        .subscribe(r => {
          return this.availableOrganizations = r;
        });
  }

  public selectOrganization(org) {
    this.userService.joinOrganization(JSON.parse(org))
        .subscribe(r => {
          return console.log(r);
        });

  }
}
