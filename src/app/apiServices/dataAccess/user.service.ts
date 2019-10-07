import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpParams } from '@angular/common/http';
import 'rxjs/add/operator/map';
// import { Observable } from 'rxjs/Observable';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  readonly rootUrl = 'https://api000.appspot.com';
  constructor(private http: HttpClient) { }

  public welcome(){
    return this.http.get(this.rootUrl);
  }

  getToken(){
    return localStorage.getItem('accessToken')
  }

  login(email: string, password: string) {
   
    return this.http.get(this.rootUrl +"/auth/login?"+"email="+email+"&password="+password);
  }

  create_user(email, password ) {
    const body= {
      'email': email,
      password: password,
    }
    return this.http.put(this.rootUrl + "/public/createUser", body)
  
}

public isAuthenticated() : boolean {
  return localStorage.getItem('accessToken') !== null;
}




}
