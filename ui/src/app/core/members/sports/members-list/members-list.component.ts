import { Component, AfterViewInit, Input } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { GridOptions } from 'ag-grid';

@Component({
  selector: 'app-members-list',
  templateUrl: './members-list.component.html',
  styleUrls: ['./members-list.component.css']
})
export class MembersListComponent implements ICellRendererAngularComp, AfterViewInit {
  public gridOptions: GridOptions;
  public parentRecord: any;

  constructor() {
    this.gridOptions = <GridOptions>{};
    this.gridOptions.enableSorting = true;
    this.gridOptions.enableFilter = true;
    this.gridOptions.enableColResize = true;
    this.gridOptions.columnDefs = this.createColumnDefs();
  }

  agInit(params: any): void {
    this.parentRecord = params.node.parent.data;
  }

  // Sometimes the gridReady event can fire before the angular component is ready to receive it, so in an angular
  // environment its safer to on you cannot safely rely on AfterViewInit instead before using the API
  ngAfterViewInit() {
    this.gridOptions.api.setRowData(this.parentRecord.members);
    this.gridOptions.api.sizeColumnsToFit();
  }

  public export(name) {
    var params = {
      fileName: name
    };
    this.gridOptions.api.exportDataAsCsv(params);
  }

  private createColumnDefs() {
    return [
        {headerName: 'Name', field: 'name'},
        {headerName: 'Email', field: 'email'},
        {headerName: 'Phone', field: 'phone'},
        {headerName: 'Gender', field: 'gender'},
        {headerName: 'Participant Type', field: 'participantType'}
        ];
  }


  // if we don't do this, then the mouse wheel will be picked up by the main
  // grid and scroll the main grid and not this component. this ensures that
  // the wheel move is only picked up by the text field
  consumeMouseWheelOnDetailGrid($event) {
    $event.stopPropagation();
  }

  onButtonClick() {
    window.alert('Sample button pressed!!');
  }

}
