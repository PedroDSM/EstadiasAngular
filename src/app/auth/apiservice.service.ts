import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { User } from '../auth/Models/Umodel';

@Injectable({
    providedIn: 'root'
  })

  export class ApiService {
    constructor(private http: HttpClient, private cookieService:CookieService) {}
  
    login(email: string, password: string, status: string, roles_id:number) {
        return this.http.post('http://127.0.0.1:3333/auth/login', { email, password,  status, roles_id });
      }

      registro(nombre: string,email: string, password: string, status: string, roles_id:number) {
        return this.http.post('http://127.0.0.1:3333/auth/register', { nombre, email, password, status, roles_id });
      }

    
  }