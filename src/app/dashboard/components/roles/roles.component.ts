import { Component, OnInit, ViewChild } from '@angular/core';
import { Rol, Roles } from 'src/app/auth/Models/Rmodel';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { RolesService } from 'src/app/auth/services/roles.service';
import { Subscription } from 'rxjs';
import { ViewRolComponent } from './view-rol/view-rol.component';
import { CreateRolComponent } from './create-rol/create-rol.component';
import { StatusRolComponent } from './status-rol/status-rol.component';
import { UpdateRolComponent } from './update-rol/update-rol.component';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.css']
})
export class RolesComponent implements OnInit {

  roles: Rol[] = []
  displayedColumns: string[] = ['id', 'nombre', 'descripcion', 'status', 'acciones']
  sus!: Subscription
  dataSource = new MatTableDataSource<Rol>(this.roles)

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  
  constructor(private peticion: RolesService,
    private readonly dialog:MatDialog) { }

  ngOnInit(){
    this.leerlista()
    this.sus = this.peticion.refresh$.subscribe(()=>{
      this.leerlista()
    })
  }

  leerlista(){
    this.peticion.getAll().subscribe((data: any) =>{
      this.dataSource.data = data.Roles!
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

open(){
  this.dialog.open(CreateRolComponent, { 
    width:'40%',
  });
}
view(row:any){
  this.dialog.open(ViewRolComponent, { 
    width:'60%',
    data: row
  });
}
status(row:any){
  this.dialog.open(StatusRolComponent, { 
    width:'40%',
    data: row
  });
}
update(row:any){
  this.dialog.open(UpdateRolComponent, { 
    data: row,
    width:'40%',
  });
}
}
