import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  username = localStorage.getItem("username");
  mailid = localStorage.getItem("mailId");
  userid = localStorage.getItem("userId");
  password = localStorage.getItem("password");
  address = localStorage.getItem("address");


  constructor() { }

  ngOnInit(): void {
  }

}
