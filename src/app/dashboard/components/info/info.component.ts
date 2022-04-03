import { Component, OnInit } from '@angular/core';
import { RegistroServiceService } from 'src/app/auth/registro-service.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

  constructor(private peticion: RegistroServiceService) {}

  users: any=[]

  ngOnInit(): void {
    this.leerlista()
  } 
  leerlista(){
    this.peticion.getAll().subscribe(
      respuesta=>{
        this.users = respuesta.usuario!
      });
  }

}
