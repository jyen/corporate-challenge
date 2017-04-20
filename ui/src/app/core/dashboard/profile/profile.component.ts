import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../shared/auth/auth.service';
import { User } from '../../../shared/data-services/user/user';
import { UserService } from '../../../shared/data-services/user/user.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  public currentUser: User;
  public adminMessage: boolean;
  busy: Subscription;

  constructor(private authService: AuthService, private userService: UserService) { }

  ngOnInit() {

    this.busy = this.userService.getCurrentUser()
        .subscribe(r => {
          this.currentUser = r;
          this.authService.setCurrentUser(r);
          if (this.currentUser.role === 'admin') {
            this.adminMessage = true;
          }
        });
  }

}
