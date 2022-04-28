import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { LoadingHandler } from 'src/app/auth/Models/loading-handler';
import { VistasService } from 'src/app/dashboard/services/vistas.service';
import { Vista } from 'src/app/auth/Models/Vmodel';

@Component({
  selector: 'app-status-view',
  templateUrl: './status-view.component.html',
  styleUrls: ['./status-view.component.css']
})
export class StatusViewComponent implements OnInit {

  loading = new LoadingHandler()
  public vis:Vista ={}
  error=false;
  isDisabled = false;

  constructor(private service: VistasService, public dialogRef: MatDialogRef<StatusViewComponent>,@Inject(MAT_DIALOG_DATA) public data:any) { }

  ngOnInit(): void {
    this.service.getVista(this.data.id)
    .subscribe((res:any)=>{
      this.vis = res.vista!
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
    }});
}
}
