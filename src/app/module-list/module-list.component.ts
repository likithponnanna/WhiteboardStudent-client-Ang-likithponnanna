import {Component, Input, OnInit} from '@angular/core';
import {Course} from "../models/course.model.client";
import {Module} from "../models/module.model.client";
import {ModuleService} from "../../services/module.service.client";
import {ActivatedRoute} from "@angular/router";
import {el} from "@angular/platform-browser/testing/src/browser_util";

@Component({
  selector: 'app-module-list',
  templateUrl: './module-list.component.html',
  styleUrls: ['./module-list.component.css']
})
export class ModuleListComponent implements OnInit {
  courses: Course[] = [];
  modules: Module[] = [];

  courseId: number;
  moduleId: number;



  constructor(private service: ModuleService, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe(params => this.setParams(params))
  }

  private setParams(params){

    this.courseId = params.courseId;
    this.moduleId = params.moduleId;

    this.findModules(this.courseId);
  }

  findModules(courseId){
      this.service.findAllModules(courseId)
          .then(modules => {this.modules = modules;})
  }



  ngOnInit() {
    this.service.findAllModules(this.courseId)
        .then(modules =>{ this.modules = modules; console.log("Module" , modules)})

  }

}
