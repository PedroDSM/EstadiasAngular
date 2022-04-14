import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Roles } from 'src/app/auth/Models/Rmodel';
import { User } from 'src/app/auth/Models/Umodel';
import { RegistroServiceService } from 'src/app/auth/services/registro-service.service';


@Component({
  selector: 'app-ver',
  templateUrl: './ver.component.html',
  styleUrls: ['./ver.component.css']
})
export class VerComponent implements OnInit {

  public user:User ={}
  public rol:Roles ={}
  constructor(private service: RegistroServiceService, public dialogRef: MatDialogRef<VerComponent>,@Inject(MAT_DIALOG_DATA) public data:any) { 
  }

  ngOnInit(): void {
    this.service.getUser(this.data.id)
    .subscribe((res:any)=>{
      this.user = res.usuario!
      this.rol = res.Roles!
      console.log(res);
  })}

  closeDialog(){
    this.dialogRef.close()
  }
}
