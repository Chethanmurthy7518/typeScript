import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user:any;
  register(val){
    this.user=val;
    localStorage.setItem("username",this.user.userName);
    localStorage.setItem("mailId",this.user.mailId);
    localStorage.setItem("userId",this.user.userId);
    localStorage.setItem("password",this.user.password);
    localStorage.setItem("address",this.user.address);
    //console.log(this.user.userName);
    console.log(val);
    
  }
  username = localStorage.getItem("username");
  mailid = localStorage.getItem("mailId");
  userid = localStorage.getItem("userId");
  password = localStorage.getItem("password");
  address = localStorage.getItem("address");

  constructor() { }

  ngOnInit(): void {
  }

}
