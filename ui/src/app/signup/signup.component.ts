import { Component, OnInit } from '@angular/core';
import {AuthService} from "../shared/auth/auth.service";
import {User} from "../shared/data-services/user/user";
import {OrganizationService} from "../shared/data-services/organization/organization.service";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  public user;
  // public availableOrganizations;
  // public selectedOrganization;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.user = new User();
    // this.organizationService.getOrganizations()
    //     .subscribe(r => {
    //       this.availableOrganizations = r;
    //     });
  }

  public signup(user): void {
    user.password = 'ca';
    this.authService.createUser(user);
  }

}
