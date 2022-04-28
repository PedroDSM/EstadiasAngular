import { Component, OnInit } from '@angular/core';
import { LoadingHandler } from 'src/app/auth/Models/loading-handler';
import {FormBuilder, Validators} from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { VistasService } from 'src/app/dashboard/services/vistas.service';

@Component({
  selector: 'app-crear-view',
  templateUrl: './crear-view.component.html',
  styleUrls: ['./crear-view.component.css']
})
export class CrearViewComponent implements OnInit {

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
    categorias: ['', {
      validators: [Validators.required],
    }],
    ruta: ['', {
      validators: [Validators.required],
    }],
    status:[1],
  })
  isDisabled = false;
  error=false;

  constructor(private fb:FormBuilder, private peticion: VistasService, public dialogRef: MatDialogRef<CrearViewComponent>) { }

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

  this.peticion.newVista(this.form.value)
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
