import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {UserService} from "../../services/user.service.client";
import {User} from "../models/user.model.client";

@Component({
  selector: 'app-course-title-head',
  templateUrl: './course-title-head.component.html',
  styleUrls: ['./course-title-head.component.css']
})
export class CourseTitleHeadComponent implements OnInit {
user: User;
  constructor(private router: Router, private service: UserService) { }

  ngOnInit() {
  }

  gotoCourseList(){
    this.router.navigate(['courses-list'])
  }

  gotoCourseGrid(){
    this.router.navigate(['course'])
  }

  gotoProfile(){
    this.router.navigate(['profile'])
  }

  logout(){
    this.service.logoutUser(this.user)

    this.router.navigate(['login'])


  }

}
