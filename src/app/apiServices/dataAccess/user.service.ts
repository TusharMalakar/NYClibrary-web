import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpParams } from '@angular/common/http';
import 'rxjs/add/operator/map';
// import { Observable } from 'rxjs/Observable';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  readonly rootUrl = 'https://nyclibrary-api.appspot.com';
  constructor(private http: HttpClient) { }

  public welcome(){
    return this.http.get(this.rootUrl);
  }

  
}
