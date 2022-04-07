import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardGuard } from '../guards/auth-guard.guard';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { UpdateComponent } from './components/info/Detalles/update/update.component';
import { InfoComponent } from './components/info/info.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { RoleGuardGuard } from '../guards/role-guard.guard';

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
        data:  {expectedRoles: ['Admin']}
      },
      {
        path:'info/update',
        component:UpdateComponent,
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
