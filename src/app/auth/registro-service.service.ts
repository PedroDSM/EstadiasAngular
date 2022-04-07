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


  
  token = this.getJwtToken()
  header = new HttpHeaders().
  append('Content-Type', 'application/json').
  append('Authorization',`Bearer ${this.token}`)
  
  
  login(email:string, password:string, status: string, roles_id:number){
    this._isLoggedIn$.next(!!this.getJwtToken());
    return this.apiService.login(email, password,  status, roles_id);
  }
  registro(nombre:string, email:string, password:string, status:string , roles_id:number){
    this._isLoggedIn$.next(!!this.getJwtToken());
    
    return this.apiService.registro(nombre, email, password, status, roles_id);
  }
  getJwtToken() {
    return this.cookieService.get('token');
  }
  isLoggedIn() {
    return !!this.getJwtToken();
  }
  private Api = 'http://127.0.0.1:3333/Users/user';
  private log = 'http://127.0.0.1:3333/Users/logout'
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
  logout(){
    this.token = this.cookieService.get('token')
    const header = new HttpHeaders()
    .set( 'Content-Type','application/json')
    .set('Authorization', `Bearer ${this.token}`) 
    this.cookieService.delete('token', '/', 'localhost', false, 'Lax')
    this.cookieService.deleteAll()
   return this.http.get<Respuesta>(this.log, {headers:header})
  }
}

