import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {UserService} from "../../services/user.service.client";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: String;
  password: String;

  constructor(private router: Router, private service: UserService) { }

  ngOnInit() {
  }

  login() {
    let credentials ={
      username: this.username,
      password: this.password
    };
    this.service.loginUser(credentials)
        .then(user => {
          if (user.userId!==undefined){
            this.router.navigate(['profile']);
          }else {
            alert("User does not exist!!")
          }
        })
  }


  register(){

    this.router.navigate(['register']);
  }

}
