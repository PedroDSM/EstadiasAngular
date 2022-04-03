import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { BehaviorSubject } from 'rxjs';
import { ApiService } from './apiservice.service';
import { Respuesta, User } from './Models/Umodel';

@Injectable({
  providedIn: 'root'
})
export class RegistroServiceService {
  public Nuser: User ={}
  private _isLoggedIn$ = new BehaviorSubject<boolean>(false)
  isLoggedIn$ = this._isLoggedIn$.asObservable();
  
  constructor(private apiService: ApiService,private http: HttpClient, private cookieService:CookieService) {}


    
  token = this.cookieService.get('token')
  header = new HttpHeaders().
  append('Content-Type', 'application/json').
  append('Authorization',`Bearer ${this.token}`)
  
  
  login(email:string, password:string){
    this._isLoggedIn$.next(true);
    return this.apiService.login(email, password);
  }
  registro(nombre:string, email:string, password:string){
    this._isLoggedIn$.next(true);
    return this.apiService.registro(nombre, email, password);
  }
  getJwtToken() {
    return this.cookieService.get('token');
  }
  isLoggedIn() {
    return !!this.getJwtToken();
  }
  private Api = 'http://127.0.0.1:3333/Users/user';
  getAll(){
    return this.http.get<Respuesta>(this.Api, {headers:this.header})
  }
  getOne(indice:any){
    return this.http.get<Respuesta>(this.Api+'/'+indice, {headers:this.header})
  }
  delete(indice:any){
    return this.http.delete<Respuesta>(this.Api+'/'+indice, {headers:this.header})
  }
  update(indice:any, info: User){
    return this.http.put<Respuesta>(this.Api+'/'+indice, info, {headers:this.header})
  }
}

