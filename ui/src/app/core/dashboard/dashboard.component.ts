import { Component, OnInit } from '@angular/core';
import {UserService} from "../../shared/data-services/user/user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public currentUser;

  constructor(private userService: UserService, private router: Router ) { }

  ngOnInit() {
    this.userService.getCurrentUser()
        .subscribe(r => {
          this.currentUser = r;
          if(this.currentUser.organization) {
              this.router.navigate(['/core/dashboard/profile'])
          }
        })
  }

}
