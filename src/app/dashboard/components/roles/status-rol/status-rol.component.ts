import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { LoadingHandler } from 'src/app/auth/Models/loading-handler';
import { Rol } from 'src/app/auth/Models/Rmodel';
import { RolesService } from 'src/app/auth/services/roles.service';
@Component({
  selector: 'app-status-rol',
  templateUrl: './status-rol.component.html',
  styleUrls: ['./status-rol.component.css']
})
export class StatusRolComponent implements OnInit {

  loading = new LoadingHandler()
  public rols:Rol ={}
  error=false;
  isDisabled = false;

  
  constructor(private service: RolesService, public dialogRef: MatDialogRef<StatusRolComponent>,@Inject(MAT_DIALOG_DATA) public data:any) { }

  ngOnInit(): void {
    this.service.getRol(this.data.id)
    .subscribe((res:any)=>{
      this.rols = res.rol!
      console.log(res);
  })}

  closeDialog(){
    this.dialogRef.close()
  }

  status(){
    this.loading.start()
  this.service.status(this.data.id)
  .subscribe((response: any)=>{
    if(this.data.status == 0){
      this.data.status =  1
      this.isDisabled = true;
      this.loading.finish()
      console.log(response);
      setTimeout(() =>this.dialogRef.close(), 1500)
    }else if(this.data.status == 1){
      this.data.status = 0
      this.isDisabled = true;
      this.loading.finish()
      console.log(response);
      setTimeout(() =>this.dialogRef.close(), 1500)
    }
  },
  error=>{
    this.error = true
    console.log(error)
  });
}
}
