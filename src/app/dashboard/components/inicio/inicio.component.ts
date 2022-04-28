import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegistroServiceService } from 'src/app/auth/services/registro-service.service';
import { LinksSideMenu } from './links-sidebar';
import { Categoria } from 'src/app/auth/Models/Cmodel';
import { InicioService } from '../../services/inicio.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  menu =   LinksSideMenu
  mostrar:any
  categoria : Categoria[]=[]
  isExpanded:boolean = false;
  constructor(private peticion: RegistroServiceService,private router: Router,private inicio: InicioService ) { }

  ngOnInit(): void {
    this.Mostrar()
  }

  logout(){
    this.peticion.logout().subscribe(
      respuesta =>{
          alert(respuesta.message)
          this.router.navigateByUrl('/auth/login');
      },
      error=>{
        alert(error.error.Fail)
      })
   }

   Mostrar(){
    this.peticion.getOne().subscribe(respuesta=>{
      this.mostrar = respuesta.usuario?.roles_id
    })
   }

}
