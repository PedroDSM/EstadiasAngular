import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ApiService } from './apiservice.service';

@Injectable({
  providedIn: 'root'
})
export class RegistroServiceService {

  private _isLoggedIn$ = new BehaviorSubject<boolean>(false)
  isLoggedIn$ = this._isLoggedIn$.asObservable();
  
  constructor(private apiService: ApiService) {}

  login(email:string, password:string){
    this._isLoggedIn$.next(true);
    return this.apiService.login(email, password);
  }
  registro(nombre:string, email:string, password:string){
    this._isLoggedIn$.next(true);
    return this.apiService.registro(nombre, email, password);
  }
}

