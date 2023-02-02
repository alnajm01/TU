import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import { HomeComponent } from './features/home/home.component';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { HttpInterceptorProviders } from './core/interceptors';
import { SpinnerModule } from './core/spinner/spinner.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    LayoutModule,
    NgSelectModule,
    SpinnerModule
  ],
  providers: [HttpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
