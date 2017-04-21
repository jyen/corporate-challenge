import { Component, OnInit } from '@angular/core';
import { OrganizationService } from '../../shared/data-services/organization/organization.service';
import { AuthService } from '../../shared/auth/auth.service';
import { Subscription } from 'rxjs';
import { GridOptions } from 'ag-grid';

@Component({
  selector: 'app-roster',
  templateUrl: './roster.component.html',
  styleUrls: ['./roster.component.css']
})
export class RosterComponent implements OnInit {

  users;
  currentUser;
  busy: Subscription;

  private gridOptions: GridOptions;


  constructor(private organizationService: OrganizationService, private authService: AuthService) {
    this.gridOptions = {};
    this.gridOptions.columnDefs = [
      {
        headerName: "Name",
        field: "name",
        width: 300
      },
      {
        headerName: "Email",
        field: "email",
        width: 300
      },
      {
        headerName: "Gender",
        field: "gender",
        width: 80
      },
      {
        headerName: "Type",
        field: "participantType",
        width: 100
      },
      {
        headerName: "Phone",
        field: "phone",
        width: 100
      }
    ];

  }

  ngOnInit() {
    this.currentUser = this.authService.getCurrentUser();
    this.busy = this.organizationService.getUsers(this.currentUser.organization._id)
        .subscribe(r => {
          this.users = r;
          this.gridOptions.rowData = this.users;
        });
  }

}
