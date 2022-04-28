import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject, tap } from 'rxjs';
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


}
