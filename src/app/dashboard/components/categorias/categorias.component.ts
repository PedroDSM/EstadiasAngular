import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { Categoria } from 'src/app/auth/Models/Cmodel';
import { CategoriasService } from '../../services/categorias.service';
import { CrearCatComponent } from './componentes/crear-cat/crear-cat.component';
import { ShowCatComponent } from './componentes/show-cat/show-cat.component';
import { StatusCatComponent } from './componentes/status-cat/status-cat.component';
import { UpdateCatComponent } from './componentes/update-cat/update-cat.component';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent implements OnInit {

  categorias: Categoria[] = []
  displayedColumns: string[] = ['id', 'nombre', 'icono', 'nivel', 'status', 'acciones']
  sus!: Subscription
  dataSource = new MatTableDataSource<Categoria>(this.categorias)
  
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(private peticion: CategoriasService, private readonly dialog:MatDialog) { }

  ngOnInit(): void {
    this.leerlista()
    this.sus = this.peticion.refresh$.subscribe(()=>{
      this.leerlista()
    })
  }

  leerlista(){
    this.peticion.getAll().subscribe((data: any) =>{
      this.dataSource.data = data.Categorias!
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
  this.dialog.open(CrearCatComponent, { 
    width:'60%',
  });
}
view(row:any){
  this.dialog.open(ShowCatComponent, { 
    width:'60%',
    data: row
  });
}
status(row:any){
  this.dialog.open(StatusCatComponent, { 
    width:'40%',
    data: row
  });
}
update(row:any){
  this.dialog.open(UpdateCatComponent, { 
    data: row,
    width:'40%',
  });
}
}
