import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Vista } from 'src/app/auth/Models/Vmodel';
import { VistasService } from 'src/app/dashboard/services/vistas.service';

@Component({
  selector: 'app-show-view',
  templateUrl: './show-view.component.html',
  styleUrls: ['./show-view.component.css']
})
export class ShowViewComponent implements OnInit {

  public vi:Vista={}
  constructor(private service:VistasService, public dialogRef: MatDialogRef<ShowViewComponent>,@Inject(MAT_DIALOG_DATA) public data:any) { }

  ngOnInit(): void {
    this.service.getVista(this.data.id)
    .subscribe((res:any)=>{
      this.vi = res.vista!
      console.log(res);
  })}

  closeDialog(){
    this.dialogRef.close()
  }

}
