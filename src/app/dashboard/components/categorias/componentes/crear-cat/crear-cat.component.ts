import { Component, Inject, OnInit } from '@angular/core';
import { LoadingHandler } from 'src/app/auth/Models/loading-handler';
import {FormBuilder, Validators} from '@angular/forms';
import { CategoriasService } from 'src/app/dashboard/services/categorias.service';
import { MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-crear-cat',
  templateUrl: './crear-cat.component.html',
  styleUrls: ['./crear-cat.component.css']
})
export class CrearCatComponent implements OnInit {

  loading = new LoadingHandler()
  form = this.fb.group({
    nombre:['', {
      validators: [Validators.required],
    }],
    icono: ['', {
      validators: [Validators.required],
    }],
    nivel: ['', {
      validators: [Validators.required],
    }],
    status:[1],
  })
  isDisabled = false;
  error=false;

  constructor(private fb:FormBuilder, private peticion: CategoriasService, public dialogRef: MatDialogRef<CrearCatComponent>) { }

  ngOnInit(): void {
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

  this.peticion.newCategoria(this.form.value)
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
