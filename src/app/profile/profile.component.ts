import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {UserService} from "../../services/user.service.client";
import {el} from "@angular/platform-browser/testing/src/browser_util";
import {unwrapParentheses} from "tslint";
import {User} from "../models/user.model.client";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  userId: number;
  username: String;
  password: String;
  email: String;
  firstName: String;
  lastName: String;
  phoneNo: String;
  role: String;

  user: User;


  constructor(private router: Router, private service: UserService) { }

  ngOnInit() {
    this.service
        .getProfile()
        .then(user => {this.user = user;})
  }


  logout() {
    this.service.logoutUser(this.user)
        .then(()=>
          this.router.navigate(['login'])
  )
  }

  navigateToCourses() {
    this.router.navigate(['course']);
  }

  updateStudent() {
      this.service.updateProfile(this.user)
          .then(user => { this.user = user;  })
  }







}
