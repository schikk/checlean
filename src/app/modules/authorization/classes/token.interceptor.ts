import { Injectable } from '@angular/core';
import { AuthService } from '../auth.service';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()

export class TokenInerceptor implements HttpInterceptor {

  constructor(private auth: AuthService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    if (this.auth.isAuthenticated()) {
      req = req.clone({
        setHeaders: {
          Authorization: this.auth.getToken()
        }
      });
    }

    return next.handle(req)
  }

}
