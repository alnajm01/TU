import { Component } from '@angular/core';
import { TeamUtilityService } from './core/services/teamUtility.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'team-utility';

  constructor(private teamUtilService: TeamUtilityService) { }

  ngOnInit() {
    this.setUserProfileToLocalStorage();
  }

  setUserProfileToLocalStorage() {
    if (this.isUserLocalStorageDataExists()) return;
    this.teamUtilService.getCurrentUserProfile().subscribe(
      (data) => {
        // TODO
        if (!data) {
          console.log('User not found!');
          return;
        }
        localStorage.setItem('userCompany', data.companyName.toString());
        localStorage.setItem('peopleSoftId', data.peopleSoftId.toString());
        localStorage.setItem('userName', data.userName);
      }, (err) => console.error(err)
    )
  }

  private isUserLocalStorageDataExists() {
    if (!localStorage.getItem('userName') || !localStorage.getItem('peopleSoftId') || !localStorage.getItem('userCompany')) {
      return false;
    }
    return true;
  }
}
