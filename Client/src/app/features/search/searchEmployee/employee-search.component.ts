import { Component, Input } from '@angular/core';
import { AfmeEmployee } from 'src/app/core/models/afmeEmployee';
import { TeamUtilityService } from 'src/app/core/services/teamUtility.service';
import { AfmeEmployeeSearchCritiria } from './models/afmeEmployeeSearchCritiria';

@Component({
  selector: 'employee-search',
  templateUrl: './employee-search.component.html',
})

export class EmployeeSearchComponent {
  @Input() searchResult: AfmeEmployee[];
  constructor(private teamUtilitylService: TeamUtilityService) { }

  ngOnInit(): void {
  }

  filterFormDataHandler(searchCritiria: AfmeEmployeeSearchCritiria) {
    this.teamUtilitylService.searchForEmployees(searchCritiria).subscribe(
      (res) => {
        this.searchResult = res;
      }, err => console.error(err));
  }
}
