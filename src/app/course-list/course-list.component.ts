import {Component, Input, OnInit} from '@angular/core';
import {Widget} from "../models/widget.model.client";
import {UserService} from "../../services/user.service.client";
import {Course} from "../models/course.model.client";

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {
  courses: Course[] = [];
  constructor(private service: UserService) { }

  ngOnInit() {
    this.service.findAllCourses()
        .then(courses => this.courses = courses)
  }
}


