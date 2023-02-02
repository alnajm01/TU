import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { HttpErrorInterceptor } from "./httpError.interceptor";
import { WindowsAuthInterceptor } from "./windowsAuth.interceptor";

export const HttpInterceptorProviders = [
    { provide: HTTP_INTERCEPTORS, useClass: WindowsAuthInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: HttpErrorInterceptor, multi: true }
]