import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegistroServiceService } from 'src/app/auth/services/registro-service.service';
import { Categoria, Categorias } from 'src/app/auth/Models/Cmodel';
import { InicioService } from '../../services/inicio.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit, OnDestroy{
  categoria : Categoria[]=[]
  isExpanded:boolean = false;
  sus!: Subscription
  constructor(private peticion: RegistroServiceService,private router: Router,private inicio: InicioService ) { }

  ngOnInit(): void {
    this.leerlista()
    this.sus = this.inicio.refresh$.subscribe(()=>{
      this.leerlista()
    })
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

   leerlista(){
    this.inicio.getAll().subscribe((data: any) =>{
      this.categoria = data.categoria!
      // console.log(data)
    });
  }
  
  ngOnDestroy(): void {
    this.sus.unsubscribe();
    console.log('Observable:Cerrado')
}

}
