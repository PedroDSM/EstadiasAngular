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
import {MatButtonModule} from '@angular/material/button';
import {MatGridListModule}from '@angular/material/grid-list';
import { UpdateComponent } from './components/info/Detalles/update/update.component';

@NgModule({
  declarations: [InicioComponent, UpdateComponent, DashboardComponent, InfoComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MatCardModule,
    MatSidenavModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatListModule,
    MatToolbarModule,
    MatMenuModule,
    HttpClientModule,
    MatTableModule,
    MatGridListModule
  ]
})
export class DashboardModule { }
