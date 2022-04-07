import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegistroServiceService } from 'src/app/auth/registro-service.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  isExpanded:boolean = false;
  constructor(private peticion: RegistroServiceService,private router: Router ) { }

  ngOnInit(): void {
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
}
