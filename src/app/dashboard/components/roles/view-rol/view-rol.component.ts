import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Rol } from 'src/app/auth/Models/Rmodel';
import { RolesService } from 'src/app/auth/services/roles.service';


@Component({
  selector: 'app-view-rol',
  templateUrl: './view-rol.component.html',
  styleUrls: ['./view-rol.component.css']
})
export class ViewRolComponent implements OnInit {

  public rol:Rol ={}
  constructor(private service: RolesService, public dialogRef: MatDialogRef<ViewRolComponent>,@Inject(MAT_DIALOG_DATA) public data:any) { 
  }

  ngOnInit(): void {
    this.service.getRol(this.data.id)
    .subscribe((res:any)=>{
      this.rol = res.roles!
      console.log(res);
  })}

  closeDialog(){
    this.dialogRef.close()
  }
}
