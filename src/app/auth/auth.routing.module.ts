import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { LoginGuardGuard } from '../guards/login-guard.guard';


const routes: Routes = [
  {
    path:'login',
    component: LoginComponent,
    canActivate: [LoginGuardGuard]
    
  },
  {
    path:'registro',
    component: RegistroComponent,
    canActivate: [LoginGuardGuard]
  },
  {
    path:'**',
    redirectTo:'login',
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
