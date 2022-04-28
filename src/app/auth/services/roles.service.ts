import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Respuesta, Rol } from '../Models/Rmodel';

@Injectable({
  providedIn: 'root'
})
export class RolesService {

  public rols: Rol ={}
  private _refresh$ = new Subject<void>()

  constructor(private http: HttpClient) { }

  get refresh$(){
    return this._refresh$;
  }

  getAll(): Observable<any>{  
    return this.http.get<Respuesta>(environment.urlR+'roles')
  }
  getRol(id:number): Observable<any>{
    return this.http.get<Respuesta>(environment.urlR+'rol'+'/'+id)
  }
  newRol(info:Rol): Observable<any>{
    return this.http.post<Respuesta>(environment.urlR+'rol',info)
    .pipe(
      tap(() => {
        this._refresh$.next();
      })
    ); 
  }
  status(id:number): Observable<any>{
    return this.http.delete<Respuesta>(environment.urlR+'rol'+'/'+id)
  }
  Put(id:any, info: Rol): Observable<any>{
    return this.http.put<Respuesta>(environment.urlR+'rol'+'/'+id, info)
    .pipe(
      tap(() => {
        this._refresh$.next();
      })
    ); 
  }
}
