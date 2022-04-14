import { AfterViewInit, Component, Inject, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { RegistroServiceService } from 'src/app/auth/services/registro-service.service';
import { User  } from 'src/app/auth/Models/Umodel';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Subscription } from 'rxjs';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { UpdateComponent } from './Detalles/update/update.component';
import { VerComponent } from './vistas/ver/ver.component';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})

export class InfoComponent implements OnInit, OnDestroy, AfterViewInit {
  
  usuarios: User[] = []
  displayedColumns: string[] = ['id', 'nombre', 'roles_id', 'email', 'status', 'acciones']
  sus!: Subscription
  dataSource = new MatTableDataSource<User>(this.usuarios)

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor( private peticion: RegistroServiceService,
     private readonly dialog:MatDialog) {}
  
  ngOnInit() {
    this.leerlista()
    this.sus = this.peticion.refresh$.subscribe(()=>{
      this.leerlista()
    })
  } 

   leerlista(){
    this.peticion.getAll().subscribe((data: any) =>{
      this.dataSource.data = data.usuario!
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

open(row:any){
  this.dialog.open(UpdateComponent, { 
    width:'40%',
    data:row
  });
}

view(row:any){
  this.dialog.open(VerComponent, { 
    width:'60%',
    data:row
  });
}
}
