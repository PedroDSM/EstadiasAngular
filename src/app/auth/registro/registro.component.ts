import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { RegistroServiceService } from '../registro-service.service';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  hide = true;
  
  constructor(private peticion: RegistroServiceService, private router: Router) { }

  ngOnInit() {

  }

  form = new FormGroup({
    email : new FormControl('', [Validators.required, Validators.email]),
    nombre : new FormControl('', [Validators.required, Validators.minLength(5)]),
    password : new FormControl('', [Validators.required, Validators.minLength(8)]),
  });

  public hasError = (controlName: string, errorName: string) =>{
    return this.form.controls[controlName].hasError(errorName);
  }

  send(){
    if(this.form.invalid){
      return;
    }
  
  this.peticion.registro(this.form.get('nombre')?.value, this.form.get('email')?.value, this.form.get('password')?.value)
  .subscribe((response: any)=>{
    console.log(response);
    this.router.navigate(['/dashboard']);
  });
}
}
