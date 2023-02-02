import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeReadOnlyInfoComponent } from './searchEmployee/components/employee-read-only-info/employee-read-only-info.component';
import { EmployeeSearchComponent } from './searchEmployee/employee-search.component';

const routes: Routes = [
  { path: 'employee', component: EmployeeSearchComponent },
  { path: 'employee/readonly-info', component: EmployeeReadOnlyInfoComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class SearchRoutingModule { }
