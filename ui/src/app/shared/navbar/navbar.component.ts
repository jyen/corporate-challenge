import { Component, OnInit } from '@angular/core'
import {AuthService} from "../auth/auth.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  public logout() {
    this.authService.logout();
  }

  public isLoggedIn(): boolean {
    return this.authService.isLoggedIn();
  }

  public isAdmin(): boolean {
    return this.authService.isAdmin();
  }

  public hasOrganization(): boolean {
    return this.authService.currentUser.organization;
  }

}
