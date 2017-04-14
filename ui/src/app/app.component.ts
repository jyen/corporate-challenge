import { Component } from '@angular/core';

import {AuthService} from "./shared/auth/auth.service";
import {HttpService} from "./shared/util/http.service";
import {UserService} from "./shared/data-services/user/user.service";
import {OrganizationService} from "./shared/data-services/organization/organization.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
}
