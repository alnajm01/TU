import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './side-bar.component.html',
})
export class SideBarComponent implements OnInit {
  @Input() _isMasterAdmin: boolean = true;
  @Input() _isMarketAdmin: boolean = true;
  @Input() _isCustomerAdmin: boolean = true;

  @Input() _usercompany: string | undefined;

  constructor() { }


  ngOnInit(): void {
    this.onrptclick();
  }
  onrptclick() {

  }
}
