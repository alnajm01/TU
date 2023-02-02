import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpinnerComponent } from './spinner.component';

@NgModule({
  imports: [CommonModule],
  declarations: [SpinnerModule.rootComponent],
  exports: [SpinnerModule.rootComponent],
  entryComponents: [SpinnerModule.rootComponent],
})
export class SpinnerModule {
  static rootComponent = SpinnerComponent;
}
