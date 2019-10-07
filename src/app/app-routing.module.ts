import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { Routes, RouterModule, CanActivate } from '@angular/router';

import {AuthGuard} from '../app/guard/auth.guard';
// import {LoginComponent} from '../app/login/login/login.component';
// import {HomeComponent}  from '../app/homepage/home/home.component';

// import {LoginModule} from '../app/login/login.module';
// import {HomepageModule} from '../app/homepage/homepage.module';

// import { from } from 'rxjs';
/**
* @author Tushar Malakar
* 
*	@brief Configure the routes to allow for lazy loading of feature modules.
*         Each feature module will have it's own routing module that will tell
*         the router where to go to load relevant components.
*
*	@param[routes] ,  array that will contain our routes
*	@param[path]       ,  string that will redirect to the module specified on 'loadChildren'
*	@param[loadChildren]       , relative path to the module, a hash mark, and the module's class name
*	@param[canActivate]       , auth guard that will prevent un-authorized users from gaining access to the module
*	@return nothing
*/
const routes: Routes = [
  {
    path : 'login', 
    loadChildren : '../app/login/login.module#LoginModule',
    canActivate: [AuthGuard]
  },

  {
    path:'home', 
    loadChildren : '../app/homepage/homepage.module#HomepageModule',
    canLoad: [AuthGuard]
  },
  
  //default component
  {
    path:'**', 
    redirectTo: 'home',
    pathMatch: 'full'
  }
];

@NgModule({
  //Lets angular know that this module is the root routing module.
  //It will configure all the routes passed to it, give access to router directives, and register the RouterService.
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
