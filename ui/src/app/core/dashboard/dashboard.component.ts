import { Component, OnInit } from '@angular/core';
import {UserService} from "../../shared/data-services/user/user.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public currentUser;

  constructor(private userService: UserService ) { }

  ngOnInit() {
    this.userService.getCurrentUser()
        .subscribe(r => {
          this.currentUser = r;
        })
  }

}
