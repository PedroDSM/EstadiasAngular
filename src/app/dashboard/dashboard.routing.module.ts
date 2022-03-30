import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { InfoComponent } from './components/info/info.component';
import { InicioComponent } from './components/inicio/inicio.component';


const routes: Routes = [
  {
    path: '',
    component:InicioComponent,
    children:[
      {
        path:'',
        component:DashboardComponent
      },
      {
        path:'info',
        component:InfoComponent
      }
    ]
  },
  {
    path:'**',
    redirectTo:'',
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
