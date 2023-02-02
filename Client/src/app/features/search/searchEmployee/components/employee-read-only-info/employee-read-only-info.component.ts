import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AfmeEmployee } from 'src/app/core/models/afmeEmployee';
import { TeamUtilityService } from 'src/app/core/services/teamUtility.service';

@Component({
  selector: 'app-employee-read-only-info',
  templateUrl: './employee-read-only-info.component.html'
})

export class EmployeeReadOnlyInfoComponent {

  employeeUserName: string;
  employee: AfmeEmployee = new AfmeEmployee();

  constructor(private route: ActivatedRoute, private teamUtilService: TeamUtilityService) { }

  ngOnInit(): void {
    this.getQueryParamteres();
    this.getEmployeeInfoById();
  }


  getQueryParamteres() {
    this.route.queryParams.subscribe(params => {
      this.employeeUserName = params['userName'];
    });
  }

  getEmployeeInfoById() {
    this.teamUtilService.getEmployeeInfoByUserName(this.employeeUserName).subscribe(
      (res) => {
        this.employee = res;
      }, (err) => console.error(err));
  }
}
