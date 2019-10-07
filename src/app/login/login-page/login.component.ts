import { UserService } from '../../shared/dbAccess/user.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component , OnInit} from '@angular/core';
import {Router } from '@angular/router';

//Material
import { MatButtonModule } from '@angular/material/button';
import { LogInModel } from 'src/app/shared/models/login.model';




@Component({

  selector: 'app-name-editor',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
 
})


export class LoginComponent implements OnInit {
 
 user: LogInModel;
  form: FormGroup;
  hide: boolean;

  isLoginError : boolean;
  constructor(private formBuilder: FormBuilder,
              private userService : UserService,
              private router : Router) 
  {
    this.user = new LogInModel();
    this.hide = true;
   }

   ngOnInit(){
      this.form = this.formBuilder.group({
      username: [this.user.username, 
        [Validators.required, Validators.email
      ]],
      password: [this.user.password, [
        Validators.required,
        Validators.minLength(6),
      ]]
    });
  }

  
  

  onSubmit() {

      this.user = Object.assign({}, this.form.value);

    this.userService.userAuthentication(this.user.username,this.user.password)
    .subscribe((data : any)=>{
      
      if(data.success){
        //storing json object to localStorage
        localStorage.setItem('accessToken', data.token);
        this.router.navigate(['/home']);
        console.log ( this.user.username + "  logged-in"); 
      }
      else{ 
         alert(data.error);
         this.router.navigate(['/login']);
    }; 
      return;
      
    });
    
  }

  register(){
      this.router.navigate(['/register']);
  }

  get username(){
    return this.form.get('username');
  }
  
  get password(){
    return this.form.get('password');
  }

  
}
//testuser1@myhunter.cuny.edu 