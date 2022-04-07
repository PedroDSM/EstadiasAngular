import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { RegistroServiceService } from '../registro-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  error = false

  constructor(private auth: RegistroServiceService, private router:Router, private cookieService:CookieService) { }

  ngOnInit(): void {
  }

  hide = true;
  form = new FormGroup({
    email : new FormControl('', [Validators.required, Validators.email]),
    password : new FormControl('', [Validators.required, Validators.minLength(8)]),
    status: new FormControl('Active'),
    roles_id: new FormControl('4')
  });

  public hasError = (controlName: string, errorName: string) =>{
    return this.form.controls[controlName].hasError(errorName);
  }

  send(){
    if(this.form.invalid){
      return;
    }
  
  this.auth.login(this.form.get('email')?.value, this.form.get('password')?.value,this.form.get('status')?.value, this.form.get('roles_id')?.value).subscribe((response: any)=>{
    console.log(response);
    this.router.navigate(['/dashboard']);
    this.cookieService.set('token',response.token!.token!,4,'/')
    alert(response.message)
  },
  error=>{
    this.error = true
    alert(error.error.Fail)
  });
}

}
