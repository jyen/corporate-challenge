import { Component, OnInit } from '@angular/core';
import {UserService} from "../../shared/data-services/user/user.service";
import {Router} from "@angular/router";
import {AuthService} from "../../shared/auth/auth.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public currentUser;

  constructor(private userService: UserService, private authService: AuthService, private router: Router ) { }

  ngOnInit() {
    this.userService.getCurrentUser()
        .subscribe(r => {
          this.currentUser = r;
          this.authService.setCurrentUser(r);
          if(this.currentUser.organization) {
              this.router.navigate(['/core/dashboard/profile']);
          } else {
              this.router.navigate(['/core/dashboard/setup-workflow']);
          }
        })
  }

}
