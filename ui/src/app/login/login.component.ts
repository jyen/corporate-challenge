import { Component, OnInit } from '@angular/core';

import {AuthService} from "../shared/auth/auth.service";
import {Credential} from "./credential";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  busy: Subscription;


  public credential;

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.credential = new Credential();
  }

  public login(credential): void {
    this.busy = this.authService.login(credential);
  }

}
