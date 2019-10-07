import { Component, OnInit,ChangeDetectionStrategy } from '@angular/core';
import { UserService } from 'src/app/shared/dbAccess/user.service';
import { Router, ActivatedRoute } from '@angular/router';
import { UserModel } from 'src/app/shared/models/user.model';
import { FormControl, Form, FormGroup, FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent implements OnInit {
  canEdit:boolean;
  canMessage: boolean;
  //Will hold our user data.
  userData: UserModel;
  email: string;
  imageLink: any;
  
  
  //Auto complete variables.
  classesForm: FormGroup;
  filteredUsers: String[] = [];
  isLoading = false;
 

  //place holder of image
  public imageToShow: any;

  //default variable for selected file.
  fileToUpload: File = null;

  /**
  * @author Tushar Malakar
  * 
  *	@brief Constructor that will create an instance of UserPageComponent 
  *        and allow us to inject our dependencies; services that will be needed in the component
  *
  *	@param[userService]  ,  service that will handle both retrival and updating user data via http requests
  *	@param[activeRoute]  ,  will allow us to retrieve path parameters if they are set
  *	@param[dialog]       ,  will open a 
  *	@return nothing
  */
  constructor(
    private userService : UserService,
    private router : Router, 
    private formBuilder: FormBuilder,
    private activeRoute: ActivatedRoute,
    public dialog: MatDialog)
    {}

  /**
  * @author Tushar Malakar
  * 
  *	@brief Function that will be called once the Angular has finished initializing and setting up the component
  *        This function is async as we need to wait for data to be retrieved before setting values or doing logic
  *
  *	@return nothing
  */
  async ngOnInit() {

    //Will retrieve the 'email' parameter from the url if set.
    await this.activeRoute.paramMap
    .subscribe(params => {
      this.email = params.get('email');
    })

    //Will set the 'canEdit' boolean variable depending if the user viewing the page is the owner. 
    //If so, allow that user to edit his page fields.
    await this.userService.getUserdetails()
      .subscribe(res => { 
                if(res['email'] === this.email || this.email == null){
                  this.canEdit = true;
                }else{
                  this.canEdit = false;
                  this.canMessage = true;
                }  
              
              }); 
  }

  // messageUser() {
  //   this.router.navigate(['/conversations/message/', this.email]);
  // }

  

  
}
