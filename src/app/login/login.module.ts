import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { MatButtonModule } from '@angular/material/button';
import { LoginComponent } from '../login/login/login.component';
import { LoginRoutingModule } from './login-routing.module';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule, 
    LoginRoutingModule,

    // angular material
    // MatButtonModule
  ]
})
export class LoginModule { }
