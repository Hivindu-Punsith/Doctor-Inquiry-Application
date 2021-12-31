import { Injectable, Injector } from '@angular/core';
import {
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
} from '@angular/common/http';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService implements HttpInterceptor {
  constructor(private injector: Injector) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    let authService = this.injector.get(DataService);
    let tokenizedReq = req.clone({
      setHeaders: {
        //Authorization: `Bearer ${authService.getToken()}`,
      },
    });
    return next.handle(tokenizedReq);
  }
}
