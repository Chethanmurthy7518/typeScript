import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  credential:any;
  login(value){
   this.credential=value;
   if(this.credential.userId===localStorage.getItem("userId") && this.credential.password===localStorage.getItem("password"))
   { 
    this.router.navigateByUrl("/users");      
    console.log("login Successful");
   }
   else{
     alert("invalid credentials")
     console.log("invalid credential");
   }
   console.log(this.credential);
  }

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

}
