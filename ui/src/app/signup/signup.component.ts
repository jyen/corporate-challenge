import { Component, OnInit } from '@angular/core';
import {AuthService} from "../shared/auth/auth.service";
import {User} from "../shared/data-services/user/user";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  public user;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.user = new User();
  }

  public signup(user): void {
    this.authService.createUser(user);
  }

}
