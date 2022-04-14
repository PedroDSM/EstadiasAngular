import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { RegistroServiceService } from '../auth/services/registro-service.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate {

  constructor(private auth:RegistroServiceService, private router:Router){}

  canActivate(){
    return this.canLoad();
  }
  
  canLoad(){
      if (!this.auth.isLoggedIn()) {
        this.router.navigate(['/auth/login']);
      }
      return this.auth.isLoggedIn();
  }
  
}
