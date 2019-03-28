import {Component, Input, OnInit} from '@angular/core';
import {Course} from "../models/course.model.client";
import {Module} from "../models/module.model.client";
import {Lesson} from "../models/lesson.model.client";
import {Topic} from "../models/topic.model.client";
import {LessonService} from "../../services/lesson.service.client";
import {ActivatedRoute} from "@angular/router";
import {CourseService} from "../../services/course.service.client";
import {Widget} from "../models/widget.model.client";

@Component({
  selector: 'app-lesson-tabs',
  templateUrl: './lesson-tabs.component.html',
  styleUrls: ['./lesson-tabs.component.css']
})
export class LessonTabsComponent implements OnInit {
  //@Input() CourseN: string;
  courses: Course[] = [];
  modules: Module[] = [];
  lessons: Lesson[] = [];
  topics: Topic[] = [];

  courseId: number;
  moduleId: number;
  lessonId: number;
  topicId: number;
  @Input() courseName: string;
  @Input() parentLesId: number;

  selectedLesson: number;

  constructor( private service: LessonService, private activatedRoute: ActivatedRoute, private courseService: CourseService) {
    this.activatedRoute.params.subscribe(params => this.setParams(params))
  }

  private setParams(params) {
    this.courseId = params.courseId;
    this.moduleId = params.moduleId;
    this.lessonId = params.lessonId;

    this.findLessons(this.moduleId);
  }

  ngOnInit() {

  }

  findLessons(moduleId){
    this.service.findAllLessons(moduleId)
        .then(lessons => this.lessons = lessons)

  }

  selectedLessonFun = lesId =>{
    this.selectedLesson = lesId;
  }

}
