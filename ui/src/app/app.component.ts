import { Component } from '@angular/core';

import {AuthService} from "./shared/data-services/auth/auth.service";
import {HttpService} from "./shared/util/http.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [
      AuthService,
      HttpService
  ]
})
export class AppComponent {
  title = 'app works!';
}
