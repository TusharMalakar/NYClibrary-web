import { LoginComponent } from '../login/login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
    {
      path: '',
      component: LoginComponent
    }
  ];

@NgModule({
  //Lets angular know that the route list is only responsible 
  //for providing additional routes and intended for feature modules
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }