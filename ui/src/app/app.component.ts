import { Component } from '@angular/core';

import {AuthService} from "./shared/auth/auth.service";
import {HttpService} from "./shared/util/http.service";
import {UserService} from "./shared/data-services/user/user.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [
    AuthService,
    HttpService,
    UserService
  ]
})
export class AppComponent {
  title = 'app works!';
}
