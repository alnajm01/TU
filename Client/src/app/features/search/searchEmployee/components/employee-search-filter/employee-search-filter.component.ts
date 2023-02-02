import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { AfmeEmployee } from 'src/app/core/models/afmeEmployee';
import { AfmeMarket } from 'src/app/core/models/afmeMarket';
import { TeamUtilityService } from 'src/app/core/services/teamUtility.service';
import { AfmeEmployeeSearchCritiria } from '../../models/afmeEmployeeSearchCritiria';

@Component({
  selector: 'employee-search-filter',
  templateUrl: './employee-search-filter.component.html',
})
export class EmployeeSearchFilterComponent {
  searchFilterForm: FormGroup;
  allAfmeEmployees: AfmeEmployee[];
  markets: AfmeMarket[];
  userNames: string[];
  @Output() emitFormDataToParentEvent: EventEmitter<AfmeEmployeeSearchCritiria> = new EventEmitter<AfmeEmployeeSearchCritiria>();
  constructor(private formBuilder: FormBuilder, private teamUtilService: TeamUtilityService) { }

  ngOnInit(): void {
    this.initilaizeFormGroup();
    this.getAfmeMarkets();
  }

  private getAfmeMarkets() {
    this.teamUtilService.getAfmeMarkets().subscribe(
      (res) => {
        this.markets = res;
      })
  }

  private initilaizeFormGroup() {
    this.searchFilterForm = this.formBuilder.group({
      userName: [null],
      peopleSoftId: [null],
      firstName: [null],
      lastName: [null],
      email: [null],
      market: [null]
    });
  }

  submit() {
    this.emitFormDataToParentEvent.emit(this.mapFormoItsTypeObject());
  }

  get form() {
    return this.searchFilterForm.controls;
  }

  private mapFormoItsTypeObject(): AfmeEmployeeSearchCritiria {
    let searchCritiria: AfmeEmployeeSearchCritiria = new AfmeEmployeeSearchCritiria();
    searchCritiria.firstName = this.form['firstName'].getRawValue();
    searchCritiria.lastName = this.form['lastName'].getRawValue();
    searchCritiria.userName = this.form['userName'].getRawValue();
    searchCritiria.peopleSoftId = this.form['peopleSoftId'].getRawValue();
    searchCritiria.email = this.form['email'].getRawValue();
    searchCritiria.market = this.form['market'].getRawValue();
    return searchCritiria;
  }
}
