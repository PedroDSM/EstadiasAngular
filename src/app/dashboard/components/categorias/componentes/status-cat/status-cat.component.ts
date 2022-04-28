import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { LoadingHandler } from 'src/app/auth/Models/loading-handler';
import { Categoria } from 'src/app/auth/Models/Cmodel';
import { CategoriasService } from 'src/app/dashboard/services/categorias.service';

@Component({
  selector: 'app-status-cat',
  templateUrl: './status-cat.component.html',
  styleUrls: ['./status-cat.component.css']
})
export class StatusCatComponent implements OnInit {

  loading = new LoadingHandler()
  public cats:Categoria ={}
  error=false;
  isDisabled = false;

  constructor(private service: CategoriasService, public dialogRef: MatDialogRef<StatusCatComponent>,@Inject(MAT_DIALOG_DATA) public data:any) { }

  ngOnInit(): void {
    this.service.getCategoria(this.data.id)
    .subscribe((res:any)=>{
      this.cats = res.categoria!
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
