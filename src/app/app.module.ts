import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { CourseListComponent } from './course-list/course-list.component';
import { CourseCardComponent } from './course-card/course-card.component';
import { CourseNavigatorComponent } from './course-navigator/course-navigator.component';
import { routing } from './app.routing';
import { FormsModule } from '@angular/forms';
import {UserService} from "../services/user.service.client";
import {CourseService} from "../services/course.service.client";
import {ModuleService} from "../services/module.service.client";
import {LessonService} from "../services/lesson.service.client";
import {TopicService} from "../services/topic.service.client";
import {WidgetService} from "../services/widget.service.client";

import { CourseTitleHeadComponent } from './course-title-head/course-title-head.component';
import { LessonTabsComponent } from './lesson-tabs/lesson-tabs.component';
import { TopicPillsComponent } from './topic-pills/topic-pills.component';
import { WidgetListComponent } from './widget-list/widget-list.component';
import { ModuleListComponent } from './module-list/module-list.component';
import { HeadingWidgetComponent } from './heading-widget/heading-widget.component';
import { ImageWidgetComponent } from './image-widget/image-widget.component';
import { ParagraphWidgetComponent } from './paragraph-widget/paragraph-widget.component';
import { ListWidgetComponent } from './list-widget/list-widget.component';
import { LinkWidgetComponent } from './link-widget/link-widget.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    CourseListComponent,
    CourseCardComponent,
    CourseNavigatorComponent,
    CourseTitleHeadComponent,
    ModuleListComponent,
    LessonTabsComponent,
    TopicPillsComponent,
    WidgetListComponent,
    HeadingWidgetComponent,
    ImageWidgetComponent,
    ParagraphWidgetComponent,
    ListWidgetComponent,
    LinkWidgetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    routing,
    FormsModule
  ],
  providers: [UserService, CourseService, ModuleService, LessonService, TopicService, WidgetService],
  bootstrap: [AppComponent]
})
export class AppModule { }
