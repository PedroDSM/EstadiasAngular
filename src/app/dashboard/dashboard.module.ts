import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard.routing.module';
import { InicioComponent } from './components/inicio/inicio.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { InfoComponent } from './components/info/info.component';
import { HttpClientModule } from '@angular/common/http';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { UpdateComponent } from './components/info/Detalles/update/update.component';
import { VerComponent } from './components/info/vistas/ver/ver.component';
import { StatusComponent } from './components/info/status/status.component';
import { RolesComponent } from './components/roles/roles.component';
import { ViewRolComponent } from './components/roles/view-rol/view-rol.component';
import { CreateRolComponent } from './components/roles/create-rol/create-rol.component';
import { UpdateRolComponent } from './components/roles/update-rol/update-rol.component';
import { StatusRolComponent } from './components/roles/status-rol/status-rol.component';
import { CategoriasComponent } from './components/categorias/categorias.component';
import { ViewsComponent } from './components/views/views.component';
import { CrearCatComponent } from './components/categorias/componentes/crear-cat/crear-cat.component';
import { StatusCatComponent } from './components/categorias/componentes/status-cat/status-cat.component';
import { UpdateCatComponent } from './components/categorias/componentes/update-cat/update-cat.component';
import { ShowCatComponent } from './components/categorias/componentes/show-cat/show-cat.component';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [InicioComponent, 
    VerComponent,
    DashboardComponent, 
    InfoComponent, 
    UpdateComponent, 
    StatusComponent, 
    RolesComponent,
    ViewRolComponent,
    CreateRolComponent, 
    StatusRolComponent,
    UpdateRolComponent,
    CategoriasComponent,
    ViewsComponent, 
    CrearCatComponent,
    StatusCatComponent, 
    UpdateCatComponent,
    ShowCatComponent],
  imports: [
    CommonModule,
    MaterialModule,
    DashboardRoutingModule,
    HttpClientModule
  ],
  providers: [
    { provide: MAT_DIALOG_DATA, useValue: {} },
    { provide: MatDialogRef, useValue: {} },
  ],
})
export class DashboardModule { }
