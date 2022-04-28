import { Component, Inject, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import { RegistroServiceService } from 'src/app/auth/services/registro-service.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { LoadingHandler } from 'src/app/auth/Models/loading-handler';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  hide = true;
  actionBtn : string = "Save"
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
    roles_id:['']
  })

  isDisabled=false

  loading = new LoadingHandler()

  error=false

  constructor(private fb:FormBuilder, public dialogRef: MatDialogRef<UpdateComponent>,@Inject(MAT_DIALOG_DATA) public data:any, 
  private peticion: RegistroServiceService) { }
  ngOnInit(): void {

  if(this.data){
    this.actionBtn = "Update"
    this.form.controls['nombre'].setValue(this.data.nombre)
    this.form.controls['email'].setValue(this.data.email)
    this.form.controls['roles_id'].setValue(this.data.roles_id)
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
    console.log('error')
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
  

