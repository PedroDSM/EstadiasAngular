import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { BehaviorSubject, Observable, Subject, tap } from 'rxjs';
import { Login, Respuesta, User } from '../Models/Umodel';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RegistroServiceService {

  public Nuser: User ={}
  private _refresh$ = new Subject<void>()
  private _isLoggedIn$ = new BehaviorSubject<boolean>(false)
  isLoggedIn$ = this._isLoggedIn$.asObservable();
  constructor(private http: HttpClient, private cookieService:CookieService) {}


  get refresh$(){
    return this._refresh$;
  }

  token = this.getJwtToken()
  
  
  login(info:Login): Observable<any> {
    this._isLoggedIn$.next(!!this.getJwtToken())
    return this.http.post(environment.urlU+'login', info)
  }
  registro(info:User): Observable<any>{
    this._isLoggedIn$.next(!!this.getJwtToken())
    return this.http.post(environment.urlU+'register', info)
  }
  getJwtToken() {
    return this.cookieService.get('token');
  }
  isLoggedIn() {
    return !!this.getJwtToken();
  }

  getAll(): Observable<any>{  
    return this.http.get<Respuesta>(environment.urlG+'users')
  }
  getOne(){
    return this.http.get<Respuesta>(environment.urlG+'user')
  } 
  getUser(id:number): Observable<any>{
    return this.http.get<Respuesta>(environment.urlG+'user'+'/'+id)
  }
  status(id:number){
    return this.http.delete<Respuesta>(environment.urlG+'user'+'/'+id)
  }
  Put(id:any, info: User): Observable<any>{
    return this.http.put<Respuesta>(environment.urlG+'user'+'/'+id, info)
    .pipe(
      tap(() => {
        this._refresh$.next();
      })
    ); 
  }
  logout(){
    this.token = this.cookieService.get('token')
    const header = new HttpHeaders()
    .set( 'Content-Type','application/json')
    .set('Authorization', `Bearer ${this.token}`) 
    this.cookieService.delete('token', '/', 'localhost', false, 'Lax')
    this.cookieService.deleteAll()
   return this.http.get<Respuesta>(environment.urlG+'logout', {headers:header})
  }
}

