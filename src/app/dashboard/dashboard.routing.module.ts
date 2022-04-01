import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardGuard } from '../guards/auth-guard.guard';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { InfoComponent } from './components/info/info.component';
import { InicioComponent } from './components/inicio/inicio.component';


const routes: Routes = [
  {
    path: 'v1',
    component:InicioComponent,
    children:[
      {
        path:'dashboard',
        component:DashboardComponent,
        canActivate: [AuthGuardGuard]
      },
      {
        path:'info',
        component:InfoComponent,
        canActivate: [AuthGuardGuard]
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
