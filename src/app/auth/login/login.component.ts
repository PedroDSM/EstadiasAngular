import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { RegistroServiceService } from '../registro-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private auth: RegistroServiceService, private router:Router) { }

  ngOnInit(): void {
  }

  hide = true;
  form = new FormGroup({
    email : new FormControl('', [Validators.required, Validators.email]),
    password : new FormControl('', [Validators.required, Validators.minLength(8)]),
  });

  public hasError = (controlName: string, errorName: string) =>{
    return this.form.controls[controlName].hasError(errorName);
  }

  send(){
    if(this.form.invalid){
      return;
    }
  
  this.auth.login(this.form.get('email')?.value, this.form.get('password')?.value).subscribe((response: any)=>{
    console.log(response);
    this.router.navigate(['/dashboard']);
  });
}

}
