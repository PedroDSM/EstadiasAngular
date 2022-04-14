import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { RegistroServiceService } from '../auth/services/registro-service.service';

@Injectable({
  providedIn: 'root'
})
export class RoleGuardGuard implements CanActivate {
  constructor(private peticion: RegistroServiceService, private router: Router){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      this.peticion.getOne().subscribe(respuesta=>{
        const isAuthorized =  route.data['expectedRoles'].includes(respuesta.usuario?.roles_id);
        if(!isAuthorized){
          this.router.navigateByUrl('error');
        }
        return isAuthorized
      })

    return true;
  }
  
}


