import { Component, Inject, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { LoadingHandler } from 'src/app/auth/Models/loading-handler';
import { RolesService } from 'src/app/auth/services/roles.service';
@Component({
  selector: 'app-update-rol',
  templateUrl: './update-rol.component.html',
  styleUrls: ['./update-rol.component.css']
})
export class UpdateRolComponent implements OnInit {
  actionBtn : string = "Save"
  form = this.fb.group({
    nombre:['', {
      validators: [Validators.required, Validators.minLength(5)],
    }],
    descripcion: ['', {
      validators: [Validators.required],
    }]
  })

  isDisabled=false

  loading = new LoadingHandler()

  error=false

  constructor(private fb:FormBuilder, public dialogRef: MatDialogRef<UpdateRolComponent>,@Inject(MAT_DIALOG_DATA) public data:any, 
  private peticion: RolesService) { }
  ngOnInit(): void {

  if(this.data){
    this.actionBtn = "Update"
    this.form.controls['nombre'].setValue(this.data.nombre)
    this.form.controls['descripcion'].setValue(this.data.descripcion)
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
    return;
  }
  this.peticion.Put(this.data.id,this.form.value)
  .subscribe((res:any)=>{
      this.isDisabled = true;
      console.log(res);
      this.form.reset()
      this.loading.finish()
      setTimeout(() =>this.dialogRef.close(), 1000)
    },
    error=>{
      this.loading.finish()
      this.error = true
      console.log(error);
    });
}
}
