import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { RegistroServiceService } from '../auth/services/registro-service.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuardGuard implements CanActivate {

  constructor(private auth:RegistroServiceService, private router:Router){}

  canActivate(){
    return this.canLoad();
  }
  
  canLoad() {
    if (this.auth.isLoggedIn()) {
      this.router.navigate(['/dashboard', 'v1/dashboard']);
    }
    return !this.auth.isLoggedIn();
  }
  

  
}
