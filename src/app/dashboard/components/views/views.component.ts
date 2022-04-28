import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { VistasService } from '../../services/vistas.service';
import { Vista } from 'src/app/auth/Models/Vmodel';
import { CrearViewComponent } from './componentes/crear-view/crear-view.component';
import { ShowViewComponent } from './componentes/show-view/show-view.component';
import { StatusViewComponent } from './componentes/status-view/status-view.component';
import { UpdateViewComponent } from './componentes/update-view/update-view.component';

@Component({
  selector: 'app-views',
  templateUrl: './views.component.html',
  styleUrls: ['./views.component.css']
})
export class ViewsComponent implements OnInit {

  vistas: Vista[] = []
  displayedColumns: string[] = ['id', 'nombre', 'icono', 'nivel', 'categorias', 'status', 'acciones']
  sus!: Subscription
  dataSource = new MatTableDataSource<Vista>(this.vistas)
  
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(private peticion: VistasService, private readonly dialog:MatDialog) { }

  ngOnInit(): void {
    this.leerlista()
    this.sus = this.peticion.refresh$.subscribe(()=>{
      this.leerlista()
    })
  }

  leerlista(){
    this.peticion.getAll().subscribe((data: any) =>{
      this.dataSource.data = data.Vistas!
      console.log(data)
    });
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  ngOnDestroy(): void {
    this.sus.unsubscribe();
    console.log('Observable:Cerrado')
}

crear(){
  this.dialog.open(CrearViewComponent, { 
    width:'35%',
  });
}
view(row:any){
  this.dialog.open(ShowViewComponent, { 
    width:'37%',
    data: row
  });
}
status(row:any){
  this.dialog.open(StatusViewComponent, { 
    width:'40%',
    data: row
  });
}
update(row:any){
  this.dialog.open(UpdateViewComponent, { 
    data: row,
    width:'40%',
  });
}

}
