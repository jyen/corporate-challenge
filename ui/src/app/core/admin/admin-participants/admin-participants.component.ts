import { Component, OnInit } from '@angular/core';
import { OrganizationService } from '../../../shared/data-services/organization/organization.service';
import { AuthService } from '../../../shared/auth/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-admin-participants',
  templateUrl: './admin-participants.component.html',
  styleUrls: ['./admin-participants.component.css']
})
export class AdminParticipantsComponent implements OnInit {

  users;
  currentUser;
  busy: Subscription;
  counts;

  constructor(private organizationService: OrganizationService, private authService: AuthService) { }

  ngOnInit() {
    this.users = [];
    this.counts = {};
    this.counts['S'] = 0;
    this.counts['M'] = 0;
    this.counts['L'] = 0;
    this.counts['XL'] = 0;
    this.counts['XXL'] = 0;
    this.counts['XXXL'] = 0;
    this.currentUser = this.authService.getCurrentUser();


    this.busy = this.organizationService.getUsers(this.currentUser.organization._id)
        .subscribe(r => {
          this.users = r;
          this.getShirtCounts(this.users);
        });
  }

  public getShirtCounts(users) {

    for (var i = 0; i < users.length; i++) {
      var user = users[i];
      console.log(user);
      if (user.shirtSize === 'S') {
        this.counts['S']++;
      } else if (user.shirtSize === 'M') {
        this.counts['M']++;
      } else if (user.shirtSize === 'L') {
        this.counts['L']++;
      } else if (user.shirtSize === 'XL') {
        this.counts['XL']++;
      } else if (user.shirtSize === 'XXL') {
        this.counts['XXL']++;
      } else if (user.shirtSize === 'XXXL') {
        this.counts['XXXL']++;
      }
    }
    console.log(this.counts);

  }

}
