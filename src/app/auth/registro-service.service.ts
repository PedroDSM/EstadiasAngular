import { Injectable } from '@angular/core';
import { ApiService } from './apiservice.service';

@Injectable({
  providedIn: 'root'
})
export class RegistroServiceService {

  constructor(private apiService: ApiService) {}

  login(email:string, password:string){
    return this.apiService.login(email, password);
  }
  registro(nombre:string, email:string, password:string){
    return this.apiService.registro(nombre, email, password);
  }
}

