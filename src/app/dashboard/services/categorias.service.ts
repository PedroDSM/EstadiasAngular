import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Respuesta, Categoria } from 'src/app/auth/Models/Cmodel';
@Injectable({
  providedIn: 'root'
})
export class CategoriasService {

  public categoria: Categoria ={}
  private _refresh$ = new Subject<void>()

  constructor(private http: HttpClient) { }

  get refresh$(){
    return this._refresh$;
  }

  getAll(): Observable<any>{  
    return this.http.get<Respuesta>(environment.urlC+'categorias')
  }
  getCategoria(id:number): Observable<any>{
    return this.http.get<Respuesta>(environment.urlC+'categoria'+'/'+id)
  }
  newCategoria(info:Categoria): Observable<any>{
    return this.http.post<Respuesta>(environment.urlC+'categoria',info)
    .pipe(
      tap(() => {
        this._refresh$.next();
      })
    ); 
  }
  status(id:number): Observable<any>{
    return this.http.delete<Respuesta>(environment.urlC+'categoria'+'/'+id)
  }
  Put(id:any, info: Categoria): Observable<any>{
    return this.http.put<Respuesta>(environment.urlC+'categoria'+'/'+id, info)
    .pipe(
      tap(() => {
        this._refresh$.next();
      })
    ); 
  }

}
