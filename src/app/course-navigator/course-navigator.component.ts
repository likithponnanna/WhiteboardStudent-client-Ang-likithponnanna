import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from "../../services/user.service.client";
import {ModuleService} from "../../services/module.service.client";
import {LessonService} from "../../services/lesson.service.client";
import {WidgetService} from "../../services/widget.service.client";
import {Course} from "../models/course.model.client";
import {Module} from "../models/module.model.client";
import {Lesson} from "../models/lesson.model.client";
import {Topic} from "../models/topic.model.client";
import {TopicService} from "../../services/topic.service.client";
import {CourseService} from "../../services/course.service.client";

@Component({
    selector: 'app-course-navigator',
    templateUrl: './course-navigator.component.html',
    styleUrls: ['./course-navigator.component.css']
})
export class CourseNavigatorComponent implements OnInit {
    courseName: string;
    courses: Course[] = [];
    modules: Module[] = [];
    lessons: Lesson[] = [];
    topics: Topic[] = [];

    courseId: number;
    moduleId: number;
    lessonId: number;
    topicId: number;

    constructor(private service: ModuleService, private activatedRoute: ActivatedRoute, private courseService: CourseService) {
        this.activatedRoute.params.subscribe(params => this.setParams(params))
    }

    private setParams(params) {
        this.courseId = params.courseId;
        this.moduleId = params.moduleId;
        this.lessonId = params.lessonId;
        this.topicId = params.topicId;
    }


    ngOnInit() {
       this.courseService.findCourseById(this.courseId)
           .then(course => this.courseName = course.title)
    }

}
