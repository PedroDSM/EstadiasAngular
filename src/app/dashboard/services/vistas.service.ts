import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Respuesta, Vista } from 'src/app/auth/Models/Vmodel';

@Injectable({
  providedIn: 'root'
})
export class VistasService {

  public vista: Vista ={}
  private _refresh$ = new Subject<void>()

  constructor(private http: HttpClient) { }

  get refresh$(){
    return this._refresh$;
  }

  getAll(): Observable<any>{  
    return this.http.get<Respuesta>(environment.urlV+'vistas')
  }
  getVista(id:number): Observable<any>{
    return this.http.get<Respuesta>(environment.urlV+'vista'+'/'+id)
  }
  newVista(info:Vista): Observable<any>{
    return this.http.post<Respuesta>(environment.urlV+'vista',info)
    .pipe(
      tap(() => {
        this._refresh$.next();
      })
    ); 
  }
  status(id:number): Observable<any>{
    return this.http.delete<Respuesta>(environment.urlV+'vista'+'/'+id)
  }
  Put(id:any, info: Vista): Observable<any>{
    return this.http.put<Respuesta>(environment.urlV+'vista'+'/'+id, info)
    .pipe(
      tap(() => {
        this._refresh$.next();
      })
    ); 
  }
}
