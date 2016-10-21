import { Component, OnInit } from '@angular/core';
import {Cookie} from "ng2-cookies/src/services/cookie";
import {UserService} from "../shared/data-services/user/user.service";
import {AuthService} from "../shared/auth/auth.service";

@Component({
  selector: 'app-core',
  templateUrl: './core.component.html',
  styleUrls: ['./core.component.css']
})
export class CoreComponent implements OnInit {

  constructor(private user: UserService, private authService: AuthService) { }

  ngOnInit() {
    if (Cookie.get('token')) {
      return this.user.getCurrentUser()
          .subscribe(r => {
            console.log(r);
            this.authService.setCurrentUser(r);
          }, err => {
            this.authService.setCurrentUser(null);
          })
    }
  }

}
