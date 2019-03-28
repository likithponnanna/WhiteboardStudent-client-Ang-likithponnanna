import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {UserService} from "../../services/user.service.client";
import {Course} from "../models/course.model.client";


@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent implements OnInit {
  courses: Course[] = [];

  constructor(private service: UserService) { }

  ngOnInit() {
    this.service.findAllCourses()
        .then(courses => this.courses = courses)
  }

}
