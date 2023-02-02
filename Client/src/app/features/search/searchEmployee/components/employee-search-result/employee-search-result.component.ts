import { Component, Input } from '@angular/core';
import { AfmeEmployee } from 'src/app/core/models/afmeEmployee';

@Component({
  selector: 'employee-search-result',
  templateUrl: './employee-search-result.component.html'
})

export class EmployeeSearchResultComponent {
  cols: any[];
  @Input() searchResult: AfmeEmployee[];

  ngOnInit(): void {
    this.initilaizeTableColumns();
  }

  initilaizeTableColumns() {
    this.cols = [
      { field: 'id', header: 'Id', link: true, display: 'true' },
      { field: 'displayName', header: 'Display Name', display: 'true' },
      { field: 'fullName', header: 'Full Name', display: 'true' },
      { field: 'peopleSoftId', header: 'PeopleSoft Id', display: 'true' },
      { field: 'mobileNumber', header: 'Mobile Number', display: 'true' },
      { field: 'companyName', header: 'Company Name', display: 'true' },
      { field: 'userName', header: 'User Name', display: 'false' },
    ];
  }
}
