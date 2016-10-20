import { Component, OnInit } from '@angular/core';

import {AuthService} from "../shared/data-services/auth/auth.service";
import {Cookie} from "ng2-cookies";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  credential;

  constructor(private authService: AuthService,
  private router: Router) {
  }

  ngOnInit() {
    this.credential = {
      email: '',
      password: ''
    };
  }

  public login(credential): void {
    this.authService.login(credential)
        .subscribe(r => {
          Cookie.set('token', r.token);
          this.router.navigate(['/core/dashboard']);
        });
  }

}
