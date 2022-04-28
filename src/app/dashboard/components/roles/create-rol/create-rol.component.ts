import { Component, Inject, OnInit } from '@angular/core';
import { LoadingHandler } from 'src/app/auth/Models/loading-handler';
import {FormBuilder, Validators} from '@angular/forms';
import { RolesService } from 'src/app/auth/services/roles.service';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-create-rol',
  templateUrl: './create-rol.component.html',
  styleUrls: ['./create-rol.component.css']
})
export class CreateRolComponent implements OnInit {
  loading = new LoadingHandler()
  form = this.fb.group({
    nombre:['', {
      validators: [Validators.required, Validators.minLength(5)],
    }],
    descripcion: ['', {
      validators: [Validators.required],
    }],
    status:[1],
  })
  isDisabled = false;
  error=false;

  constructor( private fb:FormBuilder, private peticion: RolesService, public dialogRef: MatDialogRef<CreateRolComponent>) { }

  ngOnInit() {

  }

  public hasError = (controlName: string, errorName: string) =>{
    return this.form.controls[controlName].hasError(errorName);
  }

  send(){
    try{
    this.loading.start()
    if(this.form.invalid){
      return;
    }

  this.peticion.newRol(this.form.value)
  .subscribe((response: any)=>{
    this.isDisabled = true;
    this.loading.finish()
    console.log(response);
    setTimeout(() =>this.dialogRef.close(), 1000)
  });
}catch{
  this.error = true
  console.log(this.error);
}
}
}
