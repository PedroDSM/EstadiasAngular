import { Component, Inject, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { LoadingHandler } from 'src/app/auth/Models/loading-handler';
import { CategoriasService } from 'src/app/dashboard/services/categorias.service';

@Component({
  selector: 'app-update-cat',
  templateUrl: './update-cat.component.html',
  styleUrls: ['./update-cat.component.css']
})
export class UpdateCatComponent implements OnInit {

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
    }]
  })
  isDisabled = false;
  error=false;

  constructor(private fb:FormBuilder, private peticion: CategoriasService,public dialogRef: MatDialogRef<UpdateCatComponent>,@Inject(MAT_DIALOG_DATA) public data:any, ) { }

  ngOnInit(): void {

    if(this.data){
      this.form.controls['nombre'].setValue(this.data.nombre)
      this.form.controls['icono'].setValue(this.data.icono)
      this.form.controls['nivel'].setValue(this.data.nivel)
    }
  
    }
  
  
    public hasError = (controlName: string, errorName: string) =>{
      return this.form.controls[controlName].hasError(errorName);
    }
  
    closeDialog(){
      this.dialogRef.close()
    }

    updateU(){
      this.loading.start()
    
      if(this.form.invalid){
        this.loading.finish()
      }
      this.peticion.Put(this.data.id,this.form.value)
      .subscribe((res:any)=>{
          this.isDisabled = true;
          console.log(res);
          this.form.reset()
          this.loading.finish()
          setTimeout(() =>this.dialogRef.close(), 1000)
        });
    }
}
