import { Component,OnInit, Output } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { RegistroServiceService } from 'src/app/auth/services/registro-service.service';
import { LoadingHandler } from '../Models/loading-handler';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  hide = true;
  loading = new LoadingHandler()
  form = this.fb.group({
    nombre:['', {
      validators: [Validators.required, Validators.minLength(5)],
    }],
    email: ['', {
      validators: [Validators.required, Validators.email],
    }],
    password:['',{
      validators:[Validators.required, Validators.minLength(8)],
    }],
    status:['Active'],
    roles_id:['1']
  })
  isDisabled = false;

  constructor( private fb:FormBuilder,  private peticion: RegistroServiceService, private router: Router, private cookieService:CookieService) { }

  ngOnInit() {

  }

  public hasError = (controlName: string, errorName: string) =>{
    return this.form.controls[controlName].hasError(errorName);
  }

  send(){
    this.loading.start()
    if(this.form.invalid){
      return;
    }

  this.peticion.registro(this.form.value)
  .subscribe((response: any)=>{
    this.isDisabled = true;
    this.loading.finish()
    console.log(response);
    setTimeout(() =>this.router.navigate(['/dashboard']), 1000);
    this.cookieService.set('token',response.token!.token!,1,'/')
  });
}
}
