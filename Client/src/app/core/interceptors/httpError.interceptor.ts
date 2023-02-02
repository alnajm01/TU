import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { SpinnerService } from '../spinner/spinner.service';
import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {
  constructor(private spinnerService: SpinnerService) { }

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    this.spinnerService.requestStarted();
    return this.handler(next, request);
  }

  handler(next: HttpHandler, request: HttpRequest<any>) {
    return next.handle(request).pipe(
      tap(
        (Any_event) => {
          if (Any_event instanceof HttpResponse) {
            this.spinnerService.requestEnded();
          }
        },
        (error: HttpErrorResponse) => {
          this.spinnerService.resetSpinner();
          throw error;
        }
      )
    );
  }
  //Not used till now
  generateFakeUid() {
    return Math.random().toString(36).substring(2) + Date.now().toString(36);
  }
}
