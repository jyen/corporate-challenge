import { Component, OnInit } from '@angular/core';
import { OrganizationService } from '../../shared/data-services/organization/organization.service';
import { AuthService } from '../../shared/auth/auth.service';
import { Subscription } from 'rxjs';
import { GridOptions, RowNode } from 'ag-grid/main';

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

  }

  ngOnInit() {
    this.gridOptions = <GridOptions> {
      enableColResize: true,
      enableSorting: true,
      enableFilter: true
    };
    this.gridOptions.onGridReady = () => {
      this.gridOptions.api.sizeColumnsToFit();
    };

    this.gridOptions.onGridSizeChanged = () => {
      this.gridOptions.api.sizeColumnsToFit();
    };

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
    this.currentUser = this.authService.getCurrentUser();
    this.busy = this.organizationService.getUsers(this.currentUser.organization._id)
        .subscribe(r => {
          this.users = r;
          this.gridOptions.rowData = this.users;
        });
  }

  public exportToCSV() {
    this.gridOptions.api.exportDataAsCsv();
  }

}
