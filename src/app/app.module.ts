import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import {UserService} from '../app/apiServices/dataAccess/user.service';
import { PublicService } from './apiServices/dataAccess/public.service';

import { AuthInterceptor } from './guard/auth.inspector';
import { AuthGuard } from './guard/auth.guard'


import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserModule,
    //HTTP requests
    HttpClientModule
  ],
  providers: [
    UserService,
    PublicService,
    AuthGuard,
    {
      provide :HTTP_INTERCEPTORS,
      useClass : AuthInterceptor,
      multi : true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
