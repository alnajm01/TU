import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { SpinnerService } from './spinner.service';

@Component({
  selector: 'spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.css'],
})

export class SpinnerComponent implements OnInit {
  constructor(
    private spinnerService: SpinnerService,
    private cdRef: ChangeDetectorRef
  ) { }

  showSpinner = false;
  ngOnInit(): void {
    this.init();
  }

  init() {
    this.spinnerService.getSpinnerObserver().subscribe((status) => {
      this.showSpinner = status === 'start';
      this.cdRef.detectChanges();
    });
  }
}
