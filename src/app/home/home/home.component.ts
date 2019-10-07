import { UserService } from './../../shared/dbAccess/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  book_list : any;
  constructor(private userservice : UserService) { }

  ngOnInit() {
  }

  get_all_book_list(){

    this.userservice.get_booklist().subscribe((data : any)=>{
      this.book_list =data;
      return this.book_list;
    });
  }

}
