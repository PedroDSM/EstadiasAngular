import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { RegistroServiceService } from 'src/app/auth/services/registro-service.service';
import { LoadingHandler } from '../Models/loading-handler';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  error = false

  loading = new LoadingHandler()

  form = this.fb.group({
    email: ['', {
      validators: [Validators.required, Validators.email],
    }],
    password:['',{
      validators:[Validators.required, Validators.minLength(8)],
    }]
  })
  hide = true;

  isDisabled = false;
  constructor(private fb:FormBuilder, private auth: RegistroServiceService, private router:Router, private cookieService:CookieService) { }

  ngOnInit(): void {
  }

  public hasError = (controlName: string, errorName: string) =>{
    return this.form.controls[controlName].hasError(errorName);
  }

  send(){

    this.loading.start()
    if(this.form.invalid){
      return;
    }
  
  this.auth.login(this.form.value).subscribe((response: any)=>{
    this.isDisabled = true;
    this.loading.finish()
    console.log(response);
    setTimeout(() =>this.router.navigate(['/dashboard']), 1000);
    this.cookieService.set('token',response.token!.token!,4,'/')
    // alert(response.message)
  },
  error=>{
    this.error = true
    alert(error.error.Fail)
  });
}

}
