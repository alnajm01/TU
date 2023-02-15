import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {
  constructor(private location: Location, private router: Router) {}
  ngOnInit(): void {}
  back(): void {
    this.location.back();
  }
}
