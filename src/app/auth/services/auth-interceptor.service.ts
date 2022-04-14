import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RegistroServiceService } from './registro-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService implements HttpInterceptor {

  constructor(private auth:RegistroServiceService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
    const token = this.auth.getJwtToken()

    if(!token){
      return next.handle(req)
    }
    const headers = req.clone({headers:req.headers.set('Authorization', `Bearer ${token}`)
    }); 
    return next.handle(headers);
  }
}

