import { Component, OnInit } from '@angular/core';
import {Course} from "../models/course.model.client";
import {Module} from "../models/module.model.client";
import {Lesson} from "../models/lesson.model.client";
import {Topic} from "../models/topic.model.client";
import {WidgetService} from "../../services/widget.service.client";
import {ModuleService} from "../../services/module.service.client";
import {ActivatedRoute} from "@angular/router";
import {Widget} from "../models/widget.model.client";

@Component({
  selector: 'app-widget-list',
  templateUrl: './widget-list.component.html',
  styleUrls: ['./widget-list.component.css']
})
export class WidgetListComponent implements OnInit {
  courses: Course[] = [];
  modules: Module[] = [];
  lessons: Lesson[] = [];
  topics: Topic[] = [];
  widgets: Widget[] = [];

  courseId: number;
  moduleId: number;
  lessonId: number;
  topicId: number;

  constructor(private service: WidgetService, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe(params => this.setParams(params))
  }

  private setParams(params){
    this.courseId = params.courseId;
    this.moduleId = params.moduleId;
    this.lessonId = params.lessonId;
    this.topicId = params.topicId;
    this.findWidgets(this.topicId);
  }

  findWidgets(topicId){
    this.service.findAllWidgets(topicId)
        .then(widgets => this.widgets = widgets)
  }

  ngOnInit() {
  }

}
