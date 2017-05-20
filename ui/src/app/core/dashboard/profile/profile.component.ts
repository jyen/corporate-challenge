import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../shared/auth/auth.service';
import { User } from '../../../shared/data-services/user/user';
import { UserService } from '../../../shared/data-services/user/user.service';
import { Subscription } from 'rxjs';
import { OrganizationService } from '../../../shared/data-services/organization/organization.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  public currentUser: User;
  public tempUser: any;
  public adminMessage: boolean;
  busy: Subscription;
  events;
  organization;
  public editMode: boolean;

  myEvents = [];

  constructor(private authService: AuthService, private userService: UserService,
              private organizationService: OrganizationService, private router: Router) { }

  ngOnInit() {
    this.tempUser = {};

    this.busy = this.userService.getCurrentUser()
        .subscribe(r => {
          this.currentUser = r;
          this.organization = r.organization;
          this.authService.setCurrentUser(r);
          if (this.currentUser.role === 'admin') {
            this.adminMessage = true;
          }

          this.busy = this.organizationService.listEvents(this.currentUser.organization)
              .subscribe((data) => {
                this.events = data;

                for(var index in this.events) {

                  let member = this.events[index].members.filter((obj) => {
                      return obj._id === this.currentUser._id;
                  });
                  if (member.length !== 0) {
                    this.myEvents.push(this.events[index]);
                  }
                }
              });
        });
  }

  public getSportDetail(event) {
    this.router.navigate(['/core/members', {id: event._id}])
    console.log('detail');
  }

  public edit() {
    Object.assign(this.tempUser, this.currentUser);
    this.editMode = true;
  }

  public cancel() {
    this.editMode = false;
  }

  public save(user) {
    this.userService.updateMe(user)
        .subscribe((data) => {
          this.editMode = false;
          this.currentUser = this.tempUser;
        });

  };

}
