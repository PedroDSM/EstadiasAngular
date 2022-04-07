import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { RegistroServiceService } from '../../../../../auth/registro-service.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  hide = true;
  
  constructor(private peticion: RegistroServiceService, private router: Router, private cookieService:CookieService) { }

  ngOnInit() {
  }
    formu = new FormGroup({
    email : new FormControl('', [Validators.required, Validators.email]),
    nombre : new FormControl('', [Validators.required, Validators.minLength(5)]),
    password : new FormControl('', [Validators.required, Validators.minLength(8)]),
    status: new FormControl('Active'),
    roles_id: new FormControl('4'),
  });

  public hasError = (controlName: string, errorName: string) =>{
    return this.formu.controls[controlName].hasError(errorName);
  }

  send(){
    if(this.formu.invalid){
      return;
    }
  
  this.peticion.registro(this.formu.get('nombre')?.value, this.formu.get('email')?.value, this.formu.get('password')?.value,this.formu.get('status')?.value, this.formu.get('rol_id')?.value)
  .subscribe((response: any)=>{
    console.log(response);
    this.router.navigate(['/dashboard']);
    this.cookieService.set('token',response.token!.token!,1,'/')
  });
}

}
