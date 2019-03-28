import {Component, Input, OnInit} from '@angular/core';
import {TopicService} from "../../services/topic.service.client";
import {Course} from "../models/course.model.client";
import {Module} from "../models/module.model.client";
import {Lesson} from "../models/lesson.model.client";
import {Topic} from "../models/topic.model.client";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-topic-pills',
  templateUrl: './topic-pills.component.html',
  styleUrls: ['./topic-pills.component.css']
})
export class TopicPillsComponent implements OnInit {
  courses: Course[] = [];
  modules: Module[] = [];
  lessons: Lesson[] = [];
  topics: Topic[] = [];
  @Input() parentTopicId: number;

  selectedTopic: number;

  courseId: number;
  moduleId: number;
  lessonId: number;
  topicId: number;

  constructor(private service: TopicService, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe(params => this.setParams(params))
  }

  private setParams(params){
    this.courseId = params.courseId;
    this.moduleId = params.moduleId;
    this.lessonId = params.lessonId;
    this.topicId = params.topicId;
    this.findTopics(this.lessonId);
  }

  findTopics(lesId){
    this.service.findAllTopics(lesId)
        .then(topics => this.topics = topics)
  }

  selectedTopicFun = topicId => {
    this.selectedTopic = topicId;
  }

  ngOnInit() {
  }

}
