import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardGuard } from '../guards/auth-guard.guard';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { InfoComponent } from './components/info/info.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { RoleGuardGuard } from '../guards/role-guard.guard';
import { RolesComponent } from './components/roles/roles.component';
import { CategoriasComponent } from './components/categorias/categorias.component';
import { ViewsComponent } from './components/views/views.component';

const routes: Routes = [
  {
    path: 'v1',
    component:InicioComponent,
    children:[
      {
        path:'dashboard',
        component:DashboardComponent,
        canActivate: [AuthGuardGuard],
      },
      {
        path:'info',
        component:InfoComponent,
        canActivate: [AuthGuardGuard, RoleGuardGuard],
        data:  {expectedRoles: [1]}
      },
      {
        path:'roles',
        component:RolesComponent,
        canActivate: [AuthGuardGuard, RoleGuardGuard],
        data:  {expectedRoles: [1]}
      },
      {
        path:'categorias',
        component:CategoriasComponent,
        canActivate: [AuthGuardGuard, RoleGuardGuard],
        data:  {expectedRoles: [1]}
      },
      {
        path:'vistas',
        component:ViewsComponent,
        canActivate: [AuthGuardGuard, RoleGuardGuard],
        data:  {expectedRoles: [1]}
      }
    ]
  },
  {
    path:'**',
    redirectTo:'v1/dashboard',
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
