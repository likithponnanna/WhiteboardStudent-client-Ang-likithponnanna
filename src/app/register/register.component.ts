import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {UserService} from "../../services/user.service.client";
import {User} from "../models/user.model.client";
import {el} from "@angular/platform-browser/testing/src/browser_util";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private router: Router, private service: UserService) { }
  pwd1: string;
  pwd2: string;
  user: User;
  username: string;

  ngOnInit() {
  }

  login(){
    this.router.navigate(['login']);
  }

  register(){
    if(this.pwd1===this.pwd2){
      let newUser = {
        username: this.username,
        password: this.pwd1,
        role: "STUDENT"
      };
      this.service.registerUser(newUser)
          .then(user => {
            if(user.status!=500){
              if (user.username === "duplicate_777") {
                alert("User Already Exists!!");
              }else {
                this.router.navigate(['profile']);
              }
            }else {
              console.log("Reg return", user);
              alert("Server Error!!")
            }
          })
    }
    else {
      alert("Passwords don't match");
    }

  }

}
