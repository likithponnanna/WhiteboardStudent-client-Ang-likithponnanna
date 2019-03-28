import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { CourseCardComponent } from './course-card/course-card.component';
import { CourseListComponent } from './course-list/course-list.component';
import { CourseNavigatorComponent } from './course-navigator/course-navigator.component';

const appRoutes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'profile', component: ProfileComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'course', component: CourseCardComponent },
    { path: 'courses-list', component: CourseListComponent },
    { path: 'course/:courseId', component: CourseNavigatorComponent },
    { path: 'course/:courseId/module/:moduleId', component: CourseNavigatorComponent },
    { path: 'course/:courseId/module/:moduleId/lesson/:lessonId', component: CourseNavigatorComponent },
    { path: 'course/:courseId/module/:moduleId/lesson/:lessonId/topic/:topicId', component: CourseNavigatorComponent },
    { path: 'course/:courseId/module/:moduleId/lesson/:lessonId/topic/:topicId/widget', component: CourseNavigatorComponent },
];

export const routing = RouterModule.forRoot(appRoutes);


