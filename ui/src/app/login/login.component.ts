import { Component, OnInit } from '@angular/core';

import {AuthService} from "../shared/data-services/auth/auth.service";
import {HttpService} from "../shared/util/http.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [AuthService, HttpService]
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService) {
  }

  ngOnInit() {
    this.credential = {};
  }

  public login(credential) {
    console.log(credential);
    this.authService.login(credential);
  }

}
