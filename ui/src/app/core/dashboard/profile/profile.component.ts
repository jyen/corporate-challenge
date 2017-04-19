import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../shared/auth/auth.service';
import { User } from '../../../shared/data-services/user/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  public currentUser: User;
  public adminMessage: boolean;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.currentUser = this.authService.getCurrentUser();
    if (this.currentUser.role === 'admin') {
      this.adminMessage = true;
    }
  }

}
