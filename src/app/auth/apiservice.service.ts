import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
  })

  export class ApiService {
  
    constructor(private http: HttpClient) {}
  
    login(email: string, password: string) {
        return this.http.post('http://127.0.0.1:3333/auth/login', { email, password });
      }

      registro(nombre: string,email: string, password: string) {
        return this.http.post('http://127.0.0.1:3333/auth/register', { nombre, email, password });
      }
  }