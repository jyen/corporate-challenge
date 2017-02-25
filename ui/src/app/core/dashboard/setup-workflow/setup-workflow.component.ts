import { Component, OnInit } from '@angular/core';
import {OrganizationService} from "../../../shared/data-services/organization/organization.service";

@Component({
  selector: 'app-setup-workflow',
  templateUrl: './setup-workflow.component.html',
  styleUrls: ['./setup-workflow.component.css']
})
export class SetupWorkflowComponent implements OnInit {

  public availableOrganizations;
  public selectedOrganization;

  constructor(private organizationService: OrganizationService) { }

  ngOnInit() {
    this.organizationService.getOrganizations()
        .subscribe(r => {
          return this.availableOrganizations = r;
        });
  }

  public selectOrganization(org) {
    console.log(org);
    this.organizationService.joinOrganization(JSON.parse(org))
        .subscribe(r => {
          return console.log(r);
        });

  }
}
