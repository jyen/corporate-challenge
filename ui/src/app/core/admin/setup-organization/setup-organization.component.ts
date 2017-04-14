import { Component, OnInit } from '@angular/core';
import {OrganizationService} from "../../../shared/data-services/organization/organization.service";
import {Organization} from "../../../shared/data-services/organization/organization";
import {Router} from "@angular/router";

@Component({
  selector: 'app-setup-organization',
  templateUrl: './setup-organization.component.html',
  styleUrls: ['./setup-organization.component.css']
})
export class SetupOrganizationComponent implements OnInit {

  public organization: Organization;

  constructor(private organizationService: OrganizationService, private router: Router) { }

  ngOnInit() {
    this.organization = new Organization();
  }

  public createOrganization(org) {
    this.organizationService.createOrganization(org)
        .subscribe(() => {
          this.router.navigate(['/core/dashboard']);
        });
  }

}
