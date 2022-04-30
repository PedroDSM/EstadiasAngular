import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, tap } from 'rxjs';
import { Respuesta } from 'src/app/auth/Models/Cmodel';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class InicioService {
  private _refresh$ = new Subject<void>()
  
  constructor(private http: HttpClient) { }

  get refresh$(){
    return this._refresh$;
  }
  getAll(): Observable<any>{  
    return this.http.get<Respuesta>(environment.urlC+'categories')
    .pipe(
      tap(()=>{
        this._refresh$.next()
      })
      )
  }
  // getVistas(): Observable<any>{  
  //   return this.http.get<Respuesta>(environment.urlC+'categories')
  //   .pipe(
  //     tap(()=>{
  //       this._refresh$.next()
  //     })
  //     )
  //   }
}
