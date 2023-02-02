import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BodyComponent } from './body/body.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { SideBarComponent } from './side-bar/side-bar.component';



@NgModule({
  declarations: [
    BodyComponent,
    FooterComponent,
    HeaderComponent,
    SideBarComponent
  ],
  exports: [
    BodyComponent,
    FooterComponent,
    HeaderComponent,
    SideBarComponent
  ],
  imports: [
    CommonModule
  ]
})
export class LayoutModule { }
