import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { GridOptions } from 'ag-grid';
import { MembersListComponent } from '../members-list/members-list.component';

@Component({
  selector: 'app-sports-list',
  templateUrl: './sports-list.component.html',
  styleUrls: ['./sports-list.component.css']
})
export class SportsListComponent implements AfterViewInit, OnInit {
  public gridOptions: GridOptions;

  @Input() data;
  @Input() id;

  constructor() {
    this.gridOptions = <GridOptions>{};
    this.gridOptions.columnDefs = this.createColumnDefs();
  }

  ngOnInit() {
    if (this.data) {
      this.gridOptions.rowData = this.data;
    } else {
      this.gridOptions.rowData = [];
    }
  }

  private createColumnDefs() {
    return [
      {
        headerName: 'Name', field: 'name',
        // left column is going to act as group column, with the expand / contract controls
        cellRenderer: 'group',
        // we don't want the child count - it would be one each time anyway as each parent
        // not has exactly one child node
        cellRendererParams: {suppressCount: true}
      },
      {
        headerName: 'Info', field: 'info',
      }
    ];
  }

  public isFullWidthCell(rowNode) {
    return rowNode.level === 1;
  }

  // Sometimes the gridReady event can fire before the angular component is ready to receive it, so in an angular
  // environment its safer to on you cannot safely rely on AfterViewInit instead before using the API
  ngAfterViewInit() {
    this.gridOptions.api.sizeColumnsToFit();
  }

  public getFullWidthCellRenderer() {
    return MembersListComponent;
  }

  public getRowHeight(params) {
    var rowIsDetailRow = params.node.level === 1;
    // return 100 when detail row, otherwise return 25
    return rowIsDetailRow ? 200 : 25;
  }

  public getNodeChildDetails(record) {
    if (record.members && record.members.length !== 0) {
      return {
        group: true,
        // the key is used by the default group cellRenderer
        key: record.name,
        // provide ag-Grid with the children of this group
        children: [record.members],
        // for demo, expand the third row by default
        expanded: record._id === this.id
      };
    } else {
      return null;
    }
  }



}
