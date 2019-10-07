import { UserService } from '../../shared/dbAccess/user.service';
import { Component , OnInit} from '@angular/core';
import {Router } from '@angular/router';
import { RegisterModel } from '../../shared/models/register.model';

//Needed to implement Reactive Forms
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{
  
  user: RegisterModel;
  form: FormGroup;
  hide1: boolean;
  hide2: boolean;

  isRegiError : boolean;
  constructor(
    private userService : UserService,
    private router : Router,
    private formBuilder: FormBuilder) 
    {
      this.user = new RegisterModel();
      this.hide1 = true;
      this.hide2 = true;
     }

  ngOnInit() {
    this.form = this.formBuilder.group({
       username: [this.user.username, [
        Validators.required, 
        Validators.email
      ]],
       password: [this.user.password, [
        Validators.required,
        Validators.minLength(6)
      ]], 
       password2: [this.user.password2, [
        Validators.required,
        Validators.minLength(6)
      ]] 

    });
    }
  
  onSubmit() {

    this.user = Object.assign({}, this.form.value);
    
    if(this.user.password != this.user.password2){
      alert("Password did not matche!");
    }
    else
    {
      this.userService.registerUser(this.user.username , this.user.password)
      .subscribe((data: any)  =>{
            console.log ( data );
            //storing json object to localStorage
            localStorage.setItem('accessToken',data.token);

            if(data.success){

              this.router.navigate(['/home']);
              console.log ( this.user.username + " registered"); 
            }
            else{ 
                alert(data.error);
                this.router.navigate(['/register']);
            };
        });
    }
}


get username(){
  return this.form.get('username');
}

get password(){
  return this.form.get('password');
}

get password2(){
  return this.form.get('password2');
}

login(){
  this.router.navigate(['/login']);
}

}