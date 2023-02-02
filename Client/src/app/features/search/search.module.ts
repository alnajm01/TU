import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchRoutingModule } from './search-routing.module';
import { NgSelectModule } from '@ng-select/ng-select';
import { ReactiveFormsModule } from '@angular/forms';
import { EmployeeSearchComponent } from './searchEmployee/employee-search.component';
import { EmployeeSearchFilterComponent } from './searchEmployee/components/employee-search-filter/employee-search-filter.component';
import { TableModule } from 'primeng/table';
import { EmployeeSearchResultComponent } from './searchEmployee/components/employee-search-result/employee-search-result.component';
import { EmployeeReadOnlyInfoComponent } from './searchEmployee/components/employee-read-only-info/employee-read-only-info.component';

@NgModule({
  declarations: [
    /*
    * Employee
    */
    EmployeeSearchComponent,
    EmployeeSearchFilterComponent,
    EmployeeSearchResultComponent,
    EmployeeReadOnlyInfoComponent,
  ],
  exports: [

  ],
  imports: [
    CommonModule,
    SearchRoutingModule,
    NgSelectModule,
    ReactiveFormsModule,
    TableModule
  ]
})
export class SearchModule { }
