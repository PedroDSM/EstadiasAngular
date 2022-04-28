import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { User } from 'src/app/auth/Models/Umodel';
import { RegistroServiceService } from 'src/app/auth/services/registro-service.service';
import { LoadingHandler } from 'src/app/auth/Models/loading-handler';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent implements OnInit {

  loading = new LoadingHandler()
  public us:User ={}
  error=false;
  isDisabled = false;

  constructor(private service: RegistroServiceService, public dialogRef: MatDialogRef<StatusComponent>,@Inject(MAT_DIALOG_DATA) public data:any) { }

  ngOnInit(): void {
    this.service.getUser(this.data.id)
    .subscribe((res:any)=>{
      this.us = res.usuario!
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
    alert(error.error.Fail)
  });
}
}
