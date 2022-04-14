import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard.routing.module';
import { InicioComponent } from './components/inicio/inicio.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { InfoComponent } from './components/info/info.component';
import { MatSidenavModule }from '@angular/material/sidenav';
import { MatIconModule }from '@angular/material/icon';
import { MatListModule }from '@angular/material/list';
import { MatToolbarModule }from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { HttpClientModule } from '@angular/common/http';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatTableModule} from '@angular/material/table';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatGridListModule}from '@angular/material/grid-list';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatPaginatorModule} from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import {MatDialogModule, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { UpdateComponent } from './components/info/Detalles/update/update.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { VerComponent } from './components/info/vistas/ver/ver.component';


@NgModule({
  declarations: [InicioComponent, VerComponent,DashboardComponent, InfoComponent, UpdateComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MatCardModule,
    MatSidenavModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    FormsModule,
    MatSnackBarModule,
    ReactiveFormsModule,
    MatListModule,
    MatToolbarModule,
    MatMenuModule,
    HttpClientModule,
    MatTableModule,
    MatGridListModule,
    MatTooltipModule,
    MatPaginatorModule,
    MatSortModule,
    MatDialogModule
  ],
  providers: [
    { provide: MAT_DIALOG_DATA, useValue: {} },
    { provide: MatDialogRef, useValue: {} },
  ],
  entryComponents:[
    UpdateComponent,
    VerComponent
  ]
})
export class DashboardModule { }
