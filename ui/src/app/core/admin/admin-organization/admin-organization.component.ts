import { Component, OnInit } from '@angular/core';
import {OrganizationService} from "../../../shared/data-services/organization/organization.service";
import {AuthService} from "../../../shared/auth/auth.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-admin-organization',
  templateUrl: './admin-organization.component.html',
  styleUrls: ['./admin-organization.component.css']
})
export class AdminOrganizationComponent implements OnInit {

  public currentUser;
  public organization;

  busy: Subscription;
  public edit: boolean;

  constructor(private organizationService: OrganizationService, private authService: AuthService) { }

  ngOnInit() {
    this.currentUser = this.authService.getCurrentUser();
    this.busy = this.organizationService.getOrganization(this.currentUser.organization._id)
        .subscribe(r => {
          this.organization = r;
        })

  }

  saveEdit(org) {
     this.busy = this.organizationService.updateOrganization(org)
        .delay(1000)
        .subscribe(() => {
         this.edit = false;
        });
  }

  startEdit() {
      this.edit = true;
  }

  cancel() {
      this.edit = false;
  }

}
