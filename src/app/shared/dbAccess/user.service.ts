import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { UserModel } from '../models/user.model';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UserService {
  // readonly rootUrl = 'https://api000.appspot.com';
  readonly rootUrl = ' http://127.0.0.1:5000/';
  constructor(private http: HttpClient) { }
  
  getToken(){
    return localStorage.getItem('accessToken')
  }

  //"/user?email="+email+"&password="password
  userAuthentication(email: string, password: string) {
    var reqHeader = new HttpHeaders({'No-Auth':'True'});
    return this.http.get(this.rootUrl +"/auth/login?"+"email="+email+"&password="+password, {headers : reqHeader});
  }

  registerUser(email, password ) {
    const body: UserModel = {
      email: email,
      password: password,
    }

    //This request does not need authorization 
    var reqHeader = new HttpHeaders({'No-Auth':'True'});

    //Adding Parameters
    var requestedUrl = this.rootUrl + "/public/create_user?email="+email+"&password="+password;

    //Testing url 
    console.log(requestedUrl);

    //requestUrl: endpoint
    //body: Needed, but not used
    //{headers : reqHeader} : Creating object from the header library; set to non-auth 
    return this.http.put(requestedUrl , body, {headers : reqHeader});
  }

  public isAuthenticated() : boolean {
    return localStorage.getItem('accessToken') !== null;
  }
 //url + json authentication
 getUserdetails(): Observable<UserModel> {
  return this.http.get<UserModel>( this.rootUrl +"/user");
  }

  get_booklist(){
    return this.http.get( this.rootUrl +"/public/book_list");
  }
  
  search_a_book(book_name:string){
    return this.http.get( this.rootUrl +"/public/search?book_name=" + book_name);
  }

  

//   getUserSkills(userName: string) { 
//     return this.http.get( this.rootUrl + "/user/skills/" + userName).toPromise();
//   }

//   getUserClasses(userName: string){ 
//     return this.http.get( this.rootUrl +"/user/classes/" + userName).toPromise();
//   }

//   async getUserSkillsAndClasses(username: string){
    
//     let xAxisReq: Array<string> = [];
//     let classes: string[];
//     let skills: string[];

//     await this.getUserSkills(username).then(function(result){
//       xAxisReq = result["skills"];
//     });

//     await this.getUserClasses(username).then(function(result){
//       classes = result["classes"];
//     });
    
    
//     /*
//     for(let classTaken of classes){
//         xAxisReq.push({
//         skillOrClass: classTaken,
//         type: "class"
//       });
    
//     for(let skill of skills){
//       xAxisReq.push({
//       skillOrClass: skill,
//       type: "skill"
//     });
//   }
//   */

//     return xAxisReq;
//   }

// searchSkills(constrain: string): Observable<any>{
//   let params = new HttpParams().set("query",constrain);
//   return this.http.get(this.rootUrl +"/search/skills",{params: params});
// }

// searchClasses(constrain: string): Observable<any>{
//   let params = new HttpParams().set("query",constrain);
//   return this.http.get(this.rootUrl +"/search/classes",{params: params});
// }

// getPicture(){
//   return this.http.get(this.rootUrl + "/user/profilePicture", {responseType: 'text'});
// }

// getMemberPicture(username: string){
//   return this.http.get( this.rootUrl +"/user/profilePicture?username=" + username , {responseType: 'text'});
// }

// uploadProfilePicture(fileToUpload: File){
//   const formData: FormData = new FormData();
//   formData.append('pic', fileToUpload, fileToUpload.name);
//   return this.http.post(this.rootUrl+"/user/profilePicture", formData)
// }

// // /collab/deleteCollab 
// ///collab/getRecommendedCollab

//   //___________POST_________________

// //you can update user profile taking all these as input but "Not required"
// updateUserProfile(userData: UserModel){
//   const body : UserModel ={
//     name : userData.username,
//     github  : userData.github,
//     linkedin: userData.linkedin,
//   }
//   return this.http.post(this.rootUrl +"/user", body)
// }

// updateUserSkills(skills){
//   const body : UserModel ={
//     skills  :skills,
    
//   }
//   console.log(body)
//   return this.http.post(this.rootUrl +"/user", body)
// }
// updateUserclass(classes){
//   const body : UserModel ={
//     classes:classes
//   }
//   console.log(body)
//   return this.http.post(this.rootUrl +"/user", body)

// }




}
