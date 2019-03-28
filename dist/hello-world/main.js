(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div class=\"container\">\n</div>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var AppComponent = /** @class */ (function () {
    function AppComponent(router) {
        this.router = router;
        this.title = 'hello-world';
    }
    AppComponent.prototype.ngOnInit = function () {
        this.router.navigate(['login']);
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _course_list_course_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./course-list/course-list.component */ "./src/app/course-list/course-list.component.ts");
/* harmony import */ var _course_card_course_card_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./course-card/course-card.component */ "./src/app/course-card/course-card.component.ts");
/* harmony import */ var _course_navigator_course_navigator_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./course-navigator/course-navigator.component */ "./src/app/course-navigator/course-navigator.component.ts");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_user_service_client__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../services/user.service.client */ "./src/services/user.service.client.ts");
/* harmony import */ var _services_course_service_client__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../services/course.service.client */ "./src/services/course.service.client.ts");
/* harmony import */ var _services_module_service_client__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../services/module.service.client */ "./src/services/module.service.client.ts");
/* harmony import */ var _services_lesson_service_client__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../services/lesson.service.client */ "./src/services/lesson.service.client.ts");
/* harmony import */ var _services_topic_service_client__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../services/topic.service.client */ "./src/services/topic.service.client.ts");
/* harmony import */ var _services_widget_service_client__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../services/widget.service.client */ "./src/services/widget.service.client.ts");
/* harmony import */ var _course_title_head_course_title_head_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./course-title-head/course-title-head.component */ "./src/app/course-title-head/course-title-head.component.ts");
/* harmony import */ var _lesson_tabs_lesson_tabs_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./lesson-tabs/lesson-tabs.component */ "./src/app/lesson-tabs/lesson-tabs.component.ts");
/* harmony import */ var _topic_pills_topic_pills_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./topic-pills/topic-pills.component */ "./src/app/topic-pills/topic-pills.component.ts");
/* harmony import */ var _widget_list_widget_list_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./widget-list/widget-list.component */ "./src/app/widget-list/widget-list.component.ts");
/* harmony import */ var _module_list_module_list_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./module-list/module-list.component */ "./src/app/module-list/module-list.component.ts");
/* harmony import */ var _heading_widget_heading_widget_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./heading-widget/heading-widget.component */ "./src/app/heading-widget/heading-widget.component.ts");
/* harmony import */ var _image_widget_image_widget_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./image-widget/image-widget.component */ "./src/app/image-widget/image-widget.component.ts");
/* harmony import */ var _paragraph_widget_paragraph_widget_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./paragraph-widget/paragraph-widget.component */ "./src/app/paragraph-widget/paragraph-widget.component.ts");
/* harmony import */ var _list_widget_list_widget_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./list-widget/list-widget.component */ "./src/app/list-widget/list-widget.component.ts");
/* harmony import */ var _link_widget_link_widget_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./link-widget/link-widget.component */ "./src/app/link-widget/link-widget.component.ts");





























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"],
                _register_register_component__WEBPACK_IMPORTED_MODULE_6__["RegisterComponent"],
                _profile_profile_component__WEBPACK_IMPORTED_MODULE_7__["ProfileComponent"],
                _course_list_course_list_component__WEBPACK_IMPORTED_MODULE_8__["CourseListComponent"],
                _course_card_course_card_component__WEBPACK_IMPORTED_MODULE_9__["CourseCardComponent"],
                _course_navigator_course_navigator_component__WEBPACK_IMPORTED_MODULE_10__["CourseNavigatorComponent"],
                _course_title_head_course_title_head_component__WEBPACK_IMPORTED_MODULE_19__["CourseTitleHeadComponent"],
                _module_list_module_list_component__WEBPACK_IMPORTED_MODULE_23__["ModuleListComponent"],
                _lesson_tabs_lesson_tabs_component__WEBPACK_IMPORTED_MODULE_20__["LessonTabsComponent"],
                _topic_pills_topic_pills_component__WEBPACK_IMPORTED_MODULE_21__["TopicPillsComponent"],
                _widget_list_widget_list_component__WEBPACK_IMPORTED_MODULE_22__["WidgetListComponent"],
                _heading_widget_heading_widget_component__WEBPACK_IMPORTED_MODULE_24__["HeadingWidgetComponent"],
                _image_widget_image_widget_component__WEBPACK_IMPORTED_MODULE_25__["ImageWidgetComponent"],
                _paragraph_widget_paragraph_widget_component__WEBPACK_IMPORTED_MODULE_26__["ParagraphWidgetComponent"],
                _list_widget_list_widget_component__WEBPACK_IMPORTED_MODULE_27__["ListWidgetComponent"],
                _link_widget_link_widget_component__WEBPACK_IMPORTED_MODULE_28__["LinkWidgetComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _app_routing__WEBPACK_IMPORTED_MODULE_11__["routing"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"]
            ],
            providers: [_services_user_service_client__WEBPACK_IMPORTED_MODULE_13__["UserService"], _services_course_service_client__WEBPACK_IMPORTED_MODULE_14__["CourseService"], _services_module_service_client__WEBPACK_IMPORTED_MODULE_15__["ModuleService"], _services_lesson_service_client__WEBPACK_IMPORTED_MODULE_16__["LessonService"], _services_topic_service_client__WEBPACK_IMPORTED_MODULE_17__["TopicService"], _services_widget_service_client__WEBPACK_IMPORTED_MODULE_18__["WidgetService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.ts":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routing", function() { return routing; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _course_card_course_card_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./course-card/course-card.component */ "./src/app/course-card/course-card.component.ts");
/* harmony import */ var _course_list_course_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./course-list/course-list.component */ "./src/app/course-list/course-list.component.ts");
/* harmony import */ var _course_navigator_course_navigator_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./course-navigator/course-navigator.component */ "./src/app/course-navigator/course-navigator.component.ts");







var appRoutes = [
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_1__["LoginComponent"] },
    { path: 'profile', component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_3__["ProfileComponent"] },
    { path: 'register', component: _register_register_component__WEBPACK_IMPORTED_MODULE_2__["RegisterComponent"] },
    { path: 'course', component: _course_card_course_card_component__WEBPACK_IMPORTED_MODULE_4__["CourseCardComponent"] },
    { path: 'courses-list', component: _course_list_course_list_component__WEBPACK_IMPORTED_MODULE_5__["CourseListComponent"] },
    { path: 'course/:courseId', component: _course_navigator_course_navigator_component__WEBPACK_IMPORTED_MODULE_6__["CourseNavigatorComponent"] },
    { path: 'course/:courseId/module/:moduleId', component: _course_navigator_course_navigator_component__WEBPACK_IMPORTED_MODULE_6__["CourseNavigatorComponent"] },
    { path: 'course/:courseId/module/:moduleId/lesson/:lessonId', component: _course_navigator_course_navigator_component__WEBPACK_IMPORTED_MODULE_6__["CourseNavigatorComponent"] },
    { path: 'course/:courseId/module/:moduleId/lesson/:lessonId/topic/:topicId', component: _course_navigator_course_navigator_component__WEBPACK_IMPORTED_MODULE_6__["CourseNavigatorComponent"] },
    { path: 'course/:courseId/module/:moduleId/lesson/:lessonId/topic/:topicId/widget', component: _course_navigator_course_navigator_component__WEBPACK_IMPORTED_MODULE_6__["CourseNavigatorComponent"] },
];
var routing = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(appRoutes);


/***/ }),

/***/ "./src/app/course-card/course-card.component.css":
/*!*******************************************************!*\
  !*** ./src/app/course-card/course-card.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body{\n    background-color: #ececec;\n    width: 100%;\n\n}\n.container-fluid{\n    padding: 0;\n    width: 100%;\n\n}\n.wbdv-time-btn{\n    font-size: 35px;\n}\n.wbdv-bg-blue{\n    background-color: #0d47a1;\n    background: #0d47a1;\n}\n.wbdv-bottom-right{\n    color: red; position: fixed;\n    right: 10px;}\n#custFloat{\n    width:2em;\n    height:2em;\n    background-color: #cb4f40;\n    color:#FFF;\n    border-radius:50px;\n    text-align:center;\n    box-shadow: #999;\n}\n.my-float{\n    margin-top:0.5em;\n}\n#lineId{\n    display: block;\n    margin-top: 0.5em;\n    margin-bottom: 1em;\n    margin-left: auto;\n    margin-right: auto;\n    border-width: 0.2em;\n\n}\n#lineIdFld{\n    display: block;\n    margin-top: 0.5em;\n    margin-bottom: 1em;\n    margin-left: auto;\n    margin-right: auto;\n    border-width: 0.2em;\n}\n#topRow{\n    margin-top: 0.8em;\n    margin-bottom: 0.2em;\n    margin-left: 1em;\n    margin-right: 1em;\n\n}\n#wbdvNav{\n    color: #FFFFFF;\n}\n.wbdv-icon-corner{\n    align-content: center;\n    position: absolute;\n    right: 2em;\n}\n.wbdv-small-line{\n    margin-top: 0;\n    margin-bottom: 0;\n    margin-left: 1em;\n    margin-right: 1em;\n    border-width: 1px;\n}\n.wbdv-center-Cont{\n    margin-left: 1em;\n    margin-right: 1em;\n    padding:0;\n    background-color: #FFFFFF;\n    border-color: #ececec;\n    border-width: 0.05rem;\n    border-style: double;\n}\n.wbdv-space-custom{\n    margin-left: 1em;\n    margin-right: 1em;\n    padding:0;\n    margin-top: 2em;\n    margin-bottom: 0;\n}\n.wbdv-grey-font{\n    color: gray;\n}\n#CustWrapFld {\n    overflow: hidden;\n}\n#FirstFld {\n    width: auto;\n    float:left;\n}\n#SecondFld {;\n    overflow: hidden;\n    margin: 0;\n\n}\n#RoundFld{\n    color: #FFFFFF;\n    border-radius: 80%;\n}\nbutton#RoundFld{\n    background-color: #cb4f40;\n}\n.wbdv-fixed-action-btn{\n    position: fixed;\n    bottom: 1%;\n    right: 1%;\n}\n#RoundBottomFld{\n    color: #FFFFFF;\n    background-color: #cb4f40;\n    border-radius: 50%;\n    margin: 5px;\n    padding: 15px;\n    border-color: #cb4f40;\n}\n#iconFld{\n    margin: 10px;\n    margin-top: 20px;\n    padding-top: 20px;\n}\n.wbdv-fa-green{\n    color: #40be5a;\n    font-size: 1.5rem;\n\n}\n.wbdv-btn-athree{\n    color: #FFFFFF;\n\n}\n.btn-danger{\n    color: #FFFFFF;\n}\n#athreeBtnFld{\n    color: #FFFFFF;\n}\n.fa-trash{\n    color: #be202e;\n}\n.fa-file-text{\n    color: #5087ed;\n}\n.wbdv-bg-white{\n    background: #FFFFFF;\n}\n#wbdvBgWhileFld{\n    border-width: 5px;\n    padding-left: 0.5em;\n    padding-right: 0.5em;\n    padding-bottom: 1rem;\n\n}\n#testcardbgFld{\n    background: #FFFFFF;\n\n    border-color: #999999;\n    box-shadow: 2px 2px #999999;\n}\n.wbdv-text-overflow{\n    text-overflow: ellipsis;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY291cnNlLWNhcmQvY291cnNlLWNhcmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHlCQUF5QjtJQUN6QixXQUFXOztBQUVmO0FBQ0E7SUFDSSxVQUFVO0lBQ1YsV0FBVzs7QUFFZjtBQUNBO0lBQ0ksZUFBZTtBQUNuQjtBQUlBO0lBQ0kseUJBQXlCO0lBQ3pCLG1CQUFtQjtBQUN2QjtBQUVBO0lBQ0ksVUFBVSxFQUFFLGVBQWU7SUFDM0IsV0FBVyxDQUFDO0FBSWhCO0lBQ0ksU0FBUztJQUNULFVBQVU7SUFDVix5QkFBeUI7SUFDekIsVUFBVTtJQUNWLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsZ0JBQWdCO0FBQ3BCO0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsbUJBQW1COztBQUV2QjtBQUVBO0lBQ0ksY0FBYztJQUNkLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixtQkFBbUI7QUFDdkI7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixvQkFBb0I7SUFDcEIsZ0JBQWdCO0lBQ2hCLGlCQUFpQjs7QUFFckI7QUFFQTtJQUNJLGNBQWM7QUFDbEI7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixrQkFBa0I7SUFDbEIsVUFBVTtBQUNkO0FBRUE7SUFDSSxhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsaUJBQWlCO0FBQ3JCO0FBSUE7SUFDSSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLFNBQVM7SUFDVCx5QkFBeUI7SUFDekIscUJBQXFCO0lBQ3JCLHFCQUFxQjtJQUNyQixvQkFBb0I7QUFDeEI7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsU0FBUztJQUNULGVBQWU7SUFDZixnQkFBZ0I7QUFDcEI7QUFFQTtJQUNJLFdBQVc7QUFDZjtBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsVUFBVTtBQUNkO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsU0FBUzs7QUFFYjtBQUVBO0lBQ0ksY0FBYztJQUNkLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0kseUJBQXlCO0FBQzdCO0FBRUE7SUFDSSxlQUFlO0lBQ2YsVUFBVTtJQUNWLFNBQVM7QUFDYjtBQUVBO0lBQ0ksY0FBYztJQUNkLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIsV0FBVztJQUNYLGFBQWE7SUFDYixxQkFBcUI7QUFDekI7QUFFQTtJQUNJLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsaUJBQWlCO0FBQ3JCO0FBRUE7SUFDSSxjQUFjO0lBQ2QsaUJBQWlCOztBQUVyQjtBQUVBO0lBQ0ksY0FBYzs7QUFFbEI7QUFFQTtJQUNJLGNBQWM7QUFDbEI7QUFFQTtJQUNJLGNBQWM7QUFDbEI7QUFFQTtJQUNJLGNBQWM7QUFDbEI7QUFFQTtJQUNJLGNBQWM7QUFDbEI7QUFFQTtJQUNJLG1CQUFtQjtBQUN2QjtBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixvQkFBb0I7SUFDcEIsb0JBQW9COztBQUV4QjtBQUVBO0lBQ0ksbUJBQW1COztJQUVuQixxQkFBcUI7SUFDckIsMkJBQTJCO0FBQy9CO0FBRUE7SUFDSSx1QkFBdUI7QUFDM0IiLCJmaWxlIjoic3JjL2FwcC9jb3Vyc2UtY2FyZC9jb3Vyc2UtY2FyZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keXtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWNlY2VjO1xuICAgIHdpZHRoOiAxMDAlO1xuXG59XG4uY29udGFpbmVyLWZsdWlke1xuICAgIHBhZGRpbmc6IDA7XG4gICAgd2lkdGg6IDEwMCU7XG5cbn1cbi53YmR2LXRpbWUtYnRue1xuICAgIGZvbnQtc2l6ZTogMzVweDtcbn1cblxuXG5cbi53YmR2LWJnLWJsdWV7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzBkNDdhMTtcbiAgICBiYWNrZ3JvdW5kOiAjMGQ0N2ExO1xufVxuXG4ud2Jkdi1ib3R0b20tcmlnaHR7XG4gICAgY29sb3I6IHJlZDsgcG9zaXRpb246IGZpeGVkO1xuICAgIHJpZ2h0OiAxMHB4O31cblxuXG5cbiNjdXN0RmxvYXR7XG4gICAgd2lkdGg6MmVtO1xuICAgIGhlaWdodDoyZW07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2NiNGY0MDtcbiAgICBjb2xvcjojRkZGO1xuICAgIGJvcmRlci1yYWRpdXM6NTBweDtcbiAgICB0ZXh0LWFsaWduOmNlbnRlcjtcbiAgICBib3gtc2hhZG93OiAjOTk5O1xufVxuXG4ubXktZmxvYXR7XG4gICAgbWFyZ2luLXRvcDowLjVlbTtcbn1cbiNsaW5lSWR7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luLXRvcDogMC41ZW07XG4gICAgbWFyZ2luLWJvdHRvbTogMWVtO1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICBib3JkZXItd2lkdGg6IDAuMmVtO1xuXG59XG5cbiNsaW5lSWRGbGR7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luLXRvcDogMC41ZW07XG4gICAgbWFyZ2luLWJvdHRvbTogMWVtO1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICBib3JkZXItd2lkdGg6IDAuMmVtO1xufVxuXG4jdG9wUm93e1xuICAgIG1hcmdpbi10b3A6IDAuOGVtO1xuICAgIG1hcmdpbi1ib3R0b206IDAuMmVtO1xuICAgIG1hcmdpbi1sZWZ0OiAxZW07XG4gICAgbWFyZ2luLXJpZ2h0OiAxZW07XG5cbn1cblxuI3diZHZOYXZ7XG4gICAgY29sb3I6ICNGRkZGRkY7XG59XG5cbi53YmR2LWljb24tY29ybmVye1xuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDJlbTtcbn1cblxuLndiZHYtc21hbGwtbGluZXtcbiAgICBtYXJnaW4tdG9wOiAwO1xuICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgbWFyZ2luLWxlZnQ6IDFlbTtcbiAgICBtYXJnaW4tcmlnaHQ6IDFlbTtcbiAgICBib3JkZXItd2lkdGg6IDFweDtcbn1cblxuXG5cbi53YmR2LWNlbnRlci1Db250e1xuICAgIG1hcmdpbi1sZWZ0OiAxZW07XG4gICAgbWFyZ2luLXJpZ2h0OiAxZW07XG4gICAgcGFkZGluZzowO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XG4gICAgYm9yZGVyLWNvbG9yOiAjZWNlY2VjO1xuICAgIGJvcmRlci13aWR0aDogMC4wNXJlbTtcbiAgICBib3JkZXItc3R5bGU6IGRvdWJsZTtcbn1cblxuLndiZHYtc3BhY2UtY3VzdG9te1xuICAgIG1hcmdpbi1sZWZ0OiAxZW07XG4gICAgbWFyZ2luLXJpZ2h0OiAxZW07XG4gICAgcGFkZGluZzowO1xuICAgIG1hcmdpbi10b3A6IDJlbTtcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xufVxuXG4ud2Jkdi1ncmV5LWZvbnR7XG4gICAgY29sb3I6IGdyYXk7XG59XG5cbiNDdXN0V3JhcEZsZCB7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbiNGaXJzdEZsZCB7XG4gICAgd2lkdGg6IGF1dG87XG4gICAgZmxvYXQ6bGVmdDtcbn1cbiNTZWNvbmRGbGQgeztcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIG1hcmdpbjogMDtcblxufVxuXG4jUm91bmRGbGR7XG4gICAgY29sb3I6ICNGRkZGRkY7XG4gICAgYm9yZGVyLXJhZGl1czogODAlO1xufVxuYnV0dG9uI1JvdW5kRmxke1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNjYjRmNDA7XG59XG5cbi53YmR2LWZpeGVkLWFjdGlvbi1idG57XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGJvdHRvbTogMSU7XG4gICAgcmlnaHQ6IDElO1xufVxuXG4jUm91bmRCb3R0b21GbGR7XG4gICAgY29sb3I6ICNGRkZGRkY7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2NiNGY0MDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgbWFyZ2luOiA1cHg7XG4gICAgcGFkZGluZzogMTVweDtcbiAgICBib3JkZXItY29sb3I6ICNjYjRmNDA7XG59XG5cbiNpY29uRmxke1xuICAgIG1hcmdpbjogMTBweDtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xufVxuXG4ud2Jkdi1mYS1ncmVlbntcbiAgICBjb2xvcjogIzQwYmU1YTtcbiAgICBmb250LXNpemU6IDEuNXJlbTtcblxufVxuXG4ud2Jkdi1idG4tYXRocmVle1xuICAgIGNvbG9yOiAjRkZGRkZGO1xuXG59XG5cbi5idG4tZGFuZ2Vye1xuICAgIGNvbG9yOiAjRkZGRkZGO1xufVxuXG4jYXRocmVlQnRuRmxke1xuICAgIGNvbG9yOiAjRkZGRkZGO1xufVxuXG4uZmEtdHJhc2h7XG4gICAgY29sb3I6ICNiZTIwMmU7XG59XG5cbi5mYS1maWxlLXRleHR7XG4gICAgY29sb3I6ICM1MDg3ZWQ7XG59XG5cbi53YmR2LWJnLXdoaXRle1xuICAgIGJhY2tncm91bmQ6ICNGRkZGRkY7XG59XG5cbiN3YmR2QmdXaGlsZUZsZHtcbiAgICBib3JkZXItd2lkdGg6IDVweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDAuNWVtO1xuICAgIHBhZGRpbmctcmlnaHQ6IDAuNWVtO1xuICAgIHBhZGRpbmctYm90dG9tOiAxcmVtO1xuXG59XG5cbiN0ZXN0Y2FyZGJnRmxke1xuICAgIGJhY2tncm91bmQ6ICNGRkZGRkY7XG5cbiAgICBib3JkZXItY29sb3I6ICM5OTk5OTk7XG4gICAgYm94LXNoYWRvdzogMnB4IDJweCAjOTk5OTk5O1xufVxuXG4ud2Jkdi10ZXh0LW92ZXJmbG93e1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/course-card/course-card.component.html":
/*!********************************************************!*\
  !*** ./src/app/course-card/course-card.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<div>\n  <app-course-title-head></app-course-title-head>\n  <div class=\"card-deck row col-12\">\n\n      <div class=\"card  container-fluid wbdv-bg-white \" *ngFor=\"let course of courses\"\n           id=\"wbdvBgWhileFld\"\n           class=\"col-xl-2  col-lg-2 col-md-4 col-sm-12\">\n        <img class=\"card-img-top\" alt=\"Broken Img\"\n             src=\"https://picsum.photos/g/200/225\"/>\n        <div class=\"card-body\" id=\"testcardbgFld\">\n          <h5 class=\"card-title overflow-hidden wbdv-text-overflow\"><i class=\"fa fa-file-text my-float mr-2 overflow-hidden -ellipsis-h wbdv-text-overflow\"></i>{{course.title}}</h5>\n          <p class=\"card-text\">Modified Date 04/04/2019</p>\n          <div class=\"btn-group btn-block\">\n            <a class=\"btn btn-primary\" routerLink=\"/course/{{course.id}}\">View Details</a>\n          </div>\n        </div>\n      </div>\n    </div>\n\n\n\n\n</div>\n"

/***/ }),

/***/ "./src/app/course-card/course-card.component.ts":
/*!******************************************************!*\
  !*** ./src/app/course-card/course-card.component.ts ***!
  \******************************************************/
/*! exports provided: CourseCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseCardComponent", function() { return CourseCardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/user.service.client */ "./src/services/user.service.client.ts");



var CourseCardComponent = /** @class */ (function () {
    function CourseCardComponent(service) {
        this.service = service;
        this.courses = [];
    }
    CourseCardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.findAllCourses()
            .then(function (courses) { return _this.courses = courses; });
    };
    CourseCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-course-card',
            template: __webpack_require__(/*! ./course-card.component.html */ "./src/app/course-card/course-card.component.html"),
            styles: [__webpack_require__(/*! ./course-card.component.css */ "./src/app/course-card/course-card.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_user_service_client__WEBPACK_IMPORTED_MODULE_2__["UserService"]])
    ], CourseCardComponent);
    return CourseCardComponent;
}());



/***/ }),

/***/ "./src/app/course-list/course-list.component.css":
/*!*******************************************************!*\
  !*** ./src/app/course-list/course-list.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body{\n    background-color: #ececec;\n    width: 100%;\n\n}\n.container-fluid{\n    padding: 0;\n    width: 100%;\n\n}\n.wbdv-time-btn{\n    font-size: 35px;\n}\n.wbdv-bg-blue{\n    background-color: #0d47a1;\n    background: #0d47a1;\n}\n.wbdv-bottom-right{\n    color: red; position: fixed;\n    right: 10px;}\n#custFloat{\n    width:2em;\n    height:2em;\n    background-color: #cb4f40;\n    color:#FFF;\n    border-radius:50px;\n    text-align:center;\n    box-shadow: #999;\n}\n.my-float{\n    margin-top:0.5em;\n}\n#lineId{\n    display: block;\n    margin-top: 0.5em;\n    margin-bottom: 1em;\n    margin-left: auto;\n    margin-right: auto;\n    border-width: 0.2em;\n\n}\n#lineIdFld{\n    display: block;\n    margin-top: 0.5em;\n    margin-bottom: 1em;\n    margin-left: auto;\n    margin-right: auto;\n    border-width: 0.2em;\n}\n#topRow{\n    margin-top: 0.8em;\n    margin-bottom: 0.2em;\n    margin-left: 1em;\n    margin-right: 1em;\n\n}\n#wbdvNav{\n    color: #FFFFFF;\n}\n.wbdv-icon-corner{\n    align-content: center;\n    position: absolute;\n    right: 2em;\n}\n.wbdv-small-line{\n    margin-top: 0;\n    margin-bottom: 0;\n    margin-left: 1em;\n    margin-right: 1em;\n    border-width: 1px;\n}\n.wbdv-center-Cont{\n    margin-left: 1em;\n    margin-right: 1em;\n    padding:0;\n    background-color: #FFFFFF;\n    border-color: #ececec;\n    border-width: 0.05rem;\n    border-style: double;\n}\n.wbdv-space-custom{\n    margin-left: 1em;\n    margin-right: 1em;\n    padding:0;\n    margin-top: 2em;\n    margin-bottom: 0;\n}\n.wbdv-grey-font{\n    color: gray;\n}\n#CustWrapFld {\n    overflow: hidden;\n}\n#FirstFld {\n    width: auto;\n    float:left;\n}\n#SecondFld {;\n    overflow: hidden;\n    margin: 0;\n\n}\n#RoundFld{\n    color: #FFFFFF;\n    border-radius: 80%;\n}\nbutton#RoundFld{\n    background-color: #cb4f40;\n}\n.wbdv-fixed-action-btn{\n    position: fixed;\n    bottom: 1%;\n    right: 1%;\n}\n#RoundBottomFld{\n    color: #FFFFFF;\n    background-color: #cb4f40;\n    border-radius: 50%;\n    margin: 5px;\n    padding: 15px;\n    border-color: #cb4f40;\n}\n#iconFld{\n    margin: 10px;\n    margin-top: 20px;\n    padding-top: 20px;\n}\n.wbdv-fa-green{\n    color: #40be5a;\n    font-size: 1.5rem;\n\n}\n.wbdv-btn-athree{\n    color: #FFFFFF;\n\n}\n.btn-danger{\n    color: #FFFFFF;\n}\n#athreeBtnFld{\n    color: #FFFFFF;\n}\n.fa-trash{\n    color: #be202e;\n}\n.fa-file-text{\n    color: #5087ed;\n}\n.wbdv-bg-white{\n    background: #FFFFFF;\n}\n#wbdvBgWhileFld{\n    border-width: 5px;\n    padding-left: 0.5em;\n    padding-right: 0.5em;\n    padding-bottom: 1rem;\n\n}\n#testcardbgFld{\n    background: #FFFFFF;\n\n    border-color: #999999;\n    box-shadow: 2px 2px #999999;\n}\n.wbdv-text-overflow{\n    text-overflow: ellipsis;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY291cnNlLWxpc3QvY291cnNlLWxpc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHlCQUF5QjtJQUN6QixXQUFXOztBQUVmO0FBQ0E7SUFDSSxVQUFVO0lBQ1YsV0FBVzs7QUFFZjtBQUNBO0lBQ0ksZUFBZTtBQUNuQjtBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLG1CQUFtQjtBQUN2QjtBQUVBO0lBQ0ksVUFBVSxFQUFFLGVBQWU7SUFDM0IsV0FBVyxDQUFDO0FBSWhCO0lBQ0ksU0FBUztJQUNULFVBQVU7SUFDVix5QkFBeUI7SUFDekIsVUFBVTtJQUNWLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsZ0JBQWdCO0FBQ3BCO0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsbUJBQW1COztBQUV2QjtBQUVBO0lBQ0ksY0FBYztJQUNkLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixtQkFBbUI7QUFDdkI7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixvQkFBb0I7SUFDcEIsZ0JBQWdCO0lBQ2hCLGlCQUFpQjs7QUFFckI7QUFFQTtJQUNJLGNBQWM7QUFDbEI7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixrQkFBa0I7SUFDbEIsVUFBVTtBQUNkO0FBRUE7SUFDSSxhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsaUJBQWlCO0FBQ3JCO0FBSUE7SUFDSSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLFNBQVM7SUFDVCx5QkFBeUI7SUFDekIscUJBQXFCO0lBQ3JCLHFCQUFxQjtJQUNyQixvQkFBb0I7QUFDeEI7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsU0FBUztJQUNULGVBQWU7SUFDZixnQkFBZ0I7QUFDcEI7QUFFQTtJQUNJLFdBQVc7QUFDZjtBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsVUFBVTtBQUNkO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsU0FBUzs7QUFFYjtBQUVBO0lBQ0ksY0FBYztJQUNkLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0kseUJBQXlCO0FBQzdCO0FBRUE7SUFDSSxlQUFlO0lBQ2YsVUFBVTtJQUNWLFNBQVM7QUFDYjtBQUVBO0lBQ0ksY0FBYztJQUNkLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIsV0FBVztJQUNYLGFBQWE7SUFDYixxQkFBcUI7QUFDekI7QUFFQTtJQUNJLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsaUJBQWlCO0FBQ3JCO0FBRUE7SUFDSSxjQUFjO0lBQ2QsaUJBQWlCOztBQUVyQjtBQUVBO0lBQ0ksY0FBYzs7QUFFbEI7QUFFQTtJQUNJLGNBQWM7QUFDbEI7QUFFQTtJQUNJLGNBQWM7QUFDbEI7QUFFQTtJQUNJLGNBQWM7QUFDbEI7QUFFQTtJQUNJLGNBQWM7QUFDbEI7QUFFQTtJQUNJLG1CQUFtQjtBQUN2QjtBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixvQkFBb0I7SUFDcEIsb0JBQW9COztBQUV4QjtBQUVBO0lBQ0ksbUJBQW1COztJQUVuQixxQkFBcUI7SUFDckIsMkJBQTJCO0FBQy9CO0FBRUE7SUFDSSx1QkFBdUI7QUFDM0IiLCJmaWxlIjoic3JjL2FwcC9jb3Vyc2UtbGlzdC9jb3Vyc2UtbGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keXtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWNlY2VjO1xuICAgIHdpZHRoOiAxMDAlO1xuXG59XG4uY29udGFpbmVyLWZsdWlke1xuICAgIHBhZGRpbmc6IDA7XG4gICAgd2lkdGg6IDEwMCU7XG5cbn1cbi53YmR2LXRpbWUtYnRue1xuICAgIGZvbnQtc2l6ZTogMzVweDtcbn1cblxuLndiZHYtYmctYmx1ZXtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGQ0N2ExO1xuICAgIGJhY2tncm91bmQ6ICMwZDQ3YTE7XG59XG5cbi53YmR2LWJvdHRvbS1yaWdodHtcbiAgICBjb2xvcjogcmVkOyBwb3NpdGlvbjogZml4ZWQ7XG4gICAgcmlnaHQ6IDEwcHg7fVxuXG5cblxuI2N1c3RGbG9hdHtcbiAgICB3aWR0aDoyZW07XG4gICAgaGVpZ2h0OjJlbTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2I0ZjQwO1xuICAgIGNvbG9yOiNGRkY7XG4gICAgYm9yZGVyLXJhZGl1czo1MHB4O1xuICAgIHRleHQtYWxpZ246Y2VudGVyO1xuICAgIGJveC1zaGFkb3c6ICM5OTk7XG59XG5cbi5teS1mbG9hdHtcbiAgICBtYXJnaW4tdG9wOjAuNWVtO1xufVxuI2xpbmVJZHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW4tdG9wOiAwLjVlbTtcbiAgICBtYXJnaW4tYm90dG9tOiAxZW07XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgIGJvcmRlci13aWR0aDogMC4yZW07XG5cbn1cblxuI2xpbmVJZEZsZHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW4tdG9wOiAwLjVlbTtcbiAgICBtYXJnaW4tYm90dG9tOiAxZW07XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgIGJvcmRlci13aWR0aDogMC4yZW07XG59XG5cbiN0b3BSb3d7XG4gICAgbWFyZ2luLXRvcDogMC44ZW07XG4gICAgbWFyZ2luLWJvdHRvbTogMC4yZW07XG4gICAgbWFyZ2luLWxlZnQ6IDFlbTtcbiAgICBtYXJnaW4tcmlnaHQ6IDFlbTtcblxufVxuXG4jd2Jkdk5hdntcbiAgICBjb2xvcjogI0ZGRkZGRjtcbn1cblxuLndiZHYtaWNvbi1jb3JuZXJ7XG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMmVtO1xufVxuXG4ud2Jkdi1zbWFsbC1saW5le1xuICAgIG1hcmdpbi10b3A6IDA7XG4gICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICBtYXJnaW4tbGVmdDogMWVtO1xuICAgIG1hcmdpbi1yaWdodDogMWVtO1xuICAgIGJvcmRlci13aWR0aDogMXB4O1xufVxuXG5cblxuLndiZHYtY2VudGVyLUNvbnR7XG4gICAgbWFyZ2luLWxlZnQ6IDFlbTtcbiAgICBtYXJnaW4tcmlnaHQ6IDFlbTtcbiAgICBwYWRkaW5nOjA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcbiAgICBib3JkZXItY29sb3I6ICNlY2VjZWM7XG4gICAgYm9yZGVyLXdpZHRoOiAwLjA1cmVtO1xuICAgIGJvcmRlci1zdHlsZTogZG91YmxlO1xufVxuXG4ud2Jkdi1zcGFjZS1jdXN0b217XG4gICAgbWFyZ2luLWxlZnQ6IDFlbTtcbiAgICBtYXJnaW4tcmlnaHQ6IDFlbTtcbiAgICBwYWRkaW5nOjA7XG4gICAgbWFyZ2luLXRvcDogMmVtO1xuICAgIG1hcmdpbi1ib3R0b206IDA7XG59XG5cbi53YmR2LWdyZXktZm9udHtcbiAgICBjb2xvcjogZ3JheTtcbn1cblxuI0N1c3RXcmFwRmxkIHtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xufVxuI0ZpcnN0RmxkIHtcbiAgICB3aWR0aDogYXV0bztcbiAgICBmbG9hdDpsZWZ0O1xufVxuI1NlY29uZEZsZCB7O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgbWFyZ2luOiAwO1xuXG59XG5cbiNSb3VuZEZsZHtcbiAgICBjb2xvcjogI0ZGRkZGRjtcbiAgICBib3JkZXItcmFkaXVzOiA4MCU7XG59XG5idXR0b24jUm91bmRGbGR7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2NiNGY0MDtcbn1cblxuLndiZHYtZml4ZWQtYWN0aW9uLWJ0bntcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgYm90dG9tOiAxJTtcbiAgICByaWdodDogMSU7XG59XG5cbiNSb3VuZEJvdHRvbUZsZHtcbiAgICBjb2xvcjogI0ZGRkZGRjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2I0ZjQwO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBtYXJnaW46IDVweDtcbiAgICBwYWRkaW5nOiAxNXB4O1xuICAgIGJvcmRlci1jb2xvcjogI2NiNGY0MDtcbn1cblxuI2ljb25GbGR7XG4gICAgbWFyZ2luOiAxMHB4O1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgcGFkZGluZy10b3A6IDIwcHg7XG59XG5cbi53YmR2LWZhLWdyZWVue1xuICAgIGNvbG9yOiAjNDBiZTVhO1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuXG59XG5cbi53YmR2LWJ0bi1hdGhyZWV7XG4gICAgY29sb3I6ICNGRkZGRkY7XG5cbn1cblxuLmJ0bi1kYW5nZXJ7XG4gICAgY29sb3I6ICNGRkZGRkY7XG59XG5cbiNhdGhyZWVCdG5GbGR7XG4gICAgY29sb3I6ICNGRkZGRkY7XG59XG5cbi5mYS10cmFzaHtcbiAgICBjb2xvcjogI2JlMjAyZTtcbn1cblxuLmZhLWZpbGUtdGV4dHtcbiAgICBjb2xvcjogIzUwODdlZDtcbn1cblxuLndiZHYtYmctd2hpdGV7XG4gICAgYmFja2dyb3VuZDogI0ZGRkZGRjtcbn1cblxuI3diZHZCZ1doaWxlRmxke1xuICAgIGJvcmRlci13aWR0aDogNXB4O1xuICAgIHBhZGRpbmctbGVmdDogMC41ZW07XG4gICAgcGFkZGluZy1yaWdodDogMC41ZW07XG4gICAgcGFkZGluZy1ib3R0b206IDFyZW07XG5cbn1cblxuI3Rlc3RjYXJkYmdGbGR7XG4gICAgYmFja2dyb3VuZDogI0ZGRkZGRjtcblxuICAgIGJvcmRlci1jb2xvcjogIzk5OTk5OTtcbiAgICBib3gtc2hhZG93OiAycHggMnB4ICM5OTk5OTk7XG59XG5cbi53YmR2LXRleHQtb3ZlcmZsb3d7XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/course-list/course-list.component.html":
/*!********************************************************!*\
  !*** ./src/app/course-list/course-list.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n    <app-course-title-head></app-course-title-head>\n    <div class=\"row\">\n              <div class=\"col-12 col-sm-12 col-xs-12 \" *ngFor=\"let course of courses\">\n                  <div class=\"row wbdv-center-Cont\" id=\"centerContFld\" >\n                                        <div class=\"col-6 pl-4 overflow-hidden wbdv-text-overflow\">\n                                          <i class=\"fa fa-file-text my-float mr-2 \"></i>\n                                            <b class=\"overflow-hidden wbdv-text-overflow\"> {{course.title}}</b>\n                                        </div>\n                                        <div class=\"col-2 d-none d-sm-block d-md-block\">\n                                            me\n                                        </div>\n                                        <div class=\"col-1 \">\n\n                                        </div>\n\n                                        <div class=\"col-2 col-sm-2 m-1 p-1 float-right mr-0 pr-0\" >\n                                            <button class=\"btn btn-primary \" routerLink=\"/course/{{course.id}}\">\n                                              View Details <i class=\"fa fa-eye my-float mr-2 ml-2 \"></i>\n                                            </button>\n                                        </div>\n\n                  </div>\n\n              </div>\n\n\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/course-list/course-list.component.ts":
/*!******************************************************!*\
  !*** ./src/app/course-list/course-list.component.ts ***!
  \******************************************************/
/*! exports provided: CourseListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseListComponent", function() { return CourseListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/user.service.client */ "./src/services/user.service.client.ts");



var CourseListComponent = /** @class */ (function () {
    function CourseListComponent(service) {
        this.service = service;
        this.courses = [];
    }
    CourseListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.findAllCourses()
            .then(function (courses) { return _this.courses = courses; });
    };
    CourseListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-course-list',
            template: __webpack_require__(/*! ./course-list.component.html */ "./src/app/course-list/course-list.component.html"),
            styles: [__webpack_require__(/*! ./course-list.component.css */ "./src/app/course-list/course-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_user_service_client__WEBPACK_IMPORTED_MODULE_2__["UserService"]])
    ], CourseListComponent);
    return CourseListComponent;
}());



/***/ }),

/***/ "./src/app/course-navigator/course-navigator.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/course-navigator/course-navigator.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "html, body{\n    height:  100%;\n    width: auto !important;\n    min-width: 250px;\n\n\n\n\n}\n\n.wbdv-block-test{\n    display: block;\n}\n\n.wbdv-modAct{\n    background: dodgerblue;\n    color: dodgerblue;\n}\n\n.wbdv-height-row-sqave{\n    height: 20px;\n}\n\n.wbdv-align-text{\n    font-size:4vw;\n}\n\ndiv.col-4.bg-dark{\n    -webkit-column-fill: inherit;\n            column-fill: inherit;\n    height: 100%;\n}\n\n.container-fluid{\n\n}\n\n.container {\n\n    width: 100%;\n    height: 100%;\n\n}\n\n#mainCourseEdFld{\n    min-width: 250px;\n}\n\n.fa-toggle-on{\n    color: #0a0406;\n}\n\ndiv.row{\n    height: 100%;\n    width: 100%;\n\n}\n\n.row{\n    height: 100%;\n\n}\n\n#CrossFld{\n    margin-right: 4px;\n    padding: 4px;\n    color: white;\n}\n\n#TopPlusFld{\n    color: #FFFFFF;\n    padding: auto;\n    align-self: center;\n    align-content: center;\n    margin-top: 0.6em;\n    margin: auto;\n\n\n}\n\n.wbdv-Cust-Bord{\n    border: #383c3f;\n    background: #0a0406;\n    border-radius: 5px;\n}\n\n#DarkBgFld{\n    background: #0a0406;\n    height: 100%;\n\n}\n\n.wbdv-Full{\n    overflow: hidden;\n}\n\n.wbdv-SideCol{\n    color: #FFFFFF;\n}\n\ndiv#DarkBgFld.col-2.bg-dark{\n    background: #0a0406;\n}\n\n::-webkit-scrollbar {\n    display: none;\n    overflow: hidden;\n}\n\n#ActFld{\n    background: #4790e3\n}\n\n#TopicPlusFld{\n    color: #FFFFFF;\n}\n\n.wbdv-Topic-Bg-Color{\n    background: #7a7a7a;\n    margin-right: 0.5em;\n    color: #FFFFFF;\n}\n\n.wbdv-Topic-Bg-Color:hover{\n    background: #383c3f;\n}\n\n.wbdv-Topic-Bg-Color:active{\n    background: #383c3f;\n}\n\n.wbdv-lesson-tabs{\n    background: #262627;\n    margin-left: 4px;\n}\n\n.wbdv-lesson-tabs:hover{\n    background: #0a0406;\n}\n\n@media (max-width: 200px) {\n    .wbdv-lesson-tabs{\n        margin: 0;\n        padding: 0;\n    }\n\n\n}\n\n@media (max-width: 400px) {\n    .wbdv-course-name {\n        display: none;\n        visibility: hidden;\n    }\n}\n\n.wbdv-module-buttons{\n    border-style: outset;\n    border-radius: 20%;\n\n}\n\n.wbdv-module-buttons:hover{\n    background: #0d47a1;\n    background-color: #0d47a1;\n    color: #0d47a1;\n\n}\n\n.wbdv-module-buttons:active{\n    background: #0d47a1;\n    background-color: #0d47a1;\n    color: #0d47a1;\n\n}\n\n.wbdv-module-buttons:active{\n    background: #0d47a1;\n    background-color: #0d47a1;\n    color: #0d47a1;\n}\n\n#activeBgTopic{\n    background: #444444;\n}\n\n.wbdv-x-pad{\n    margin-left: 1em;\n\n}\n\n.wbdv-module-X{\n    color: #FFFFFF;\n    margin-top: 1em;\n    overflow: hidden;\n}\n\n.wbdv-btn{\n    margin-left: 1em;\n    margin-right: 0;\n}\n\n.wbdv-margin-bord{\n    border: #383c3f;\n\n    border-width: 5px;\n    margin: 1em;\n    padding: 1em;\n}\n\n/* This was taken W3 Schools (Providing reference as asked by professor*/\n\n.switch {\n    /*    position: relative;*/\n    display: inline-block;\n    width: 40px;\n    height: 25px;\n}\n\n.switch input {\n    opacity: 0;\n    width: 0;\n    height: 0;\n}\n\n.slider {\n    /*  position: absolute;*/\n    cursor: pointer;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    background-color: #ccc;\n    transition: .4s;\n}\n\n.slider:before {\n    /* position: absolute;*/\n    content: \"\";\n    height: 18px;\n    width: 16px;\n    left: 4px;\n    bottom: 4px;\n    background-color: white;\n    transition: .4s;\n}\n\ninput:checked + .slider {\n    background-color: #2196F3;\n}\n\ninput:focus + .slider {\n    box-shadow: 0 0 1px #2196F3;\n}\n\ninput:checked + .slider:before {\n    -webkit-transform: translateX(26px);\n    transform: translateX(26px);\n}\n\n.slider.round {\n    border-radius: 34px;\n}\n\n.slider.round:before {\n    border-radius: 50%;\n}\n\n#UpMarginFld{\n    margin-top: 1em;\n}\n\n#customrowFld {\n    height: 100%;\n    padding-bottom: 1000%;\n\n\n    overflow-y: hidden;\n}\n\n@media (max-width: 600px) {\n    #DarkBgFld{\n        padding: 0;\n        margin: 0;\n    }\n    .wbdv-fnt-fld-side{\n        font-size: 10px;\n    }\n\n    div.btn-group.nav-link.active{\n        padding: 0;\n        margin: 0;\n    }\n    .wbdv-remove-lef-right-pm{\n        padding-left: 0;\n        padding-right: 0;\n        margin-left: 0;\n        margin-right: 0;\n    }\n\n\n}\n\n.wbdv-modulelist-button-fa{\n    color: white;\n}\n\n.fa-check{\n    color: green;\n}\n\n.wbdv-font{\n    font-size: 2vw;\n}\n\n.wbdv-btn-widget{\n    font-size: 1vw;\n}\n\n.wbdv-this-scroll-test{\n    overflow-y: scroll;\n\n}\n\n.wbdv-active{\n    background: #0d47a1;\n    color: #0d47a1;\n}\n\n.wbdv-lesson-active{\n    background: #0a0406;\n}\n\n.wbdv-topic-active{\n    background: #383c3f;\n}\n\n.fa-sign-out{\n    color: white;\n}\n\n.fa-user{\n    color: white;\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY291cnNlLW5hdmlnYXRvci9jb3Vyc2UtbmF2aWdhdG9yLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGdCQUFnQjs7Ozs7QUFLcEI7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUdBO0lBQ0ksc0JBQXNCO0lBQ3RCLGlCQUFpQjtBQUNyQjs7QUFDQTtJQUNJLFlBQVk7QUFDaEI7O0FBQ0E7SUFDSSxhQUFhO0FBQ2pCOztBQUNBO0lBQ0ksNEJBQW9CO1lBQXBCLG9CQUFvQjtJQUNwQixZQUFZO0FBQ2hCOztBQUVBOztBQUVBOztBQUVBOztJQUVJLFdBQVc7SUFDWCxZQUFZOztBQUVoQjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBQ0E7SUFDSSxZQUFZO0lBQ1osV0FBVzs7QUFFZjs7QUFDQTtJQUNJLFlBQVk7O0FBRWhCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksY0FBYztJQUNkLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIscUJBQXFCO0lBQ3JCLGlCQUFpQjtJQUNqQixZQUFZOzs7QUFHaEI7O0FBR0E7SUFDSSxlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixZQUFZOztBQUVoQjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0k7QUFDSjs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBR0E7SUFDSSxtQkFBbUI7SUFDbkIsZ0JBQWdCO0FBQ3BCOztBQUlBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0k7UUFDSSxTQUFTO1FBQ1QsVUFBVTtJQUNkOzs7QUFHSjs7QUFFQTtJQUNJO1FBQ0ksYUFBYTtRQUNiLGtCQUFrQjtJQUN0QjtBQUNKOztBQUdBO0lBQ0ksb0JBQW9CO0lBQ3BCLGtCQUFrQjs7QUFFdEI7O0FBQ0E7SUFDSSxtQkFBbUI7SUFDbkIseUJBQXlCO0lBQ3pCLGNBQWM7O0FBRWxCOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLHlCQUF5QjtJQUN6QixjQUFjOztBQUVsQjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQix5QkFBeUI7SUFDekIsY0FBYztBQUNsQjs7QUFJQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGdCQUFnQjs7QUFFcEI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsZUFBZTtJQUNmLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksZUFBZTs7SUFFZixpQkFBaUI7SUFDakIsV0FBVztJQUNYLFlBQVk7QUFDaEI7O0FBRUEsd0VBQXdFOztBQUN4RTtJQUNJLDBCQUEwQjtJQUMxQixxQkFBcUI7SUFDckIsV0FBVztJQUNYLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsUUFBUTtJQUNSLFNBQVM7QUFDYjs7QUFFQTtJQUNJLHdCQUF3QjtJQUN4QixlQUFlO0lBQ2YsTUFBTTtJQUNOLE9BQU87SUFDUCxRQUFRO0lBQ1IsU0FBUztJQUNULHNCQUFzQjtJQUV0QixlQUFlO0FBQ25COztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLFdBQVc7SUFDWCxZQUFZO0lBQ1osV0FBVztJQUNYLFNBQVM7SUFDVCxXQUFXO0lBQ1gsdUJBQXVCO0lBRXZCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSxtQ0FBbUM7SUFFbkMsMkJBQTJCO0FBQy9COztBQUdBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUlBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixxQkFBcUI7OztJQUdyQixrQkFBa0I7QUFDdEI7O0FBR0E7SUFDSTtRQUNJLFVBQVU7UUFDVixTQUFTO0lBQ2I7SUFDQTtRQUNJLGVBQWU7SUFDbkI7O0lBRUE7UUFDSSxVQUFVO1FBQ1YsU0FBUztJQUNiO0lBQ0E7UUFDSSxlQUFlO1FBQ2YsZ0JBQWdCO1FBQ2hCLGNBQWM7UUFDZCxlQUFlO0lBQ25COzs7QUFHSjs7QUFHQTtJQUNJLFlBQVk7QUFDaEI7O0FBSUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFHQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxrQkFBa0I7O0FBRXRCOztBQUNBO0lBQ0ksbUJBQW1CO0lBQ25CLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQiIsImZpbGUiOiJzcmMvYXBwL2NvdXJzZS1uYXZpZ2F0b3IvY291cnNlLW5hdmlnYXRvci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaHRtbCwgYm9keXtcbiAgICBoZWlnaHQ6ICAxMDAlO1xuICAgIHdpZHRoOiBhdXRvICFpbXBvcnRhbnQ7XG4gICAgbWluLXdpZHRoOiAyNTBweDtcblxuXG5cblxufVxuXG4ud2Jkdi1ibG9jay10ZXN0e1xuICAgIGRpc3BsYXk6IGJsb2NrO1xufVxuXG5cbi53YmR2LW1vZEFjdHtcbiAgICBiYWNrZ3JvdW5kOiBkb2RnZXJibHVlO1xuICAgIGNvbG9yOiBkb2RnZXJibHVlO1xufVxuLndiZHYtaGVpZ2h0LXJvdy1zcWF2ZXtcbiAgICBoZWlnaHQ6IDIwcHg7XG59XG4ud2Jkdi1hbGlnbi10ZXh0e1xuICAgIGZvbnQtc2l6ZTo0dnc7XG59XG5kaXYuY29sLTQuYmctZGFya3tcbiAgICBjb2x1bW4tZmlsbDogaW5oZXJpdDtcbiAgICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5jb250YWluZXItZmx1aWR7XG5cbn1cblxuLmNvbnRhaW5lciB7XG5cbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG5cbn1cblxuI21haW5Db3Vyc2VFZEZsZHtcbiAgICBtaW4td2lkdGg6IDI1MHB4O1xufVxuXG4uZmEtdG9nZ2xlLW9ue1xuICAgIGNvbG9yOiAjMGEwNDA2O1xufVxuZGl2LnJvd3tcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG5cbn1cbi5yb3d7XG4gICAgaGVpZ2h0OiAxMDAlO1xuXG59XG5cbiNDcm9zc0ZsZHtcbiAgICBtYXJnaW4tcmlnaHQ6IDRweDtcbiAgICBwYWRkaW5nOiA0cHg7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuXG4jVG9wUGx1c0ZsZHtcbiAgICBjb2xvcjogI0ZGRkZGRjtcbiAgICBwYWRkaW5nOiBhdXRvO1xuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gICAgbWFyZ2luLXRvcDogMC42ZW07XG4gICAgbWFyZ2luOiBhdXRvO1xuXG5cbn1cblxuXG4ud2Jkdi1DdXN0LUJvcmR7XG4gICAgYm9yZGVyOiAjMzgzYzNmO1xuICAgIGJhY2tncm91bmQ6ICMwYTA0MDY7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG4jRGFya0JnRmxke1xuICAgIGJhY2tncm91bmQ6ICMwYTA0MDY7XG4gICAgaGVpZ2h0OiAxMDAlO1xuXG59XG5cbi53YmR2LUZ1bGx7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLndiZHYtU2lkZUNvbHtcbiAgICBjb2xvcjogI0ZGRkZGRjtcbn1cblxuZGl2I0RhcmtCZ0ZsZC5jb2wtMi5iZy1kYXJre1xuICAgIGJhY2tncm91bmQ6ICMwYTA0MDY7XG59XG5cbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuI0FjdEZsZHtcbiAgICBiYWNrZ3JvdW5kOiAjNDc5MGUzXG59XG5cbiNUb3BpY1BsdXNGbGR7XG4gICAgY29sb3I6ICNGRkZGRkY7XG59XG5cbi53YmR2LVRvcGljLUJnLUNvbG9ye1xuICAgIGJhY2tncm91bmQ6ICM3YTdhN2E7XG4gICAgbWFyZ2luLXJpZ2h0OiAwLjVlbTtcbiAgICBjb2xvcjogI0ZGRkZGRjtcbn1cblxuLndiZHYtVG9waWMtQmctQ29sb3I6aG92ZXJ7XG4gICAgYmFja2dyb3VuZDogIzM4M2MzZjtcbn1cblxuLndiZHYtVG9waWMtQmctQ29sb3I6YWN0aXZle1xuICAgIGJhY2tncm91bmQ6ICMzODNjM2Y7XG59XG5cblxuLndiZHYtbGVzc29uLXRhYnN7XG4gICAgYmFja2dyb3VuZDogIzI2MjYyNztcbiAgICBtYXJnaW4tbGVmdDogNHB4O1xufVxuXG5cblxuLndiZHYtbGVzc29uLXRhYnM6aG92ZXJ7XG4gICAgYmFja2dyb3VuZDogIzBhMDQwNjtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDIwMHB4KSB7XG4gICAgLndiZHYtbGVzc29uLXRhYnN7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICB9XG5cblxufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNDAwcHgpIHtcbiAgICAud2Jkdi1jb3Vyc2UtbmFtZSB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICB9XG59XG5cblxuLndiZHYtbW9kdWxlLWJ1dHRvbnN7XG4gICAgYm9yZGVyLXN0eWxlOiBvdXRzZXQ7XG4gICAgYm9yZGVyLXJhZGl1czogMjAlO1xuXG59XG4ud2Jkdi1tb2R1bGUtYnV0dG9uczpob3ZlcntcbiAgICBiYWNrZ3JvdW5kOiAjMGQ0N2ExO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwZDQ3YTE7XG4gICAgY29sb3I6ICMwZDQ3YTE7XG5cbn1cblxuLndiZHYtbW9kdWxlLWJ1dHRvbnM6YWN0aXZle1xuICAgIGJhY2tncm91bmQ6ICMwZDQ3YTE7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzBkNDdhMTtcbiAgICBjb2xvcjogIzBkNDdhMTtcblxufVxuXG4ud2Jkdi1tb2R1bGUtYnV0dG9uczphY3RpdmV7XG4gICAgYmFja2dyb3VuZDogIzBkNDdhMTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGQ0N2ExO1xuICAgIGNvbG9yOiAjMGQ0N2ExO1xufVxuXG5cblxuI2FjdGl2ZUJnVG9waWN7XG4gICAgYmFja2dyb3VuZDogIzQ0NDQ0NDtcbn1cblxuLndiZHYteC1wYWR7XG4gICAgbWFyZ2luLWxlZnQ6IDFlbTtcblxufVxuXG4ud2Jkdi1tb2R1bGUtWHtcbiAgICBjb2xvcjogI0ZGRkZGRjtcbiAgICBtYXJnaW4tdG9wOiAxZW07XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLndiZHYtYnRue1xuICAgIG1hcmdpbi1sZWZ0OiAxZW07XG4gICAgbWFyZ2luLXJpZ2h0OiAwO1xufVxuXG4ud2Jkdi1tYXJnaW4tYm9yZHtcbiAgICBib3JkZXI6ICMzODNjM2Y7XG5cbiAgICBib3JkZXItd2lkdGg6IDVweDtcbiAgICBtYXJnaW46IDFlbTtcbiAgICBwYWRkaW5nOiAxZW07XG59XG5cbi8qIFRoaXMgd2FzIHRha2VuIFczIFNjaG9vbHMgKFByb3ZpZGluZyByZWZlcmVuY2UgYXMgYXNrZWQgYnkgcHJvZmVzc29yKi9cbi5zd2l0Y2gge1xuICAgIC8qICAgIHBvc2l0aW9uOiByZWxhdGl2ZTsqL1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB3aWR0aDogNDBweDtcbiAgICBoZWlnaHQ6IDI1cHg7XG59XG5cbi5zd2l0Y2ggaW5wdXQge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgd2lkdGg6IDA7XG4gICAgaGVpZ2h0OiAwO1xufVxuXG4uc2xpZGVyIHtcbiAgICAvKiAgcG9zaXRpb246IGFic29sdXRlOyovXG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjO1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogLjRzO1xuICAgIHRyYW5zaXRpb246IC40cztcbn1cblxuLnNsaWRlcjpiZWZvcmUge1xuICAgIC8qIHBvc2l0aW9uOiBhYnNvbHV0ZTsqL1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgaGVpZ2h0OiAxOHB4O1xuICAgIHdpZHRoOiAxNnB4O1xuICAgIGxlZnQ6IDRweDtcbiAgICBib3R0b206IDRweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IC40cztcbiAgICB0cmFuc2l0aW9uOiAuNHM7XG59XG5cbmlucHV0OmNoZWNrZWQgKyAuc2xpZGVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjE5NkYzO1xufVxuXG5pbnB1dDpmb2N1cyArIC5zbGlkZXIge1xuICAgIGJveC1zaGFkb3c6IDAgMCAxcHggIzIxOTZGMztcbn1cblxuaW5wdXQ6Y2hlY2tlZCArIC5zbGlkZXI6YmVmb3JlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgyNnB4KTtcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDI2cHgpO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgyNnB4KTtcbn1cblxuXG4uc2xpZGVyLnJvdW5kIHtcbiAgICBib3JkZXItcmFkaXVzOiAzNHB4O1xufVxuXG4uc2xpZGVyLnJvdW5kOmJlZm9yZSB7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuXG5cblxuI1VwTWFyZ2luRmxke1xuICAgIG1hcmdpbi10b3A6IDFlbTtcbn1cblxuI2N1c3RvbXJvd0ZsZCB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHBhZGRpbmctYm90dG9tOiAxMDAwJTtcblxuXG4gICAgb3ZlcmZsb3cteTogaGlkZGVuO1xufVxuXG5cbkBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xuICAgICNEYXJrQmdGbGR7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICB9XG4gICAgLndiZHYtZm50LWZsZC1zaWRle1xuICAgICAgICBmb250LXNpemU6IDEwcHg7XG4gICAgfVxuXG4gICAgZGl2LmJ0bi1ncm91cC5uYXYtbGluay5hY3RpdmV7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICB9XG4gICAgLndiZHYtcmVtb3ZlLWxlZi1yaWdodC1wbXtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAwO1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAwO1xuICAgICAgICBtYXJnaW4tbGVmdDogMDtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xuICAgIH1cblxuXG59XG5cblxuLndiZHYtbW9kdWxlbGlzdC1idXR0b24tZmF7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuXG5cblxuLmZhLWNoZWNre1xuICAgIGNvbG9yOiBncmVlbjtcbn1cblxuLndiZHYtZm9udHtcbiAgICBmb250LXNpemU6IDJ2dztcbn1cblxuXG4ud2Jkdi1idG4td2lkZ2V0e1xuICAgIGZvbnQtc2l6ZTogMXZ3O1xufVxuXG4ud2Jkdi10aGlzLXNjcm9sbC10ZXN0e1xuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcblxufVxuLndiZHYtYWN0aXZle1xuICAgIGJhY2tncm91bmQ6ICMwZDQ3YTE7XG4gICAgY29sb3I6ICMwZDQ3YTE7XG59XG5cbi53YmR2LWxlc3Nvbi1hY3RpdmV7XG4gICAgYmFja2dyb3VuZDogIzBhMDQwNjtcbn1cblxuLndiZHYtdG9waWMtYWN0aXZle1xuICAgIGJhY2tncm91bmQ6ICMzODNjM2Y7XG59XG5cbi5mYS1zaWduLW91dHtcbiAgICBjb2xvcjogd2hpdGU7XG59XG5cbi5mYS11c2Vye1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cblxuIl19 */"

/***/ }),

/***/ "./src/app/course-navigator/course-navigator.component.html":
/*!******************************************************************!*\
  !*** ./src/app/course-navigator/course-navigator.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<script src=\"../app.routing.ts\"></script>\n<div class=\"navbar navbar-expand-md navbar-dark bg-dark\">\n    <a class=\"navbar-brand col-4\" routerLink=\"/course\"> <i id=\"CrossFld\" class=\"fa fa-times\"></i>Course Navigator</a>\n    <div class=\"text-center m-1 text-white text-light font-italic \"><b class=\"font-weight-bolder\">{{courseName}}</b></div>\n</div>\n\n<div id=\"mainCourseEdFld\" className=\"container-fluid h-100 position-absolute\">\n\n    <div  class=\"row justify-content-center h-100 \">\n        <div id=\"customrowFld\" class=\"col-4 col-xs-6   bg-dark h-100 \">\n            <br/>\n            <app-module-list></app-module-list>\n        </div>\n\n\n        <div class=\"col-8 m-0 p-0\">\n            <div class=\"bg-dark wbdv-block-test\">\n            <app-lesson-tabs [courseName]=courseName [parentLesId]=\"lessonId\"  ></app-lesson-tabs>\n            </div>\n            <br/>\n            <br/>\n            <div class=\"bg-light wbdv-this-scroll-test align-content-center m-2  \">\n          <app-topic-pills [parentTopicId]=\"topicId\"></app-topic-pills>\n\n\n          <app-widget-list></app-widget-list>\n            </div>\n        </div>\n    </div>\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/course-navigator/course-navigator.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/course-navigator/course-navigator.component.ts ***!
  \****************************************************************/
/*! exports provided: CourseNavigatorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseNavigatorComponent", function() { return CourseNavigatorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_module_service_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/module.service.client */ "./src/services/module.service.client.ts");
/* harmony import */ var _services_course_service_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/course.service.client */ "./src/services/course.service.client.ts");





var CourseNavigatorComponent = /** @class */ (function () {
    function CourseNavigatorComponent(service, activatedRoute, courseService) {
        var _this = this;
        this.service = service;
        this.activatedRoute = activatedRoute;
        this.courseService = courseService;
        this.courses = [];
        this.modules = [];
        this.lessons = [];
        this.topics = [];
        this.activatedRoute.params.subscribe(function (params) { return _this.setParams(params); });
    }
    CourseNavigatorComponent.prototype.setParams = function (params) {
        this.courseId = params.courseId;
        this.moduleId = params.moduleId;
        this.lessonId = params.lessonId;
        this.topicId = params.topicId;
    };
    CourseNavigatorComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.courseService.findCourseById(this.courseId)
            .then(function (course) { return _this.courseName = course.title; });
    };
    CourseNavigatorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-course-navigator',
            template: __webpack_require__(/*! ./course-navigator.component.html */ "./src/app/course-navigator/course-navigator.component.html"),
            styles: [__webpack_require__(/*! ./course-navigator.component.css */ "./src/app/course-navigator/course-navigator.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_module_service_client__WEBPACK_IMPORTED_MODULE_3__["ModuleService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _services_course_service_client__WEBPACK_IMPORTED_MODULE_4__["CourseService"]])
    ], CourseNavigatorComponent);
    return CourseNavigatorComponent;
}());



/***/ }),

/***/ "./src/app/course-title-head/course-title-head.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/course-title-head/course-title-head.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body{\n    background-color: #ececec;\n    width: 100%;\n\n}\n.container-fluid{\n    padding: 0;\n    width: 100%;\n\n}\n.wbdv-time-btn{\n    font-size: 35px;\n}\n.wbdv-bg-blue{\n    background-color: #0d47a1;\n    background: #0d47a1;\n}\n.wbdv-bottom-right{\n    color: red; position: fixed;\n    right: 10px;}\n#custFloat{\n    width:2em;\n    height:2em;\n    background-color: #cb4f40;\n    color:#FFF;\n    border-radius:50px;\n    text-align:center;\n    box-shadow: #999;\n}\n.my-float{\n    margin-top:0.5em;\n}\n#lineId{\n    display: block;\n    margin-top: 0.5em;\n    margin-bottom: 1em;\n    margin-left: auto;\n    margin-right: auto;\n    border-width: 0.2em;\n\n}\n.wbdv-cl-link{\n    color: #2846ff;\n    border: #0a0406;\n    cursor: pointer;\n}\n.wbdv-status-icons-clickable{\n    cursor: pointer;\n}\n#lineIdFld{\n    display: block;\n    margin-top: 0.5em;\n    margin-bottom: 1em;\n    margin-left: auto;\n    margin-right: auto;\n    border-width: 0.2em;\n}\n#topRow{\n    margin-top: 0.8em;\n    margin-bottom: 0.2em;\n    margin-left: 1em;\n    margin-right: 1em;\n\n}\n#wbdvNav{\n    color: #FFFFFF;\n}\n.wbdv-icon-corner{\n    align-content: center;\n    position: absolute;\n    right: 2em;\n}\n.wbdv-small-line{\n    margin-top: 0;\n    margin-bottom: 0;\n    margin-left: 1em;\n    margin-right: 1em;\n    border-width: 1px;\n}\n.wbdv-center-Cont{\n    margin-left: 1em;\n    margin-right: 1em;\n    padding:0;\n    background-color: #FFFFFF;\n    border-color: #ececec;\n    border-width: 0.05rem;\n    border-style: double;\n}\n.wbdv-space-custom{\n    margin-left: 1em;\n    margin-right: 1em;\n    padding:0;\n    margin-top: 2em;\n    margin-bottom: 0;\n}\n.wbdv-grey-font{\n    color: gray;\n}\n#CustWrapFld {\n    overflow: hidden;\n}\n#FirstFld {\n    width: auto;\n    float:left;\n}\n#SecondFld {;\n    overflow: hidden;\n    margin: 0;\n\n}\n#RoundFld{\n    color: #FFFFFF;\n    border-radius: 80%;\n}\nbutton#RoundFld{\n    background-color: #cb4f40;\n}\n.wbdv-fixed-action-btn{\n    position: fixed;\n    bottom: 1%;\n    right: 1%;\n}\n#RoundBottomFld{\n    color: #FFFFFF;\n    background-color: #cb4f40;\n    border-radius: 50%;\n    margin: 5px;\n    padding: 15px;\n    border-color: #cb4f40;\n}\n#iconFld{\n    margin: 10px;\n    margin-top: 20px;\n    padding-top: 20px;\n}\n.wbdv-fa-green{\n    color: #40be5a;\n    font-size: 1.5rem;\n\n}\n.wbdv-btn-athree{\n    color: #FFFFFF;\n\n}\n.btn-danger{\n    color: #FFFFFF;\n}\n#athreeBtnFld{\n    color: #FFFFFF;\n}\n.fa-trash{\n    color: #be202e;\n}\n.fa-file-text{\n    color: #5087ed;\n}\n.wbdv-bg-white{\n    background: #FFFFFF;\n}\n#wbdvBgWhileFld{\n    border-width: 5px;\n    padding-left: 0.5em;\n    padding-right: 0.5em;\n    padding-bottom: 1rem;\n\n}\n#testcardbgFld{\n    background: #FFFFFF;\n\n    border-color: #999999;\n    box-shadow: 2px 2px #999999;\n}\n.wbdv-text-overflow{\n    text-overflow: ellipsis;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY291cnNlLXRpdGxlLWhlYWQvY291cnNlLXRpdGxlLWhlYWQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHlCQUF5QjtJQUN6QixXQUFXOztBQUVmO0FBQ0E7SUFDSSxVQUFVO0lBQ1YsV0FBVzs7QUFFZjtBQUNBO0lBQ0ksZUFBZTtBQUNuQjtBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLG1CQUFtQjtBQUN2QjtBQUVBO0lBQ0ksVUFBVSxFQUFFLGVBQWU7SUFDM0IsV0FBVyxDQUFDO0FBSWhCO0lBQ0ksU0FBUztJQUNULFVBQVU7SUFDVix5QkFBeUI7SUFDekIsVUFBVTtJQUNWLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsZ0JBQWdCO0FBQ3BCO0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsbUJBQW1COztBQUV2QjtBQUVBO0lBQ0ksY0FBYztJQUNkLGVBQWU7SUFDZixlQUFlO0FBQ25CO0FBQ0E7SUFDSSxlQUFlO0FBQ25CO0FBRUE7SUFDSSxjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtBQUN2QjtBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLG9CQUFvQjtJQUNwQixnQkFBZ0I7SUFDaEIsaUJBQWlCOztBQUVyQjtBQUVBO0lBQ0ksY0FBYztBQUNsQjtBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLGtCQUFrQjtJQUNsQixVQUFVO0FBQ2Q7QUFFQTtJQUNJLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixpQkFBaUI7QUFDckI7QUFJQTtJQUNJLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsU0FBUztJQUNULHlCQUF5QjtJQUN6QixxQkFBcUI7SUFDckIscUJBQXFCO0lBQ3JCLG9CQUFvQjtBQUN4QjtBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixTQUFTO0lBQ1QsZUFBZTtJQUNmLGdCQUFnQjtBQUNwQjtBQUVBO0lBQ0ksV0FBVztBQUNmO0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLFdBQVc7SUFDWCxVQUFVO0FBQ2Q7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixTQUFTOztBQUViO0FBRUE7SUFDSSxjQUFjO0lBQ2Qsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSx5QkFBeUI7QUFDN0I7QUFFQTtJQUNJLGVBQWU7SUFDZixVQUFVO0lBQ1YsU0FBUztBQUNiO0FBRUE7SUFDSSxjQUFjO0lBQ2QseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsYUFBYTtJQUNiLHFCQUFxQjtBQUN6QjtBQUVBO0lBQ0ksWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixpQkFBaUI7QUFDckI7QUFFQTtJQUNJLGNBQWM7SUFDZCxpQkFBaUI7O0FBRXJCO0FBRUE7SUFDSSxjQUFjOztBQUVsQjtBQUVBO0lBQ0ksY0FBYztBQUNsQjtBQUVBO0lBQ0ksY0FBYztBQUNsQjtBQUVBO0lBQ0ksY0FBYztBQUNsQjtBQUVBO0lBQ0ksY0FBYztBQUNsQjtBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCO0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLG9CQUFvQjtJQUNwQixvQkFBb0I7O0FBRXhCO0FBRUE7SUFDSSxtQkFBbUI7O0lBRW5CLHFCQUFxQjtJQUNyQiwyQkFBMkI7QUFDL0I7QUFFQTtJQUNJLHVCQUF1QjtBQUMzQiIsImZpbGUiOiJzcmMvYXBwL2NvdXJzZS10aXRsZS1oZWFkL2NvdXJzZS10aXRsZS1oZWFkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5e1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlY2VjZWM7XG4gICAgd2lkdGg6IDEwMCU7XG5cbn1cbi5jb250YWluZXItZmx1aWR7XG4gICAgcGFkZGluZzogMDtcbiAgICB3aWR0aDogMTAwJTtcblxufVxuLndiZHYtdGltZS1idG57XG4gICAgZm9udC1zaXplOiAzNXB4O1xufVxuXG4ud2Jkdi1iZy1ibHVle1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwZDQ3YTE7XG4gICAgYmFja2dyb3VuZDogIzBkNDdhMTtcbn1cblxuLndiZHYtYm90dG9tLXJpZ2h0e1xuICAgIGNvbG9yOiByZWQ7IHBvc2l0aW9uOiBmaXhlZDtcbiAgICByaWdodDogMTBweDt9XG5cblxuXG4jY3VzdEZsb2F0e1xuICAgIHdpZHRoOjJlbTtcbiAgICBoZWlnaHQ6MmVtO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNjYjRmNDA7XG4gICAgY29sb3I6I0ZGRjtcbiAgICBib3JkZXItcmFkaXVzOjUwcHg7XG4gICAgdGV4dC1hbGlnbjpjZW50ZXI7XG4gICAgYm94LXNoYWRvdzogIzk5OTtcbn1cblxuLm15LWZsb2F0e1xuICAgIG1hcmdpbi10b3A6MC41ZW07XG59XG4jbGluZUlke1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbi10b3A6IDAuNWVtO1xuICAgIG1hcmdpbi1ib3R0b206IDFlbTtcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgYm9yZGVyLXdpZHRoOiAwLjJlbTtcblxufVxuXG4ud2Jkdi1jbC1saW5re1xuICAgIGNvbG9yOiAjMjg0NmZmO1xuICAgIGJvcmRlcjogIzBhMDQwNjtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG4ud2Jkdi1zdGF0dXMtaWNvbnMtY2xpY2thYmxle1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuI2xpbmVJZEZsZHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW4tdG9wOiAwLjVlbTtcbiAgICBtYXJnaW4tYm90dG9tOiAxZW07XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgIGJvcmRlci13aWR0aDogMC4yZW07XG59XG5cbiN0b3BSb3d7XG4gICAgbWFyZ2luLXRvcDogMC44ZW07XG4gICAgbWFyZ2luLWJvdHRvbTogMC4yZW07XG4gICAgbWFyZ2luLWxlZnQ6IDFlbTtcbiAgICBtYXJnaW4tcmlnaHQ6IDFlbTtcblxufVxuXG4jd2Jkdk5hdntcbiAgICBjb2xvcjogI0ZGRkZGRjtcbn1cblxuLndiZHYtaWNvbi1jb3JuZXJ7XG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMmVtO1xufVxuXG4ud2Jkdi1zbWFsbC1saW5le1xuICAgIG1hcmdpbi10b3A6IDA7XG4gICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICBtYXJnaW4tbGVmdDogMWVtO1xuICAgIG1hcmdpbi1yaWdodDogMWVtO1xuICAgIGJvcmRlci13aWR0aDogMXB4O1xufVxuXG5cblxuLndiZHYtY2VudGVyLUNvbnR7XG4gICAgbWFyZ2luLWxlZnQ6IDFlbTtcbiAgICBtYXJnaW4tcmlnaHQ6IDFlbTtcbiAgICBwYWRkaW5nOjA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcbiAgICBib3JkZXItY29sb3I6ICNlY2VjZWM7XG4gICAgYm9yZGVyLXdpZHRoOiAwLjA1cmVtO1xuICAgIGJvcmRlci1zdHlsZTogZG91YmxlO1xufVxuXG4ud2Jkdi1zcGFjZS1jdXN0b217XG4gICAgbWFyZ2luLWxlZnQ6IDFlbTtcbiAgICBtYXJnaW4tcmlnaHQ6IDFlbTtcbiAgICBwYWRkaW5nOjA7XG4gICAgbWFyZ2luLXRvcDogMmVtO1xuICAgIG1hcmdpbi1ib3R0b206IDA7XG59XG5cbi53YmR2LWdyZXktZm9udHtcbiAgICBjb2xvcjogZ3JheTtcbn1cblxuI0N1c3RXcmFwRmxkIHtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xufVxuI0ZpcnN0RmxkIHtcbiAgICB3aWR0aDogYXV0bztcbiAgICBmbG9hdDpsZWZ0O1xufVxuI1NlY29uZEZsZCB7O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgbWFyZ2luOiAwO1xuXG59XG5cbiNSb3VuZEZsZHtcbiAgICBjb2xvcjogI0ZGRkZGRjtcbiAgICBib3JkZXItcmFkaXVzOiA4MCU7XG59XG5idXR0b24jUm91bmRGbGR7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2NiNGY0MDtcbn1cblxuLndiZHYtZml4ZWQtYWN0aW9uLWJ0bntcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgYm90dG9tOiAxJTtcbiAgICByaWdodDogMSU7XG59XG5cbiNSb3VuZEJvdHRvbUZsZHtcbiAgICBjb2xvcjogI0ZGRkZGRjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2I0ZjQwO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBtYXJnaW46IDVweDtcbiAgICBwYWRkaW5nOiAxNXB4O1xuICAgIGJvcmRlci1jb2xvcjogI2NiNGY0MDtcbn1cblxuI2ljb25GbGR7XG4gICAgbWFyZ2luOiAxMHB4O1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgcGFkZGluZy10b3A6IDIwcHg7XG59XG5cbi53YmR2LWZhLWdyZWVue1xuICAgIGNvbG9yOiAjNDBiZTVhO1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuXG59XG5cbi53YmR2LWJ0bi1hdGhyZWV7XG4gICAgY29sb3I6ICNGRkZGRkY7XG5cbn1cblxuLmJ0bi1kYW5nZXJ7XG4gICAgY29sb3I6ICNGRkZGRkY7XG59XG5cbiNhdGhyZWVCdG5GbGR7XG4gICAgY29sb3I6ICNGRkZGRkY7XG59XG5cbi5mYS10cmFzaHtcbiAgICBjb2xvcjogI2JlMjAyZTtcbn1cblxuLmZhLWZpbGUtdGV4dHtcbiAgICBjb2xvcjogIzUwODdlZDtcbn1cblxuLndiZHYtYmctd2hpdGV7XG4gICAgYmFja2dyb3VuZDogI0ZGRkZGRjtcbn1cblxuI3diZHZCZ1doaWxlRmxke1xuICAgIGJvcmRlci13aWR0aDogNXB4O1xuICAgIHBhZGRpbmctbGVmdDogMC41ZW07XG4gICAgcGFkZGluZy1yaWdodDogMC41ZW07XG4gICAgcGFkZGluZy1ib3R0b206IDFyZW07XG5cbn1cblxuI3Rlc3RjYXJkYmdGbGR7XG4gICAgYmFja2dyb3VuZDogI0ZGRkZGRjtcblxuICAgIGJvcmRlci1jb2xvcjogIzk5OTk5OTtcbiAgICBib3gtc2hhZG93OiAycHggMnB4ICM5OTk5OTk7XG59XG5cbi53YmR2LXRleHQtb3ZlcmZsb3d7XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/course-title-head/course-title-head.component.html":
/*!********************************************************************!*\
  !*** ./src/app/course-title-head/course-title-head.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"navbar navbar-expand-lg navbar-light wbdv-bg-blue justify-content-between \">\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\"\n            data-target=\"#navbarSupportedContent\"\n            aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n    <div class=\"hidden-sm-down\" id=\"wbdvCourseHid\">\n      <a class=\"navbar-brand form-inline d-sm-block d-xs-block d-xs-block col-md-0 \" id=\"wbdvNav\"\n         href=\"#\">Course Manager</a>\n    </div>\n\n\n\n    <span id = \"lineId\" > </span>\n\n    <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n\n    </div>\n    <div class=\"btn-group float-right\">\n      <i   class=\"fa fa-user ml-2 fa-2x text-white mr-2 wbdv-status-icons-clickable\" (click)=\"gotoProfile()\"></i>\n      <i  class=\"fa fa-sign-out ml-2 fa-2x text-white mr-2 wbdv-status-icons-clickable\" (click)=\"logout()\"></i>\n    </div>\n  </div>\n\n  <div class=\"row\" id=\"topRow\">\n    <div class=\"col-6 pl-5\">\n      <b>Recent Documents</b>\n    </div>\n    <div class=\"col-2 d-none d-sm-block\">\n      <b>Owned by me<i class=\"fa fa-caret-down my-float mr-2 ml-2\"></i></b>\n    </div>\n    <div class=\"col-2 d-none d-sm-block\">\n      <b></b>\n    </div>\n    <div class=\"col-2 \">\n       <i class=\"wbdv-cl-link fa fa-th my-float mr-2 \" (click)=\"gotoCourseGrid()\"></i>\n      <i class=\"wbdv-cl-link fa fa-list-ul my-float mr-2 \" (click)=\"gotoCourseList()\"></i>\n      <i class=\"fa fa-sort-alpha-asc my-float mr-2\"></i>\n\n    </div>\n  </div>\n  <hr id = \"lineIdFld\" />\n</div>"

/***/ }),

/***/ "./src/app/course-title-head/course-title-head.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/course-title-head/course-title-head.component.ts ***!
  \******************************************************************/
/*! exports provided: CourseTitleHeadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseTitleHeadComponent", function() { return CourseTitleHeadComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_user_service_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/user.service.client */ "./src/services/user.service.client.ts");




var CourseTitleHeadComponent = /** @class */ (function () {
    function CourseTitleHeadComponent(router, service) {
        this.router = router;
        this.service = service;
    }
    CourseTitleHeadComponent.prototype.ngOnInit = function () {
    };
    CourseTitleHeadComponent.prototype.gotoCourseList = function () {
        this.router.navigate(['courses-list']);
    };
    CourseTitleHeadComponent.prototype.gotoCourseGrid = function () {
        this.router.navigate(['course']);
    };
    CourseTitleHeadComponent.prototype.gotoProfile = function () {
        this.router.navigate(['profile']);
    };
    CourseTitleHeadComponent.prototype.logout = function () {
        this.service.logoutUser(this.user);
        this.router.navigate(['login']);
    };
    CourseTitleHeadComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-course-title-head',
            template: __webpack_require__(/*! ./course-title-head.component.html */ "./src/app/course-title-head/course-title-head.component.html"),
            styles: [__webpack_require__(/*! ./course-title-head.component.css */ "./src/app/course-title-head/course-title-head.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_user_service_client__WEBPACK_IMPORTED_MODULE_3__["UserService"]])
    ], CourseTitleHeadComponent);
    return CourseTitleHeadComponent;
}());



/***/ }),

/***/ "./src/app/heading-widget/heading-widget.component.css":
/*!*************************************************************!*\
  !*** ./src/app/heading-widget/heading-widget.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "html, body {\n    height: 100%;\n    width: auto !important;\n    min-width: 250px;\n}\n\n\n.wbdv-head-wid{\n    overflow: scroll;\n\n}\n\n\n.wbdv-height-row-sqave{\n    height: 20px;\n}\n\n\n.wbdv-align-text{\n    font-size:4vw;\n}\n\n\ndiv.col-4.bg-dark{\n    -webkit-column-fill: inherit;\n            column-fill: inherit;\n    height: 100%;\n}\n\n\n.container-fluid{\n\n}\n\n\n.container {\n\n    width: 100%;\n    height: 100%;\n\n}\n\n\n#mainCourseEdFld{\n    min-width: 250px;\n}\n\n\n.fa-toggle-on{\n    color: #0a0406;\n}\n\n\ndiv.row{\n    height: 100%;\n    width: 100%;\n\n}\n\n\n.row{\n    height: 100%;\n\n}\n\n\n#CrossFld{\n    margin-right: 4px;\n    padding: 4px;\n    color: white;\n}\n\n\n#TopPlusFld{\n    color: #FFFFFF;\n    padding: auto;\n    align-self: center;\n    align-content: center;\n    margin-top: 0.6em;\n    margin: auto;\n\n\n}\n\n\n.wbdv-Cust-Bord{\n    border: #383c3f;\n    background: #0a0406;\n    border-radius: 5px;\n}\n\n\n#DarkBgFld{\n    background: #0a0406;\n    height: 100%;\n\n}\n\n\n.wbdv-Full{\n    overflow: hidden;\n}\n\n\n.wbdv-SideCol{\n    color: #FFFFFF;\n}\n\n\ndiv#DarkBgFld.col-2.bg-dark{\n    background: #0a0406;\n}\n\n\n::-webkit-scrollbar {\n    display: none;\n    overflow: hidden;\n}\n\n\n#ActFld{\n    background: #4790e3\n}\n\n\n#TopicPlusFld{\n    color: #FFFFFF;\n}\n\n\n.wbdv-Topic-Bg-Color{\n    background: #7a7a7a;\n    margin-right: 0.5em;\n    color: #FFFFFF;\n}\n\n\n.wbdv-Topic-Bg-Color:hover{\n    background: #383c3f;\n}\n\n\n.wbdv-Topic-Bg-Color:active{\n    background: #383c3f;\n}\n\n\n.wbdv-lesson-tabs{\n    background: #262627;\n    margin-left: 4px;\n}\n\n\n.wbdv-lesson-tabs:hover{\n    background: #0a0406;\n}\n\n\n@media (max-width: 200px) {\n    .wbdv-lesson-tabs{\n        margin: 0;\n        padding: 0;\n    }\n\n\n}\n\n\n.wbdv-module-buttons{\n    border-style: outset;\n    border-radius: 20%;\n\n}\n\n\n.wbdv-module-buttons:hover{\n    background: #0d47a1;\n    background-color: #0d47a1;\n    color: #0d47a1;\n\n}\n\n\n.wbdv-module-buttons:active{\n    background: #0d47a1;\n    background-color: #0d47a1;\n    color: #0d47a1;\n\n}\n\n\n.wbdv-module-buttons:active{\n    background: #0d47a1;\n    background-color: #0d47a1;\n    color: #0d47a1;\n}\n\n\n#activeBgTopic{\n    background: #444444;\n}\n\n\n.wbdv-x-pad{\n    margin-left: 1em;\n\n}\n\n\n.wbdv-module-X{\n    color: #FFFFFF;\n    margin-top: 1em;\n    overflow: hidden;\n}\n\n\n.wbdv-btn{\n    margin-left: 1em;\n    margin-right: 0;\n}\n\n\n.wbdv-margin-bord{\n    border: #383c3f;\n\n    border-width: 5px;\n    margin: 1em;\n    padding: 1em;\n}\n\n\n/* This was taken W3 Schools (Providing reference as asked by professor*/\n\n\n.switch {\n    /*    position: relative;*/\n    display: inline-block;\n    width: 40px;\n    height: 25px;\n}\n\n\n.switch input {\n    opacity: 0;\n    width: 0;\n    height: 0;\n}\n\n\n.slider {\n    /*  position: absolute;*/\n    cursor: pointer;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    background-color: #ccc;\n    transition: .4s;\n}\n\n\n.slider:before {\n    /* position: absolute;*/\n    content: \"\";\n    height: 18px;\n    width: 16px;\n    left: 4px;\n    bottom: 4px;\n    background-color: white;\n    transition: .4s;\n}\n\n\ninput:checked + .slider {\n    background-color: #2196F3;\n}\n\n\ninput:focus + .slider {\n    box-shadow: 0 0 1px #2196F3;\n}\n\n\ninput:checked + .slider:before {\n    -webkit-transform: translateX(26px);\n    transform: translateX(26px);\n}\n\n\n.slider.round {\n    border-radius: 34px;\n}\n\n\n.slider.round:before {\n    border-radius: 50%;\n}\n\n\n#UpMarginFld{\n    margin-top: 1em;\n}\n\n\n#customrowFld {\n    height: 100%;\n    padding-bottom: 1000%;\n\n\n    overflow-y: hidden;\n}\n\n\n@media (max-width: 600px) {\n    #DarkBgFld{\n        padding: 0;\n        margin: 0;\n    }\n    .wbdv-fnt-fld-side{\n        font-size: 10px;\n    }\n\n    div.btn-group.nav-link.active{\n        padding: 0;\n        margin: 0;\n    }\n    .wbdv-remove-lef-right-pm{\n        padding-left: 0;\n        padding-right: 0;\n        margin-left: 0;\n        margin-right: 0;\n    }\n\n\n}\n\n\n.wbdv-modulelist-button-fa{\n    color: white;\n}\n\n\n.fa-check{\n    color: green;\n}\n\n\n.wbdv-font{\n    font-size: 2vw;\n}\n\n\n.wbdv-btn-widget{\n    font-size: 1vw;\n}\n\n\n.wbdv-this-scroll-test{\n    overflow-y: scroll;\n\n}\n\n\n.wbdv-active{\n    background: #0d47a1;\n    color: #0d47a1;\n}\n\n\n.wbdv-lesson-active{\n    background: #0a0406;\n}\n\n\n.wbdv-topic-active{\n    background: #383c3f;\n}\n\n\n.fa-sign-out{\n    color: white;\n}\n\n\n.fa-user{\n    color: white;\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGluZy13aWRnZXQvaGVhZGluZy13aWRnZXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWixzQkFBc0I7SUFDdEIsZ0JBQWdCO0FBQ3BCOzs7QUFHQTtJQUNJLGdCQUFnQjs7QUFFcEI7OztBQUdBO0lBQ0ksWUFBWTtBQUNoQjs7O0FBQ0E7SUFDSSxhQUFhO0FBQ2pCOzs7QUFDQTtJQUNJLDRCQUFvQjtZQUFwQixvQkFBb0I7SUFDcEIsWUFBWTtBQUNoQjs7O0FBRUE7O0FBRUE7OztBQUVBOztJQUVJLFdBQVc7SUFDWCxZQUFZOztBQUVoQjs7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7OztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7O0FBQ0E7SUFDSSxZQUFZO0lBQ1osV0FBVzs7QUFFZjs7O0FBQ0E7SUFDSSxZQUFZOztBQUVoQjs7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsWUFBWTtJQUNaLFlBQVk7QUFDaEI7OztBQUVBO0lBQ0ksY0FBYztJQUNkLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIscUJBQXFCO0lBQ3JCLGlCQUFpQjtJQUNqQixZQUFZOzs7QUFHaEI7OztBQUdBO0lBQ0ksZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixrQkFBa0I7QUFDdEI7OztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLFlBQVk7O0FBRWhCOzs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOzs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsZ0JBQWdCO0FBQ3BCOzs7QUFFQTtJQUNJO0FBQ0o7OztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLGNBQWM7QUFDbEI7OztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOzs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7O0FBR0E7SUFDSSxtQkFBbUI7SUFDbkIsZ0JBQWdCO0FBQ3BCOzs7QUFJQTtJQUNJLG1CQUFtQjtBQUN2Qjs7O0FBRUE7SUFDSTtRQUNJLFNBQVM7UUFDVCxVQUFVO0lBQ2Q7OztBQUdKOzs7QUFFQTtJQUNJLG9CQUFvQjtJQUNwQixrQkFBa0I7O0FBRXRCOzs7QUFDQTtJQUNJLG1CQUFtQjtJQUNuQix5QkFBeUI7SUFDekIsY0FBYzs7QUFFbEI7OztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLHlCQUF5QjtJQUN6QixjQUFjOztBQUVsQjs7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIseUJBQXlCO0lBQ3pCLGNBQWM7QUFDbEI7OztBQUlBO0lBQ0ksbUJBQW1CO0FBQ3ZCOzs7QUFFQTtJQUNJLGdCQUFnQjs7QUFFcEI7OztBQUVBO0lBQ0ksY0FBYztJQUNkLGVBQWU7SUFDZixnQkFBZ0I7QUFDcEI7OztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGVBQWU7QUFDbkI7OztBQUVBO0lBQ0ksZUFBZTs7SUFFZixpQkFBaUI7SUFDakIsV0FBVztJQUNYLFlBQVk7QUFDaEI7OztBQUVBLHdFQUF3RTs7O0FBQ3hFO0lBQ0ksMEJBQTBCO0lBQzFCLHFCQUFxQjtJQUNyQixXQUFXO0lBQ1gsWUFBWTtBQUNoQjs7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsUUFBUTtJQUNSLFNBQVM7QUFDYjs7O0FBRUE7SUFDSSx3QkFBd0I7SUFDeEIsZUFBZTtJQUNmLE1BQU07SUFDTixPQUFPO0lBQ1AsUUFBUTtJQUNSLFNBQVM7SUFDVCxzQkFBc0I7SUFFdEIsZUFBZTtBQUNuQjs7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsV0FBVztJQUNYLFlBQVk7SUFDWixXQUFXO0lBQ1gsU0FBUztJQUNULFdBQVc7SUFDWCx1QkFBdUI7SUFFdkIsZUFBZTtBQUNuQjs7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7OztBQUVBO0lBQ0ksMkJBQTJCO0FBQy9COzs7QUFFQTtJQUNJLG1DQUFtQztJQUVuQywyQkFBMkI7QUFDL0I7OztBQUdBO0lBQ0ksbUJBQW1CO0FBQ3ZCOzs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7O0FBSUE7SUFDSSxlQUFlO0FBQ25COzs7QUFFQTtJQUNJLFlBQVk7SUFDWixxQkFBcUI7OztJQUdyQixrQkFBa0I7QUFDdEI7OztBQUdBO0lBQ0k7UUFDSSxVQUFVO1FBQ1YsU0FBUztJQUNiO0lBQ0E7UUFDSSxlQUFlO0lBQ25COztJQUVBO1FBQ0ksVUFBVTtRQUNWLFNBQVM7SUFDYjtJQUNBO1FBQ0ksZUFBZTtRQUNmLGdCQUFnQjtRQUNoQixjQUFjO1FBQ2QsZUFBZTtJQUNuQjs7O0FBR0o7OztBQUdBO0lBQ0ksWUFBWTtBQUNoQjs7O0FBSUE7SUFDSSxZQUFZO0FBQ2hCOzs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7OztBQUdBO0lBQ0ksY0FBYztBQUNsQjs7O0FBRUE7SUFDSSxrQkFBa0I7O0FBRXRCOzs7QUFDQTtJQUNJLG1CQUFtQjtJQUNuQixjQUFjO0FBQ2xCOzs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7OztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvaGVhZGluZy13aWRnZXQvaGVhZGluZy13aWRnZXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImh0bWwsIGJvZHkge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogYXV0byAhaW1wb3J0YW50O1xuICAgIG1pbi13aWR0aDogMjUwcHg7XG59XG5cblxuLndiZHYtaGVhZC13aWR7XG4gICAgb3ZlcmZsb3c6IHNjcm9sbDtcblxufVxuXG5cbi53YmR2LWhlaWdodC1yb3ctc3FhdmV7XG4gICAgaGVpZ2h0OiAyMHB4O1xufVxuLndiZHYtYWxpZ24tdGV4dHtcbiAgICBmb250LXNpemU6NHZ3O1xufVxuZGl2LmNvbC00LmJnLWRhcmt7XG4gICAgY29sdW1uLWZpbGw6IGluaGVyaXQ7XG4gICAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uY29udGFpbmVyLWZsdWlke1xuXG59XG5cbi5jb250YWluZXIge1xuXG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuXG59XG5cbiNtYWluQ291cnNlRWRGbGR7XG4gICAgbWluLXdpZHRoOiAyNTBweDtcbn1cblxuLmZhLXRvZ2dsZS1vbntcbiAgICBjb2xvcjogIzBhMDQwNjtcbn1cbmRpdi5yb3d7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuXG59XG4ucm93e1xuICAgIGhlaWdodDogMTAwJTtcblxufVxuXG4jQ3Jvc3NGbGR7XG4gICAgbWFyZ2luLXJpZ2h0OiA0cHg7XG4gICAgcGFkZGluZzogNHB4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cblxuI1RvcFBsdXNGbGR7XG4gICAgY29sb3I6ICNGRkZGRkY7XG4gICAgcGFkZGluZzogYXV0bztcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICAgIG1hcmdpbi10b3A6IDAuNmVtO1xuICAgIG1hcmdpbjogYXV0bztcblxuXG59XG5cblxuLndiZHYtQ3VzdC1Cb3Jke1xuICAgIGJvcmRlcjogIzM4M2MzZjtcbiAgICBiYWNrZ3JvdW5kOiAjMGEwNDA2O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuI0RhcmtCZ0ZsZHtcbiAgICBiYWNrZ3JvdW5kOiAjMGEwNDA2O1xuICAgIGhlaWdodDogMTAwJTtcblxufVxuXG4ud2Jkdi1GdWxse1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi53YmR2LVNpZGVDb2x7XG4gICAgY29sb3I6ICNGRkZGRkY7XG59XG5cbmRpdiNEYXJrQmdGbGQuY29sLTIuYmctZGFya3tcbiAgICBiYWNrZ3JvdW5kOiAjMGEwNDA2O1xufVxuXG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbiNBY3RGbGR7XG4gICAgYmFja2dyb3VuZDogIzQ3OTBlM1xufVxuXG4jVG9waWNQbHVzRmxke1xuICAgIGNvbG9yOiAjRkZGRkZGO1xufVxuXG4ud2Jkdi1Ub3BpYy1CZy1Db2xvcntcbiAgICBiYWNrZ3JvdW5kOiAjN2E3YTdhO1xuICAgIG1hcmdpbi1yaWdodDogMC41ZW07XG4gICAgY29sb3I6ICNGRkZGRkY7XG59XG5cbi53YmR2LVRvcGljLUJnLUNvbG9yOmhvdmVye1xuICAgIGJhY2tncm91bmQ6ICMzODNjM2Y7XG59XG5cbi53YmR2LVRvcGljLUJnLUNvbG9yOmFjdGl2ZXtcbiAgICBiYWNrZ3JvdW5kOiAjMzgzYzNmO1xufVxuXG5cbi53YmR2LWxlc3Nvbi10YWJze1xuICAgIGJhY2tncm91bmQ6ICMyNjI2Mjc7XG4gICAgbWFyZ2luLWxlZnQ6IDRweDtcbn1cblxuXG5cbi53YmR2LWxlc3Nvbi10YWJzOmhvdmVye1xuICAgIGJhY2tncm91bmQ6ICMwYTA0MDY7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiAyMDBweCkge1xuICAgIC53YmR2LWxlc3Nvbi10YWJze1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgfVxuXG5cbn1cblxuLndiZHYtbW9kdWxlLWJ1dHRvbnN7XG4gICAgYm9yZGVyLXN0eWxlOiBvdXRzZXQ7XG4gICAgYm9yZGVyLXJhZGl1czogMjAlO1xuXG59XG4ud2Jkdi1tb2R1bGUtYnV0dG9uczpob3ZlcntcbiAgICBiYWNrZ3JvdW5kOiAjMGQ0N2ExO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwZDQ3YTE7XG4gICAgY29sb3I6ICMwZDQ3YTE7XG5cbn1cblxuLndiZHYtbW9kdWxlLWJ1dHRvbnM6YWN0aXZle1xuICAgIGJhY2tncm91bmQ6ICMwZDQ3YTE7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzBkNDdhMTtcbiAgICBjb2xvcjogIzBkNDdhMTtcblxufVxuXG4ud2Jkdi1tb2R1bGUtYnV0dG9uczphY3RpdmV7XG4gICAgYmFja2dyb3VuZDogIzBkNDdhMTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGQ0N2ExO1xuICAgIGNvbG9yOiAjMGQ0N2ExO1xufVxuXG5cblxuI2FjdGl2ZUJnVG9waWN7XG4gICAgYmFja2dyb3VuZDogIzQ0NDQ0NDtcbn1cblxuLndiZHYteC1wYWR7XG4gICAgbWFyZ2luLWxlZnQ6IDFlbTtcblxufVxuXG4ud2Jkdi1tb2R1bGUtWHtcbiAgICBjb2xvcjogI0ZGRkZGRjtcbiAgICBtYXJnaW4tdG9wOiAxZW07XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLndiZHYtYnRue1xuICAgIG1hcmdpbi1sZWZ0OiAxZW07XG4gICAgbWFyZ2luLXJpZ2h0OiAwO1xufVxuXG4ud2Jkdi1tYXJnaW4tYm9yZHtcbiAgICBib3JkZXI6ICMzODNjM2Y7XG5cbiAgICBib3JkZXItd2lkdGg6IDVweDtcbiAgICBtYXJnaW46IDFlbTtcbiAgICBwYWRkaW5nOiAxZW07XG59XG5cbi8qIFRoaXMgd2FzIHRha2VuIFczIFNjaG9vbHMgKFByb3ZpZGluZyByZWZlcmVuY2UgYXMgYXNrZWQgYnkgcHJvZmVzc29yKi9cbi5zd2l0Y2gge1xuICAgIC8qICAgIHBvc2l0aW9uOiByZWxhdGl2ZTsqL1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB3aWR0aDogNDBweDtcbiAgICBoZWlnaHQ6IDI1cHg7XG59XG5cbi5zd2l0Y2ggaW5wdXQge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgd2lkdGg6IDA7XG4gICAgaGVpZ2h0OiAwO1xufVxuXG4uc2xpZGVyIHtcbiAgICAvKiAgcG9zaXRpb246IGFic29sdXRlOyovXG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjO1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogLjRzO1xuICAgIHRyYW5zaXRpb246IC40cztcbn1cblxuLnNsaWRlcjpiZWZvcmUge1xuICAgIC8qIHBvc2l0aW9uOiBhYnNvbHV0ZTsqL1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgaGVpZ2h0OiAxOHB4O1xuICAgIHdpZHRoOiAxNnB4O1xuICAgIGxlZnQ6IDRweDtcbiAgICBib3R0b206IDRweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IC40cztcbiAgICB0cmFuc2l0aW9uOiAuNHM7XG59XG5cbmlucHV0OmNoZWNrZWQgKyAuc2xpZGVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjE5NkYzO1xufVxuXG5pbnB1dDpmb2N1cyArIC5zbGlkZXIge1xuICAgIGJveC1zaGFkb3c6IDAgMCAxcHggIzIxOTZGMztcbn1cblxuaW5wdXQ6Y2hlY2tlZCArIC5zbGlkZXI6YmVmb3JlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgyNnB4KTtcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDI2cHgpO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgyNnB4KTtcbn1cblxuXG4uc2xpZGVyLnJvdW5kIHtcbiAgICBib3JkZXItcmFkaXVzOiAzNHB4O1xufVxuXG4uc2xpZGVyLnJvdW5kOmJlZm9yZSB7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuXG5cblxuI1VwTWFyZ2luRmxke1xuICAgIG1hcmdpbi10b3A6IDFlbTtcbn1cblxuI2N1c3RvbXJvd0ZsZCB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHBhZGRpbmctYm90dG9tOiAxMDAwJTtcblxuXG4gICAgb3ZlcmZsb3cteTogaGlkZGVuO1xufVxuXG5cbkBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xuICAgICNEYXJrQmdGbGR7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICB9XG4gICAgLndiZHYtZm50LWZsZC1zaWRle1xuICAgICAgICBmb250LXNpemU6IDEwcHg7XG4gICAgfVxuXG4gICAgZGl2LmJ0bi1ncm91cC5uYXYtbGluay5hY3RpdmV7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICB9XG4gICAgLndiZHYtcmVtb3ZlLWxlZi1yaWdodC1wbXtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAwO1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAwO1xuICAgICAgICBtYXJnaW4tbGVmdDogMDtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xuICAgIH1cblxuXG59XG5cblxuLndiZHYtbW9kdWxlbGlzdC1idXR0b24tZmF7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuXG5cblxuLmZhLWNoZWNre1xuICAgIGNvbG9yOiBncmVlbjtcbn1cblxuLndiZHYtZm9udHtcbiAgICBmb250LXNpemU6IDJ2dztcbn1cblxuXG4ud2Jkdi1idG4td2lkZ2V0e1xuICAgIGZvbnQtc2l6ZTogMXZ3O1xufVxuXG4ud2Jkdi10aGlzLXNjcm9sbC10ZXN0e1xuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcblxufVxuLndiZHYtYWN0aXZle1xuICAgIGJhY2tncm91bmQ6ICMwZDQ3YTE7XG4gICAgY29sb3I6ICMwZDQ3YTE7XG59XG5cbi53YmR2LWxlc3Nvbi1hY3RpdmV7XG4gICAgYmFja2dyb3VuZDogIzBhMDQwNjtcbn1cblxuLndiZHYtdG9waWMtYWN0aXZle1xuICAgIGJhY2tncm91bmQ6ICMzODNjM2Y7XG59XG5cbi5mYS1zaWduLW91dHtcbiAgICBjb2xvcjogd2hpdGU7XG59XG5cbi5mYS11c2Vye1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cblxuIl19 */"

/***/ }),

/***/ "./src/app/heading-widget/heading-widget.component.html":
/*!**************************************************************!*\
  !*** ./src/app/heading-widget/heading-widget.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row border wbdv-margin-bord col-12 m-auto  m-md-2 m-lg-2 m-xl-2 pr-lg-2 pr-xl-2 pr-md-2 mb-2 mt-2\" >\n  <form class=\"row text-center col-12 wbdv-head-wid\" [ngSwitch]=\"Widget.size\">\n    <h1 class=\"m-auto mt-1 mb-1 wbdv-head-wid \" *ngSwitchCase=\"1\">{{Widget.text}}</h1>\n     <h2 class=\"m-auto mt-1 mb-1 wbdv-head-wid\" *ngSwitchCase=\"2\">{{Widget.text}}</h2>\n     <h3 class=\"m-auto mt-1 mb-1\" *ngSwitchCase=\"3\">{{Widget.text}}</h3>\n     <h4 class=\"m-auto mt-1 mb-1\" *ngSwitchCase=\"4\">{{Widget.text}}</h4>\n     <h5 class=\"m-auto mt-1 mb-1\" *ngSwitchCase=\"5\">{{Widget.text}}</h5>\n    <h6 class=\"m-auto mt-1 mb-1\" *ngSwitchDefault></h6>\n  </form>\n</div>\n"

/***/ }),

/***/ "./src/app/heading-widget/heading-widget.component.ts":
/*!************************************************************!*\
  !*** ./src/app/heading-widget/heading-widget.component.ts ***!
  \************************************************************/
/*! exports provided: HeadingWidgetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeadingWidgetComponent", function() { return HeadingWidgetComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_widget_model_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/widget.model.client */ "./src/app/models/widget.model.client.ts");



var HeadingWidgetComponent = /** @class */ (function () {
    function HeadingWidgetComponent() {
    }
    HeadingWidgetComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _models_widget_model_client__WEBPACK_IMPORTED_MODULE_2__["Widget"])
    ], HeadingWidgetComponent.prototype, "Widget", void 0);
    HeadingWidgetComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-heading-widget',
            template: __webpack_require__(/*! ./heading-widget.component.html */ "./src/app/heading-widget/heading-widget.component.html"),
            styles: [__webpack_require__(/*! ./heading-widget.component.css */ "./src/app/heading-widget/heading-widget.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HeadingWidgetComponent);
    return HeadingWidgetComponent;
}());



/***/ }),

/***/ "./src/app/image-widget/image-widget.component.css":
/*!*********************************************************!*\
  !*** ./src/app/image-widget/image-widget.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\nhtml, body{\n    height:  100%;\n    width: auto !important;\n    min-width: 250px;\n\n\n\n\n}\n.wbdv-height-row-sqave{\n    height: 20px;\n}\n.wbdv-align-text{\n    font-size:4vw;\n}\ndiv.col-4.bg-dark{\n    -webkit-column-fill: inherit;\n            column-fill: inherit;\n    height: 100%;\n}\n.container-fluid{\n\n}\n.container {\n\n    width: 100%;\n    height: 100%;\n\n}\n#mainCourseEdFld{\n    min-width: 250px;\n}\n.fa-toggle-on{\n    color: #0a0406;\n}\ndiv.row{\n    height: 100%;\n    width: 100%;\n\n}\n.row{\n    height: 100%;\n\n}\n#CrossFld{\n    margin-right: 4px;\n    padding: 4px;\n    color: white;\n}\n#TopPlusFld{\n    color: #FFFFFF;\n    padding: auto;\n    align-self: center;\n    align-content: center;\n    margin-top: 0.6em;\n    margin: auto;\n\n\n}\n.wbdv-Cust-Bord{\n    border: #383c3f;\n    background: #0a0406;\n    border-radius: 5px;\n}\n#DarkBgFld{\n    background: #0a0406;\n    height: 100%;\n\n}\n.wbdv-Full{\n    overflow: hidden;\n}\n.wbdv-SideCol{\n    color: #FFFFFF;\n}\ndiv#DarkBgFld.col-2.bg-dark{\n    background: #0a0406;\n}\n::-webkit-scrollbar {\n    display: none;\n    overflow: hidden;\n}\n#ActFld{\n    background: #4790e3\n}\n#TopicPlusFld{\n    color: #FFFFFF;\n}\n.wbdv-Topic-Bg-Color{\n    background: #7a7a7a;\n    margin-right: 0.5em;\n    color: #FFFFFF;\n}\n.wbdv-Topic-Bg-Color:hover{\n    background: #383c3f;\n}\n.wbdv-Topic-Bg-Color:active{\n    background: #383c3f;\n}\n.wbdv-lesson-tabs{\n    background: #262627;\n    margin-left: 4px;\n}\n.wbdv-lesson-tabs:hover{\n    background: #0a0406;\n}\n@media (max-width: 200px) {\n    .wbdv-lesson-tabs{\n        margin: 0;\n        padding: 0;\n    }\n\n\n}\n.wbdv-module-buttons{\n    border-style: outset;\n    border-radius: 20%;\n\n}\n.wbdv-module-buttons:hover{\n    background: #0d47a1;\n    background-color: #0d47a1;\n    color: #0d47a1;\n\n}\n.wbdv-module-buttons:active{\n    background: #0d47a1;\n    background-color: #0d47a1;\n    color: #0d47a1;\n\n}\n.wbdv-module-buttons:active{\n    background: #0d47a1;\n    background-color: #0d47a1;\n    color: #0d47a1;\n}\n#activeBgTopic{\n    background: #444444;\n}\n.wbdv-x-pad{\n    margin-left: 1em;\n\n}\n.wbdv-module-X{\n    color: #FFFFFF;\n    margin-top: 1em;\n    overflow: hidden;\n}\n.wbdv-btn{\n    margin-left: 1em;\n    margin-right: 0;\n}\n.wbdv-margin-bord{\n    border: #383c3f;\n\n    border-width: 5px;\n    margin: 1em;\n    padding: 1em;\n}\n/* This was taken W3 Schools (Providing reference as asked by professor*/\n.switch {\n    /*    position: relative;*/\n    display: inline-block;\n    width: 40px;\n    height: 25px;\n}\n.switch input {\n    opacity: 0;\n    width: 0;\n    height: 0;\n}\n.slider {\n    /*  position: absolute;*/\n    cursor: pointer;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    background-color: #ccc;\n    transition: .4s;\n}\n.slider:before {\n    /* position: absolute;*/\n    content: \"\";\n    height: 18px;\n    width: 16px;\n    left: 4px;\n    bottom: 4px;\n    background-color: white;\n    transition: .4s;\n}\ninput:checked + .slider {\n    background-color: #2196F3;\n}\ninput:focus + .slider {\n    box-shadow: 0 0 1px #2196F3;\n}\ninput:checked + .slider:before {\n    -webkit-transform: translateX(26px);\n    transform: translateX(26px);\n}\n.slider.round {\n    border-radius: 34px;\n}\n.slider.round:before {\n    border-radius: 50%;\n}\n#UpMarginFld{\n    margin-top: 1em;\n}\n#customrowFld {\n    height: 100%;\n    padding-bottom: 1000%;\n\n\n    overflow-y: hidden;\n}\n@media (max-width: 600px) {\n    #DarkBgFld{\n        padding: 0;\n        margin: 0;\n    }\n    .wbdv-fnt-fld-side{\n        font-size: 10px;\n    }\n\n    div.btn-group.nav-link.active{\n        padding: 0;\n        margin: 0;\n    }\n    .wbdv-remove-lef-right-pm{\n        padding-left: 0;\n        padding-right: 0;\n        margin-left: 0;\n        margin-right: 0;\n    }\n\n\n}\n.wbdv-modulelist-button-fa{\n    color: white;\n}\n.fa-check{\n    color: green;\n}\n.wbdv-font{\n    font-size: 2vw;\n}\n.wbdv-btn-widget{\n    font-size: 1vw;\n}\n.wbdv-this-scroll-test{\n    overflow-y: scroll;\n\n}\n.wbdv-active{\n    background: #0d47a1;\n    color: #0d47a1;\n}\n.wbdv-lesson-active{\n    background: #0a0406;\n}\n.wbdv-topic-active{\n    background: #383c3f;\n}\n.fa-sign-out{\n    color: white;\n}\n.fa-user{\n    color: white;\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW1hZ2Utd2lkZ2V0L2ltYWdlLXdpZGdldC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGdCQUFnQjs7Ozs7QUFLcEI7QUFDQTtJQUNJLFlBQVk7QUFDaEI7QUFDQTtJQUNJLGFBQWE7QUFDakI7QUFDQTtJQUNJLDRCQUFvQjtZQUFwQixvQkFBb0I7SUFDcEIsWUFBWTtBQUNoQjtBQUVBOztBQUVBO0FBRUE7O0lBRUksV0FBVztJQUNYLFlBQVk7O0FBRWhCO0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7QUFFQTtJQUNJLGNBQWM7QUFDbEI7QUFDQTtJQUNJLFlBQVk7SUFDWixXQUFXOztBQUVmO0FBQ0E7SUFDSSxZQUFZOztBQUVoQjtBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixZQUFZO0FBQ2hCO0FBRUE7SUFDSSxjQUFjO0lBQ2QsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIsaUJBQWlCO0lBQ2pCLFlBQVk7OztBQUdoQjtBQUdBO0lBQ0ksZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixrQkFBa0I7QUFDdEI7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixZQUFZOztBQUVoQjtBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCO0FBRUE7SUFDSSxjQUFjO0FBQ2xCO0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7QUFFQTtJQUNJLGFBQWE7SUFDYixnQkFBZ0I7QUFDcEI7QUFFQTtJQUNJO0FBQ0o7QUFFQTtJQUNJLGNBQWM7QUFDbEI7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsY0FBYztBQUNsQjtBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCO0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7QUFHQTtJQUNJLG1CQUFtQjtJQUNuQixnQkFBZ0I7QUFDcEI7QUFJQTtJQUNJLG1CQUFtQjtBQUN2QjtBQUVBO0lBQ0k7UUFDSSxTQUFTO1FBQ1QsVUFBVTtJQUNkOzs7QUFHSjtBQUVBO0lBQ0ksb0JBQW9CO0lBQ3BCLGtCQUFrQjs7QUFFdEI7QUFDQTtJQUNJLG1CQUFtQjtJQUNuQix5QkFBeUI7SUFDekIsY0FBYzs7QUFFbEI7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQix5QkFBeUI7SUFDekIsY0FBYzs7QUFFbEI7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQix5QkFBeUI7SUFDekIsY0FBYztBQUNsQjtBQUlBO0lBQ0ksbUJBQW1CO0FBQ3ZCO0FBRUE7SUFDSSxnQkFBZ0I7O0FBRXBCO0FBRUE7SUFDSSxjQUFjO0lBQ2QsZUFBZTtJQUNmLGdCQUFnQjtBQUNwQjtBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGVBQWU7QUFDbkI7QUFFQTtJQUNJLGVBQWU7O0lBRWYsaUJBQWlCO0lBQ2pCLFdBQVc7SUFDWCxZQUFZO0FBQ2hCO0FBRUEsd0VBQXdFO0FBQ3hFO0lBQ0ksMEJBQTBCO0lBQzFCLHFCQUFxQjtJQUNyQixXQUFXO0lBQ1gsWUFBWTtBQUNoQjtBQUVBO0lBQ0ksVUFBVTtJQUNWLFFBQVE7SUFDUixTQUFTO0FBQ2I7QUFFQTtJQUNJLHdCQUF3QjtJQUN4QixlQUFlO0lBQ2YsTUFBTTtJQUNOLE9BQU87SUFDUCxRQUFRO0lBQ1IsU0FBUztJQUNULHNCQUFzQjtJQUV0QixlQUFlO0FBQ25CO0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsV0FBVztJQUNYLFlBQVk7SUFDWixXQUFXO0lBQ1gsU0FBUztJQUNULFdBQVc7SUFDWCx1QkFBdUI7SUFFdkIsZUFBZTtBQUNuQjtBQUVBO0lBQ0kseUJBQXlCO0FBQzdCO0FBRUE7SUFDSSwyQkFBMkI7QUFDL0I7QUFFQTtJQUNJLG1DQUFtQztJQUVuQywyQkFBMkI7QUFDL0I7QUFHQTtJQUNJLG1CQUFtQjtBQUN2QjtBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCO0FBSUE7SUFDSSxlQUFlO0FBQ25CO0FBRUE7SUFDSSxZQUFZO0lBQ1oscUJBQXFCOzs7SUFHckIsa0JBQWtCO0FBQ3RCO0FBR0E7SUFDSTtRQUNJLFVBQVU7UUFDVixTQUFTO0lBQ2I7SUFDQTtRQUNJLGVBQWU7SUFDbkI7O0lBRUE7UUFDSSxVQUFVO1FBQ1YsU0FBUztJQUNiO0lBQ0E7UUFDSSxlQUFlO1FBQ2YsZ0JBQWdCO1FBQ2hCLGNBQWM7UUFDZCxlQUFlO0lBQ25COzs7QUFHSjtBQUdBO0lBQ0ksWUFBWTtBQUNoQjtBQUlBO0lBQ0ksWUFBWTtBQUNoQjtBQUVBO0lBQ0ksY0FBYztBQUNsQjtBQUdBO0lBQ0ksY0FBYztBQUNsQjtBQUVBO0lBQ0ksa0JBQWtCOztBQUV0QjtBQUNBO0lBQ0ksbUJBQW1CO0lBQ25CLGNBQWM7QUFDbEI7QUFFQTtJQUNJLG1CQUFtQjtBQUN2QjtBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCO0FBRUE7SUFDSSxZQUFZO0FBQ2hCO0FBRUE7SUFDSSxZQUFZO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvaW1hZ2Utd2lkZ2V0L2ltYWdlLXdpZGdldC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG5cbmh0bWwsIGJvZHl7XG4gICAgaGVpZ2h0OiAgMTAwJTtcbiAgICB3aWR0aDogYXV0byAhaW1wb3J0YW50O1xuICAgIG1pbi13aWR0aDogMjUwcHg7XG5cblxuXG5cbn1cbi53YmR2LWhlaWdodC1yb3ctc3FhdmV7XG4gICAgaGVpZ2h0OiAyMHB4O1xufVxuLndiZHYtYWxpZ24tdGV4dHtcbiAgICBmb250LXNpemU6NHZ3O1xufVxuZGl2LmNvbC00LmJnLWRhcmt7XG4gICAgY29sdW1uLWZpbGw6IGluaGVyaXQ7XG4gICAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uY29udGFpbmVyLWZsdWlke1xuXG59XG5cbi5jb250YWluZXIge1xuXG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuXG59XG5cbiNtYWluQ291cnNlRWRGbGR7XG4gICAgbWluLXdpZHRoOiAyNTBweDtcbn1cblxuLmZhLXRvZ2dsZS1vbntcbiAgICBjb2xvcjogIzBhMDQwNjtcbn1cbmRpdi5yb3d7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuXG59XG4ucm93e1xuICAgIGhlaWdodDogMTAwJTtcblxufVxuXG4jQ3Jvc3NGbGR7XG4gICAgbWFyZ2luLXJpZ2h0OiA0cHg7XG4gICAgcGFkZGluZzogNHB4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cblxuI1RvcFBsdXNGbGR7XG4gICAgY29sb3I6ICNGRkZGRkY7XG4gICAgcGFkZGluZzogYXV0bztcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICAgIG1hcmdpbi10b3A6IDAuNmVtO1xuICAgIG1hcmdpbjogYXV0bztcblxuXG59XG5cblxuLndiZHYtQ3VzdC1Cb3Jke1xuICAgIGJvcmRlcjogIzM4M2MzZjtcbiAgICBiYWNrZ3JvdW5kOiAjMGEwNDA2O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuI0RhcmtCZ0ZsZHtcbiAgICBiYWNrZ3JvdW5kOiAjMGEwNDA2O1xuICAgIGhlaWdodDogMTAwJTtcblxufVxuXG4ud2Jkdi1GdWxse1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi53YmR2LVNpZGVDb2x7XG4gICAgY29sb3I6ICNGRkZGRkY7XG59XG5cbmRpdiNEYXJrQmdGbGQuY29sLTIuYmctZGFya3tcbiAgICBiYWNrZ3JvdW5kOiAjMGEwNDA2O1xufVxuXG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbiNBY3RGbGR7XG4gICAgYmFja2dyb3VuZDogIzQ3OTBlM1xufVxuXG4jVG9waWNQbHVzRmxke1xuICAgIGNvbG9yOiAjRkZGRkZGO1xufVxuXG4ud2Jkdi1Ub3BpYy1CZy1Db2xvcntcbiAgICBiYWNrZ3JvdW5kOiAjN2E3YTdhO1xuICAgIG1hcmdpbi1yaWdodDogMC41ZW07XG4gICAgY29sb3I6ICNGRkZGRkY7XG59XG5cbi53YmR2LVRvcGljLUJnLUNvbG9yOmhvdmVye1xuICAgIGJhY2tncm91bmQ6ICMzODNjM2Y7XG59XG5cbi53YmR2LVRvcGljLUJnLUNvbG9yOmFjdGl2ZXtcbiAgICBiYWNrZ3JvdW5kOiAjMzgzYzNmO1xufVxuXG5cbi53YmR2LWxlc3Nvbi10YWJze1xuICAgIGJhY2tncm91bmQ6ICMyNjI2Mjc7XG4gICAgbWFyZ2luLWxlZnQ6IDRweDtcbn1cblxuXG5cbi53YmR2LWxlc3Nvbi10YWJzOmhvdmVye1xuICAgIGJhY2tncm91bmQ6ICMwYTA0MDY7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiAyMDBweCkge1xuICAgIC53YmR2LWxlc3Nvbi10YWJze1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgfVxuXG5cbn1cblxuLndiZHYtbW9kdWxlLWJ1dHRvbnN7XG4gICAgYm9yZGVyLXN0eWxlOiBvdXRzZXQ7XG4gICAgYm9yZGVyLXJhZGl1czogMjAlO1xuXG59XG4ud2Jkdi1tb2R1bGUtYnV0dG9uczpob3ZlcntcbiAgICBiYWNrZ3JvdW5kOiAjMGQ0N2ExO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwZDQ3YTE7XG4gICAgY29sb3I6ICMwZDQ3YTE7XG5cbn1cblxuLndiZHYtbW9kdWxlLWJ1dHRvbnM6YWN0aXZle1xuICAgIGJhY2tncm91bmQ6ICMwZDQ3YTE7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzBkNDdhMTtcbiAgICBjb2xvcjogIzBkNDdhMTtcblxufVxuXG4ud2Jkdi1tb2R1bGUtYnV0dG9uczphY3RpdmV7XG4gICAgYmFja2dyb3VuZDogIzBkNDdhMTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGQ0N2ExO1xuICAgIGNvbG9yOiAjMGQ0N2ExO1xufVxuXG5cblxuI2FjdGl2ZUJnVG9waWN7XG4gICAgYmFja2dyb3VuZDogIzQ0NDQ0NDtcbn1cblxuLndiZHYteC1wYWR7XG4gICAgbWFyZ2luLWxlZnQ6IDFlbTtcblxufVxuXG4ud2Jkdi1tb2R1bGUtWHtcbiAgICBjb2xvcjogI0ZGRkZGRjtcbiAgICBtYXJnaW4tdG9wOiAxZW07XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLndiZHYtYnRue1xuICAgIG1hcmdpbi1sZWZ0OiAxZW07XG4gICAgbWFyZ2luLXJpZ2h0OiAwO1xufVxuXG4ud2Jkdi1tYXJnaW4tYm9yZHtcbiAgICBib3JkZXI6ICMzODNjM2Y7XG5cbiAgICBib3JkZXItd2lkdGg6IDVweDtcbiAgICBtYXJnaW46IDFlbTtcbiAgICBwYWRkaW5nOiAxZW07XG59XG5cbi8qIFRoaXMgd2FzIHRha2VuIFczIFNjaG9vbHMgKFByb3ZpZGluZyByZWZlcmVuY2UgYXMgYXNrZWQgYnkgcHJvZmVzc29yKi9cbi5zd2l0Y2gge1xuICAgIC8qICAgIHBvc2l0aW9uOiByZWxhdGl2ZTsqL1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB3aWR0aDogNDBweDtcbiAgICBoZWlnaHQ6IDI1cHg7XG59XG5cbi5zd2l0Y2ggaW5wdXQge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgd2lkdGg6IDA7XG4gICAgaGVpZ2h0OiAwO1xufVxuXG4uc2xpZGVyIHtcbiAgICAvKiAgcG9zaXRpb246IGFic29sdXRlOyovXG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjO1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogLjRzO1xuICAgIHRyYW5zaXRpb246IC40cztcbn1cblxuLnNsaWRlcjpiZWZvcmUge1xuICAgIC8qIHBvc2l0aW9uOiBhYnNvbHV0ZTsqL1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgaGVpZ2h0OiAxOHB4O1xuICAgIHdpZHRoOiAxNnB4O1xuICAgIGxlZnQ6IDRweDtcbiAgICBib3R0b206IDRweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IC40cztcbiAgICB0cmFuc2l0aW9uOiAuNHM7XG59XG5cbmlucHV0OmNoZWNrZWQgKyAuc2xpZGVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjE5NkYzO1xufVxuXG5pbnB1dDpmb2N1cyArIC5zbGlkZXIge1xuICAgIGJveC1zaGFkb3c6IDAgMCAxcHggIzIxOTZGMztcbn1cblxuaW5wdXQ6Y2hlY2tlZCArIC5zbGlkZXI6YmVmb3JlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgyNnB4KTtcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDI2cHgpO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgyNnB4KTtcbn1cblxuXG4uc2xpZGVyLnJvdW5kIHtcbiAgICBib3JkZXItcmFkaXVzOiAzNHB4O1xufVxuXG4uc2xpZGVyLnJvdW5kOmJlZm9yZSB7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuXG5cblxuI1VwTWFyZ2luRmxke1xuICAgIG1hcmdpbi10b3A6IDFlbTtcbn1cblxuI2N1c3RvbXJvd0ZsZCB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHBhZGRpbmctYm90dG9tOiAxMDAwJTtcblxuXG4gICAgb3ZlcmZsb3cteTogaGlkZGVuO1xufVxuXG5cbkBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xuICAgICNEYXJrQmdGbGR7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICB9XG4gICAgLndiZHYtZm50LWZsZC1zaWRle1xuICAgICAgICBmb250LXNpemU6IDEwcHg7XG4gICAgfVxuXG4gICAgZGl2LmJ0bi1ncm91cC5uYXYtbGluay5hY3RpdmV7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICB9XG4gICAgLndiZHYtcmVtb3ZlLWxlZi1yaWdodC1wbXtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAwO1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAwO1xuICAgICAgICBtYXJnaW4tbGVmdDogMDtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xuICAgIH1cblxuXG59XG5cblxuLndiZHYtbW9kdWxlbGlzdC1idXR0b24tZmF7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuXG5cblxuLmZhLWNoZWNre1xuICAgIGNvbG9yOiBncmVlbjtcbn1cblxuLndiZHYtZm9udHtcbiAgICBmb250LXNpemU6IDJ2dztcbn1cblxuXG4ud2Jkdi1idG4td2lkZ2V0e1xuICAgIGZvbnQtc2l6ZTogMXZ3O1xufVxuXG4ud2Jkdi10aGlzLXNjcm9sbC10ZXN0e1xuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcblxufVxuLndiZHYtYWN0aXZle1xuICAgIGJhY2tncm91bmQ6ICMwZDQ3YTE7XG4gICAgY29sb3I6ICMwZDQ3YTE7XG59XG5cbi53YmR2LWxlc3Nvbi1hY3RpdmV7XG4gICAgYmFja2dyb3VuZDogIzBhMDQwNjtcbn1cblxuLndiZHYtdG9waWMtYWN0aXZle1xuICAgIGJhY2tncm91bmQ6ICMzODNjM2Y7XG59XG5cbi5mYS1zaWduLW91dHtcbiAgICBjb2xvcjogd2hpdGU7XG59XG5cbi5mYS11c2Vye1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cblxuIl19 */"

/***/ }),

/***/ "./src/app/image-widget/image-widget.component.html":
/*!**********************************************************!*\
  !*** ./src/app/image-widget/image-widget.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row border wbdv-margin-bord col-12 m-auto  m-md-2 m-lg-2 m-xl-2 pr-lg-2 pr-xl-2 pr-md-2 mb-2 mt-2\" >\n  <br/>\n<form class=\"row text-center col-12 \">\n  <img class=\"col-12 m-xs-0 p-xs-0 p-0 m-sm-0 p-sm-0  overflow-hidden  wbdv-img-wid\" src=\"{{Widget.src}}\" alt=\"Broken Link\"/>\n</form>\n  <br/>\n</div>"

/***/ }),

/***/ "./src/app/image-widget/image-widget.component.ts":
/*!********************************************************!*\
  !*** ./src/app/image-widget/image-widget.component.ts ***!
  \********************************************************/
/*! exports provided: ImageWidgetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageWidgetComponent", function() { return ImageWidgetComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_widget_model_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/widget.model.client */ "./src/app/models/widget.model.client.ts");



var ImageWidgetComponent = /** @class */ (function () {
    function ImageWidgetComponent() {
    }
    ImageWidgetComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _models_widget_model_client__WEBPACK_IMPORTED_MODULE_2__["Widget"])
    ], ImageWidgetComponent.prototype, "Widget", void 0);
    ImageWidgetComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-image-widget',
            template: __webpack_require__(/*! ./image-widget.component.html */ "./src/app/image-widget/image-widget.component.html"),
            styles: [__webpack_require__(/*! ./image-widget.component.css */ "./src/app/image-widget/image-widget.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ImageWidgetComponent);
    return ImageWidgetComponent;
}());



/***/ }),

/***/ "./src/app/lesson-tabs/lesson-tabs.component.css":
/*!*******************************************************!*\
  !*** ./src/app/lesson-tabs/lesson-tabs.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "html, body{\n    height:  100%;\n    width: auto !important;\n    min-width: 250px;\n\n\n\n\n}\n.wbdv-height-row-sqave{\n    height: 20px;\n}\n.wbdv-align-text{\n    font-size:4vw;\n}\ndiv.col-4.bg-dark{\n    -webkit-column-fill: inherit;\n            column-fill: inherit;\n    height: 100%;\n}\n.container-fluid{\n\n}\n.container {\n\n    width: 100%;\n    height: 100%;\n\n}\n#mainCourseEdFld{\n    min-width: 250px;\n}\n.fa-toggle-on{\n    color: #0a0406;\n}\ndiv.row{\n    height: 100%;\n    width: 100%;\n\n}\n.row{\n    height: 100%;\n\n}\n#CrossFld{\n    margin-right: 4px;\n    padding: 4px;\n    color: white;\n}\n#TopPlusFld{\n    color: #FFFFFF;\n    padding: auto;\n    align-self: center;\n    align-content: center;\n    margin-top: 0.6em;\n    margin: auto;\n\n\n}\n.wbdv-Cust-Bord{\n    border: #383c3f;\n    background: #0a0406;\n    border-radius: 5px;\n}\n#DarkBgFld{\n    background: #0a0406;\n    height: 100%;\n\n}\n.wbdv-Full{\n    overflow: hidden;\n}\n.wbdv-SideCol{\n    color: #FFFFFF;\n}\ndiv#DarkBgFld.col-2.bg-dark{\n    background: #0a0406;\n}\n::-webkit-scrollbar {\n    display: none;\n    overflow: hidden;\n}\n#ActFld{\n    background: #4790e3\n}\n#TopicPlusFld{\n    color: #FFFFFF;\n}\n.wbdv-Topic-Bg-Color{\n    background: #7a7a7a;\n    margin-right: 0.5em;\n    color: #FFFFFF;\n}\n.wbdv-Topic-Bg-Color:hover{\n    background: #383c3f;\n}\n.wbdv-Topic-Bg-Color:active{\n    background: #383c3f;\n}\n.wbdv-lesson-tabs{\n    background: #262627;\n    margin-left: 4px;\n}\n.wbdv-lesson-tabs:hover{\n    background: #0a0406;\n}\n@media (max-width: 200px) {\n    .wbdv-lesson-tabs{\n        margin: 0;\n        padding: 0;\n    }\n\n\n}\n.wbdv-module-buttons{\n    border-style: outset;\n    border-radius: 20%;\n\n}\n.wbdv-module-buttons:hover{\n    background: #0d47a1;\n    background-color: #0d47a1;\n    color: #0d47a1;\n\n}\n.wbdv-module-buttons:active{\n    background: #0d47a1;\n    background-color: #0d47a1;\n    color: #0d47a1;\n\n}\n.wbdv-module-buttons:active{\n    background: #0d47a1;\n    background-color: #0d47a1;\n    color: #0d47a1;\n}\n#activeBgTopic{\n    background: #444444;\n}\n.wbdv-x-pad{\n    margin-left: 1em;\n\n}\n.wbdv-module-X{\n    color: #FFFFFF;\n    margin-top: 1em;\n    overflow: hidden;\n}\n.wbdv-btn{\n    margin-left: 1em;\n    margin-right: 0;\n}\n.wbdv-margin-bord{\n    border: #383c3f;\n\n    border-width: 5px;\n    margin: 1em;\n    padding: 1em;\n}\n/* This was taken W3 Schools (Providing reference as asked by professor*/\n.switch {\n    /*    position: relative;*/\n    display: inline-block;\n    width: 40px;\n    height: 25px;\n}\n.switch input {\n    opacity: 0;\n    width: 0;\n    height: 0;\n}\n.slider {\n    /*  position: absolute;*/\n    cursor: pointer;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    background-color: #ccc;\n    transition: .4s;\n}\n.slider:before {\n    /* position: absolute;*/\n    content: \"\";\n    height: 18px;\n    width: 16px;\n    left: 4px;\n    bottom: 4px;\n    background-color: white;\n    transition: .4s;\n}\ninput:checked + .slider {\n    background-color: #2196F3;\n}\ninput:focus + .slider {\n    box-shadow: 0 0 1px #2196F3;\n}\ninput:checked + .slider:before {\n    -webkit-transform: translateX(26px);\n    transform: translateX(26px);\n}\n.slider.round {\n    border-radius: 34px;\n}\n.slider.round:before {\n    border-radius: 50%;\n}\n#UpMarginFld{\n    margin-top: 1em;\n}\n#customrowFld {\n    height: 100%;\n    padding-bottom: 1000%;\n\n\n    overflow-y: hidden;\n}\n@media (max-width: 600px) {\n    #DarkBgFld{\n        padding: 0;\n        margin: 0;\n    }\n    .wbdv-fnt-fld-side{\n        font-size: 10px;\n    }\n\n    div.btn-group.nav-link.active{\n        padding: 0;\n        margin: 0;\n    }\n    .wbdv-remove-lef-right-pm{\n        padding-left: 0;\n        padding-right: 0;\n        margin-left: 0;\n        margin-right: 0;\n    }\n\n\n}\n.wbdv-modulelist-button-fa{\n    color: white;\n}\n.fa-check{\n    color: green;\n}\n.wbdv-font{\n    font-size: 2vw;\n}\n.wbdv-btn-widget{\n    font-size: 1vw;\n}\n.wbdv-this-scroll-test{\n    overflow-y: scroll;\n\n}\n.wbdv-active{\n    background: #0d47a1;\n    color: #0d47a1;\n}\n.wbdv-modAct{\n    background: #0d47a1;\n    color: #0d47a1;\n}\n.wbdv-modAct:active{\n    background: #0d47a1;\n    color: #0d47a1;\n}\n.wbdv-lesson-active{\n    background: #0a0406;\n}\n.wbdv-topic-active{\n    background: #383c3f;\n}\n.fa-sign-out{\n    color: white;\n}\n.fa-user{\n    color: white;\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGVzc29uLXRhYnMvbGVzc29uLXRhYnMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsZ0JBQWdCOzs7OztBQUtwQjtBQUNBO0lBQ0ksWUFBWTtBQUNoQjtBQUNBO0lBQ0ksYUFBYTtBQUNqQjtBQUNBO0lBQ0ksNEJBQW9CO1lBQXBCLG9CQUFvQjtJQUNwQixZQUFZO0FBQ2hCO0FBRUE7O0FBRUE7QUFFQTs7SUFFSSxXQUFXO0lBQ1gsWUFBWTs7QUFFaEI7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjtBQUVBO0lBQ0ksY0FBYztBQUNsQjtBQUNBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7O0FBRWY7QUFDQTtJQUNJLFlBQVk7O0FBRWhCO0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsWUFBWTtJQUNaLFlBQVk7QUFDaEI7QUFFQTtJQUNJLGNBQWM7SUFDZCxhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQixpQkFBaUI7SUFDakIsWUFBWTs7O0FBR2hCO0FBR0E7SUFDSSxlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLGtCQUFrQjtBQUN0QjtBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLFlBQVk7O0FBRWhCO0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7QUFFQTtJQUNJLGNBQWM7QUFDbEI7QUFFQTtJQUNJLG1CQUFtQjtBQUN2QjtBQUVBO0lBQ0ksYUFBYTtJQUNiLGdCQUFnQjtBQUNwQjtBQUVBO0lBQ0k7QUFDSjtBQUVBO0lBQ0ksY0FBYztBQUNsQjtBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixjQUFjO0FBQ2xCO0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7QUFFQTtJQUNJLG1CQUFtQjtBQUN2QjtBQUdBO0lBQ0ksbUJBQW1CO0lBQ25CLGdCQUFnQjtBQUNwQjtBQUlBO0lBQ0ksbUJBQW1CO0FBQ3ZCO0FBRUE7SUFDSTtRQUNJLFNBQVM7UUFDVCxVQUFVO0lBQ2Q7OztBQUdKO0FBRUE7SUFDSSxvQkFBb0I7SUFDcEIsa0JBQWtCOztBQUV0QjtBQUNBO0lBQ0ksbUJBQW1CO0lBQ25CLHlCQUF5QjtJQUN6QixjQUFjOztBQUVsQjtBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLHlCQUF5QjtJQUN6QixjQUFjOztBQUVsQjtBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLHlCQUF5QjtJQUN6QixjQUFjO0FBQ2xCO0FBSUE7SUFDSSxtQkFBbUI7QUFDdkI7QUFFQTtJQUNJLGdCQUFnQjs7QUFFcEI7QUFFQTtJQUNJLGNBQWM7SUFDZCxlQUFlO0lBQ2YsZ0JBQWdCO0FBQ3BCO0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsZUFBZTtBQUNuQjtBQUVBO0lBQ0ksZUFBZTs7SUFFZixpQkFBaUI7SUFDakIsV0FBVztJQUNYLFlBQVk7QUFDaEI7QUFFQSx3RUFBd0U7QUFDeEU7SUFDSSwwQkFBMEI7SUFDMUIscUJBQXFCO0lBQ3JCLFdBQVc7SUFDWCxZQUFZO0FBQ2hCO0FBRUE7SUFDSSxVQUFVO0lBQ1YsUUFBUTtJQUNSLFNBQVM7QUFDYjtBQUVBO0lBQ0ksd0JBQXdCO0lBQ3hCLGVBQWU7SUFDZixNQUFNO0lBQ04sT0FBTztJQUNQLFFBQVE7SUFDUixTQUFTO0lBQ1Qsc0JBQXNCO0lBRXRCLGVBQWU7QUFDbkI7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixXQUFXO0lBQ1gsWUFBWTtJQUNaLFdBQVc7SUFDWCxTQUFTO0lBQ1QsV0FBVztJQUNYLHVCQUF1QjtJQUV2QixlQUFlO0FBQ25CO0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7QUFFQTtJQUNJLDJCQUEyQjtBQUMvQjtBQUVBO0lBQ0ksbUNBQW1DO0lBRW5DLDJCQUEyQjtBQUMvQjtBQUdBO0lBQ0ksbUJBQW1CO0FBQ3ZCO0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7QUFJQTtJQUNJLGVBQWU7QUFDbkI7QUFFQTtJQUNJLFlBQVk7SUFDWixxQkFBcUI7OztJQUdyQixrQkFBa0I7QUFDdEI7QUFHQTtJQUNJO1FBQ0ksVUFBVTtRQUNWLFNBQVM7SUFDYjtJQUNBO1FBQ0ksZUFBZTtJQUNuQjs7SUFFQTtRQUNJLFVBQVU7UUFDVixTQUFTO0lBQ2I7SUFDQTtRQUNJLGVBQWU7UUFDZixnQkFBZ0I7UUFDaEIsY0FBYztRQUNkLGVBQWU7SUFDbkI7OztBQUdKO0FBR0E7SUFDSSxZQUFZO0FBQ2hCO0FBSUE7SUFDSSxZQUFZO0FBQ2hCO0FBRUE7SUFDSSxjQUFjO0FBQ2xCO0FBR0E7SUFDSSxjQUFjO0FBQ2xCO0FBRUE7SUFDSSxrQkFBa0I7O0FBRXRCO0FBQ0E7SUFDSSxtQkFBbUI7SUFDbkIsY0FBYztBQUNsQjtBQUNBO0lBQ0ksbUJBQW1CO0lBQ25CLGNBQWM7QUFDbEI7QUFDQTtJQUNJLG1CQUFtQjtJQUNuQixjQUFjO0FBQ2xCO0FBR0E7SUFDSSxtQkFBbUI7QUFDdkI7QUFFQTtJQUNJLG1CQUFtQjtBQUN2QjtBQUVBO0lBQ0ksWUFBWTtBQUNoQjtBQUVBO0lBQ0ksWUFBWTtBQUNoQiIsImZpbGUiOiJzcmMvYXBwL2xlc3Nvbi10YWJzL2xlc3Nvbi10YWJzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJodG1sLCBib2R5e1xuICAgIGhlaWdodDogIDEwMCU7XG4gICAgd2lkdGg6IGF1dG8gIWltcG9ydGFudDtcbiAgICBtaW4td2lkdGg6IDI1MHB4O1xuXG5cblxuXG59XG4ud2Jkdi1oZWlnaHQtcm93LXNxYXZle1xuICAgIGhlaWdodDogMjBweDtcbn1cbi53YmR2LWFsaWduLXRleHR7XG4gICAgZm9udC1zaXplOjR2dztcbn1cbmRpdi5jb2wtNC5iZy1kYXJre1xuICAgIGNvbHVtbi1maWxsOiBpbmhlcml0O1xuICAgIGhlaWdodDogMTAwJTtcbn1cblxuLmNvbnRhaW5lci1mbHVpZHtcblxufVxuXG4uY29udGFpbmVyIHtcblxuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcblxufVxuXG4jbWFpbkNvdXJzZUVkRmxke1xuICAgIG1pbi13aWR0aDogMjUwcHg7XG59XG5cbi5mYS10b2dnbGUtb257XG4gICAgY29sb3I6ICMwYTA0MDY7XG59XG5kaXYucm93e1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcblxufVxuLnJvd3tcbiAgICBoZWlnaHQ6IDEwMCU7XG5cbn1cblxuI0Nyb3NzRmxke1xuICAgIG1hcmdpbi1yaWdodDogNHB4O1xuICAgIHBhZGRpbmc6IDRweDtcbiAgICBjb2xvcjogd2hpdGU7XG59XG5cbiNUb3BQbHVzRmxke1xuICAgIGNvbG9yOiAjRkZGRkZGO1xuICAgIHBhZGRpbmc6IGF1dG87XG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBtYXJnaW4tdG9wOiAwLjZlbTtcbiAgICBtYXJnaW46IGF1dG87XG5cblxufVxuXG5cbi53YmR2LUN1c3QtQm9yZHtcbiAgICBib3JkZXI6ICMzODNjM2Y7XG4gICAgYmFja2dyb3VuZDogIzBhMDQwNjtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbiNEYXJrQmdGbGR7XG4gICAgYmFja2dyb3VuZDogIzBhMDQwNjtcbiAgICBoZWlnaHQ6IDEwMCU7XG5cbn1cblxuLndiZHYtRnVsbHtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4ud2Jkdi1TaWRlQ29se1xuICAgIGNvbG9yOiAjRkZGRkZGO1xufVxuXG5kaXYjRGFya0JnRmxkLmNvbC0yLmJnLWRhcmt7XG4gICAgYmFja2dyb3VuZDogIzBhMDQwNjtcbn1cblxuOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4jQWN0Rmxke1xuICAgIGJhY2tncm91bmQ6ICM0NzkwZTNcbn1cblxuI1RvcGljUGx1c0ZsZHtcbiAgICBjb2xvcjogI0ZGRkZGRjtcbn1cblxuLndiZHYtVG9waWMtQmctQ29sb3J7XG4gICAgYmFja2dyb3VuZDogIzdhN2E3YTtcbiAgICBtYXJnaW4tcmlnaHQ6IDAuNWVtO1xuICAgIGNvbG9yOiAjRkZGRkZGO1xufVxuXG4ud2Jkdi1Ub3BpYy1CZy1Db2xvcjpob3ZlcntcbiAgICBiYWNrZ3JvdW5kOiAjMzgzYzNmO1xufVxuXG4ud2Jkdi1Ub3BpYy1CZy1Db2xvcjphY3RpdmV7XG4gICAgYmFja2dyb3VuZDogIzM4M2MzZjtcbn1cblxuXG4ud2Jkdi1sZXNzb24tdGFic3tcbiAgICBiYWNrZ3JvdW5kOiAjMjYyNjI3O1xuICAgIG1hcmdpbi1sZWZ0OiA0cHg7XG59XG5cblxuXG4ud2Jkdi1sZXNzb24tdGFiczpob3ZlcntcbiAgICBiYWNrZ3JvdW5kOiAjMGEwNDA2O1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogMjAwcHgpIHtcbiAgICAud2Jkdi1sZXNzb24tdGFic3tcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgIH1cblxuXG59XG5cbi53YmR2LW1vZHVsZS1idXR0b25ze1xuICAgIGJvcmRlci1zdHlsZTogb3V0c2V0O1xuICAgIGJvcmRlci1yYWRpdXM6IDIwJTtcblxufVxuLndiZHYtbW9kdWxlLWJ1dHRvbnM6aG92ZXJ7XG4gICAgYmFja2dyb3VuZDogIzBkNDdhMTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGQ0N2ExO1xuICAgIGNvbG9yOiAjMGQ0N2ExO1xuXG59XG5cbi53YmR2LW1vZHVsZS1idXR0b25zOmFjdGl2ZXtcbiAgICBiYWNrZ3JvdW5kOiAjMGQ0N2ExO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwZDQ3YTE7XG4gICAgY29sb3I6ICMwZDQ3YTE7XG5cbn1cblxuLndiZHYtbW9kdWxlLWJ1dHRvbnM6YWN0aXZle1xuICAgIGJhY2tncm91bmQ6ICMwZDQ3YTE7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzBkNDdhMTtcbiAgICBjb2xvcjogIzBkNDdhMTtcbn1cblxuXG5cbiNhY3RpdmVCZ1RvcGlje1xuICAgIGJhY2tncm91bmQ6ICM0NDQ0NDQ7XG59XG5cbi53YmR2LXgtcGFke1xuICAgIG1hcmdpbi1sZWZ0OiAxZW07XG5cbn1cblxuLndiZHYtbW9kdWxlLVh7XG4gICAgY29sb3I6ICNGRkZGRkY7XG4gICAgbWFyZ2luLXRvcDogMWVtO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi53YmR2LWJ0bntcbiAgICBtYXJnaW4tbGVmdDogMWVtO1xuICAgIG1hcmdpbi1yaWdodDogMDtcbn1cblxuLndiZHYtbWFyZ2luLWJvcmR7XG4gICAgYm9yZGVyOiAjMzgzYzNmO1xuXG4gICAgYm9yZGVyLXdpZHRoOiA1cHg7XG4gICAgbWFyZ2luOiAxZW07XG4gICAgcGFkZGluZzogMWVtO1xufVxuXG4vKiBUaGlzIHdhcyB0YWtlbiBXMyBTY2hvb2xzIChQcm92aWRpbmcgcmVmZXJlbmNlIGFzIGFza2VkIGJ5IHByb2Zlc3NvciovXG4uc3dpdGNoIHtcbiAgICAvKiAgICBwb3NpdGlvbjogcmVsYXRpdmU7Ki9cbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgd2lkdGg6IDQwcHg7XG4gICAgaGVpZ2h0OiAyNXB4O1xufVxuXG4uc3dpdGNoIGlucHV0IHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHdpZHRoOiAwO1xuICAgIGhlaWdodDogMDtcbn1cblxuLnNsaWRlciB7XG4gICAgLyogIHBvc2l0aW9uOiBhYnNvbHV0ZTsqL1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICBib3R0b206IDA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2NjYztcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IC40cztcbiAgICB0cmFuc2l0aW9uOiAuNHM7XG59XG5cbi5zbGlkZXI6YmVmb3JlIHtcbiAgICAvKiBwb3NpdGlvbjogYWJzb2x1dGU7Ki9cbiAgICBjb250ZW50OiBcIlwiO1xuICAgIGhlaWdodDogMThweDtcbiAgICB3aWR0aDogMTZweDtcbiAgICBsZWZ0OiA0cHg7XG4gICAgYm90dG9tOiA0cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiAuNHM7XG4gICAgdHJhbnNpdGlvbjogLjRzO1xufVxuXG5pbnB1dDpjaGVja2VkICsgLnNsaWRlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIxOTZGMztcbn1cblxuaW5wdXQ6Zm9jdXMgKyAuc2xpZGVyIHtcbiAgICBib3gtc2hhZG93OiAwIDAgMXB4ICMyMTk2RjM7XG59XG5cbmlucHV0OmNoZWNrZWQgKyAuc2xpZGVyOmJlZm9yZSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjZweCk7XG4gICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgyNnB4KTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjZweCk7XG59XG5cblxuLnNsaWRlci5yb3VuZCB7XG4gICAgYm9yZGVyLXJhZGl1czogMzRweDtcbn1cblxuLnNsaWRlci5yb3VuZDpiZWZvcmUge1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cblxuXG5cbiNVcE1hcmdpbkZsZHtcbiAgICBtYXJnaW4tdG9wOiAxZW07XG59XG5cbiNjdXN0b21yb3dGbGQge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTAwMCU7XG5cblxuICAgIG92ZXJmbG93LXk6IGhpZGRlbjtcbn1cblxuXG5AbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgICAjRGFya0JnRmxke1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgfVxuICAgIC53YmR2LWZudC1mbGQtc2lkZXtcbiAgICAgICAgZm9udC1zaXplOiAxMHB4O1xuICAgIH1cblxuICAgIGRpdi5idG4tZ3JvdXAubmF2LWxpbmsuYWN0aXZle1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgfVxuICAgIC53YmR2LXJlbW92ZS1sZWYtcmlnaHQtcG17XG4gICAgICAgIHBhZGRpbmctbGVmdDogMDtcbiAgICAgICAgcGFkZGluZy1yaWdodDogMDtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMDtcbiAgICB9XG5cblxufVxuXG5cbi53YmR2LW1vZHVsZWxpc3QtYnV0dG9uLWZhe1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cblxuXG5cbi5mYS1jaGVja3tcbiAgICBjb2xvcjogZ3JlZW47XG59XG5cbi53YmR2LWZvbnR7XG4gICAgZm9udC1zaXplOiAydnc7XG59XG5cblxuLndiZHYtYnRuLXdpZGdldHtcbiAgICBmb250LXNpemU6IDF2dztcbn1cblxuLndiZHYtdGhpcy1zY3JvbGwtdGVzdHtcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XG5cbn1cbi53YmR2LWFjdGl2ZXtcbiAgICBiYWNrZ3JvdW5kOiAjMGQ0N2ExO1xuICAgIGNvbG9yOiAjMGQ0N2ExO1xufVxuLndiZHYtbW9kQWN0e1xuICAgIGJhY2tncm91bmQ6ICMwZDQ3YTE7XG4gICAgY29sb3I6ICMwZDQ3YTE7XG59XG4ud2Jkdi1tb2RBY3Q6YWN0aXZle1xuICAgIGJhY2tncm91bmQ6ICMwZDQ3YTE7XG4gICAgY29sb3I6ICMwZDQ3YTE7XG59XG5cblxuLndiZHYtbGVzc29uLWFjdGl2ZXtcbiAgICBiYWNrZ3JvdW5kOiAjMGEwNDA2O1xufVxuXG4ud2Jkdi10b3BpYy1hY3RpdmV7XG4gICAgYmFja2dyb3VuZDogIzM4M2MzZjtcbn1cblxuLmZhLXNpZ24tb3V0e1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmZhLXVzZXJ7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuXG4iXX0= */"

/***/ }),

/***/ "./src/app/lesson-tabs/lesson-tabs.component.html":
/*!********************************************************!*\
  !*** ./src/app/lesson-tabs/lesson-tabs.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul class=\"row nav  nav-pills ml-2 pb-2\" >\n      <li *ngFor=\"let lesson of lessons\" >\n          <div  [ngClass]=\"{'wbdv-modAct': lesson.id == lessonId}\" class=\"btn-group nav-link btn-secondary  wbdv-fnt-fld-side  mr-2 text-white mt-1\"\n             routerLink=\"/course/{{courseId}}/module/{{moduleId}}/lesson/{{lesson.id}}\">\n              {{lesson.title}}</div>\n      </li>\n</ul>\n\n\n\n"

/***/ }),

/***/ "./src/app/lesson-tabs/lesson-tabs.component.ts":
/*!******************************************************!*\
  !*** ./src/app/lesson-tabs/lesson-tabs.component.ts ***!
  \******************************************************/
/*! exports provided: LessonTabsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LessonTabsComponent", function() { return LessonTabsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_lesson_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/lesson.service.client */ "./src/services/lesson.service.client.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_course_service_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/course.service.client */ "./src/services/course.service.client.ts");





var LessonTabsComponent = /** @class */ (function () {
    function LessonTabsComponent(service, activatedRoute, courseService) {
        var _this = this;
        this.service = service;
        this.activatedRoute = activatedRoute;
        this.courseService = courseService;
        //@Input() CourseN: string;
        this.courses = [];
        this.modules = [];
        this.lessons = [];
        this.topics = [];
        this.selectedLessonFun = function (lesId) {
            _this.selectedLesson = lesId;
        };
        this.activatedRoute.params.subscribe(function (params) { return _this.setParams(params); });
    }
    LessonTabsComponent.prototype.setParams = function (params) {
        this.courseId = params.courseId;
        this.moduleId = params.moduleId;
        this.lessonId = params.lessonId;
        this.findLessons(this.moduleId);
    };
    LessonTabsComponent.prototype.ngOnInit = function () {
    };
    LessonTabsComponent.prototype.findLessons = function (moduleId) {
        var _this = this;
        this.service.findAllLessons(moduleId)
            .then(function (lessons) { return _this.lessons = lessons; });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], LessonTabsComponent.prototype, "courseName", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], LessonTabsComponent.prototype, "parentLesId", void 0);
    LessonTabsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-lesson-tabs',
            template: __webpack_require__(/*! ./lesson-tabs.component.html */ "./src/app/lesson-tabs/lesson-tabs.component.html"),
            styles: [__webpack_require__(/*! ./lesson-tabs.component.css */ "./src/app/lesson-tabs/lesson-tabs.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_lesson_service_client__WEBPACK_IMPORTED_MODULE_2__["LessonService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _services_course_service_client__WEBPACK_IMPORTED_MODULE_4__["CourseService"]])
    ], LessonTabsComponent);
    return LessonTabsComponent;
}());



/***/ }),

/***/ "./src/app/link-widget/link-widget.component.css":
/*!*******************************************************!*\
  !*** ./src/app/link-widget/link-widget.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "html, body{\n    height:  100%;\n    width: auto !important;\n    min-width: 250px;\n\n\n\n\n}\n.wbdv-height-row-sqave{\n    height: 20px;\n}\n.wbdv-align-text{\n    font-size:4vw;\n}\ndiv.col-4.bg-dark{\n    -webkit-column-fill: inherit;\n            column-fill: inherit;\n    height: 100%;\n}\n.container-fluid{\n\n}\n.container {\n\n    width: 100%;\n    height: 100%;\n\n}\n#mainCourseEdFld{\n    min-width: 250px;\n}\n.fa-toggle-on{\n    color: #0a0406;\n}\ndiv.row{\n    height: 100%;\n    width: 100%;\n\n}\n.row{\n    height: 100%;\n\n}\n#CrossFld{\n    margin-right: 4px;\n    padding: 4px;\n    color: white;\n}\n#TopPlusFld{\n    color: #FFFFFF;\n    padding: auto;\n    align-self: center;\n    align-content: center;\n    margin-top: 0.6em;\n    margin: auto;\n\n\n}\n.wbdv-Cust-Bord{\n    border: #383c3f;\n    background: #0a0406;\n    border-radius: 5px;\n}\n#DarkBgFld{\n    background: #0a0406;\n    height: 100%;\n\n}\n.wbdv-Full{\n    overflow: hidden;\n}\n.wbdv-SideCol{\n    color: #FFFFFF;\n}\ndiv#DarkBgFld.col-2.bg-dark{\n    background: #0a0406;\n}\n::-webkit-scrollbar {\n    display: none;\n    overflow: hidden;\n}\n#ActFld{\n    background: #4790e3\n}\n#TopicPlusFld{\n    color: #FFFFFF;\n}\n.wbdv-Topic-Bg-Color{\n    background: #7a7a7a;\n    margin-right: 0.5em;\n    color: #FFFFFF;\n}\n.wbdv-Topic-Bg-Color:hover{\n    background: #383c3f;\n}\n.wbdv-Topic-Bg-Color:active{\n    background: #383c3f;\n}\n.wbdv-lesson-tabs{\n    background: #262627;\n    margin-left: 4px;\n}\n.wbdv-lesson-tabs:hover{\n    background: #0a0406;\n}\n@media (max-width: 200px) {\n    .wbdv-lesson-tabs{\n        margin: 0;\n        padding: 0;\n    }\n\n\n}\n.wbdv-module-buttons{\n    border-style: outset;\n    border-radius: 20%;\n\n}\n.wbdv-module-buttons:hover{\n    background: #0d47a1;\n    background-color: #0d47a1;\n    color: #0d47a1;\n\n}\n.wbdv-module-buttons:active{\n    background: #0d47a1;\n    background-color: #0d47a1;\n    color: #0d47a1;\n\n}\n.wbdv-module-buttons:active{\n    background: #0d47a1;\n    background-color: #0d47a1;\n    color: #0d47a1;\n}\n#activeBgTopic{\n    background: #444444;\n}\n.wbdv-x-pad{\n    margin-left: 1em;\n\n}\n.wbdv-module-X{\n    color: #FFFFFF;\n    margin-top: 1em;\n    overflow: hidden;\n}\n.wbdv-btn{\n    margin-left: 1em;\n    margin-right: 0;\n}\n.wbdv-margin-bord{\n    border: #383c3f;\n\n    border-width: 5px;\n    margin: 1em;\n    padding: 1em;\n}\n/* This was taken W3 Schools (Providing reference as asked by professor*/\n.switch {\n    /*    position: relative;*/\n    display: inline-block;\n    width: 40px;\n    height: 25px;\n}\n.switch input {\n    opacity: 0;\n    width: 0;\n    height: 0;\n}\n.slider {\n    /*  position: absolute;*/\n    cursor: pointer;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    background-color: #ccc;\n    transition: .4s;\n}\n.slider:before {\n    /* position: absolute;*/\n    content: \"\";\n    height: 18px;\n    width: 16px;\n    left: 4px;\n    bottom: 4px;\n    background-color: white;\n    transition: .4s;\n}\ninput:checked + .slider {\n    background-color: #2196F3;\n}\ninput:focus + .slider {\n    box-shadow: 0 0 1px #2196F3;\n}\ninput:checked + .slider:before {\n    -webkit-transform: translateX(26px);\n    transform: translateX(26px);\n}\n.slider.round {\n    border-radius: 34px;\n}\n.slider.round:before {\n    border-radius: 50%;\n}\n#UpMarginFld{\n    margin-top: 1em;\n}\n#customrowFld {\n    height: 100%;\n    padding-bottom: 1000%;\n\n\n    overflow-y: hidden;\n}\n@media (max-width: 600px) {\n    #DarkBgFld{\n        padding: 0;\n        margin: 0;\n    }\n    .wbdv-fnt-fld-side{\n        font-size: 10px;\n    }\n\n    div.btn-group.nav-link.active{\n        padding: 0;\n        margin: 0;\n    }\n    .wbdv-remove-lef-right-pm{\n        padding-left: 0;\n        padding-right: 0;\n        margin-left: 0;\n        margin-right: 0;\n    }\n\n\n}\n.wbdv-modulelist-button-fa{\n    color: white;\n}\n.fa-check{\n    color: green;\n}\n.wbdv-font{\n    font-size: 2vw;\n}\n.wbdv-btn-widget{\n    font-size: 1vw;\n}\n.wbdv-this-scroll-test{\n    overflow-y: scroll;\n\n}\n.wbdv-active{\n    background: #0d47a1;\n    color: #0d47a1;\n}\n.wbdv-lesson-active{\n    background: #0a0406;\n}\n.wbdv-topic-active{\n    background: #383c3f;\n}\n.fa-sign-out{\n    color: white;\n}\n.fa-user{\n    color: white;\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGluay13aWRnZXQvbGluay13aWRnZXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsZ0JBQWdCOzs7OztBQUtwQjtBQUNBO0lBQ0ksWUFBWTtBQUNoQjtBQUNBO0lBQ0ksYUFBYTtBQUNqQjtBQUNBO0lBQ0ksNEJBQW9CO1lBQXBCLG9CQUFvQjtJQUNwQixZQUFZO0FBQ2hCO0FBRUE7O0FBRUE7QUFFQTs7SUFFSSxXQUFXO0lBQ1gsWUFBWTs7QUFFaEI7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjtBQUVBO0lBQ0ksY0FBYztBQUNsQjtBQUNBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7O0FBRWY7QUFDQTtJQUNJLFlBQVk7O0FBRWhCO0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsWUFBWTtJQUNaLFlBQVk7QUFDaEI7QUFFQTtJQUNJLGNBQWM7SUFDZCxhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQixpQkFBaUI7SUFDakIsWUFBWTs7O0FBR2hCO0FBR0E7SUFDSSxlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLGtCQUFrQjtBQUN0QjtBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLFlBQVk7O0FBRWhCO0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7QUFFQTtJQUNJLGNBQWM7QUFDbEI7QUFFQTtJQUNJLG1CQUFtQjtBQUN2QjtBQUVBO0lBQ0ksYUFBYTtJQUNiLGdCQUFnQjtBQUNwQjtBQUVBO0lBQ0k7QUFDSjtBQUVBO0lBQ0ksY0FBYztBQUNsQjtBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixjQUFjO0FBQ2xCO0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7QUFFQTtJQUNJLG1CQUFtQjtBQUN2QjtBQUdBO0lBQ0ksbUJBQW1CO0lBQ25CLGdCQUFnQjtBQUNwQjtBQUlBO0lBQ0ksbUJBQW1CO0FBQ3ZCO0FBRUE7SUFDSTtRQUNJLFNBQVM7UUFDVCxVQUFVO0lBQ2Q7OztBQUdKO0FBRUE7SUFDSSxvQkFBb0I7SUFDcEIsa0JBQWtCOztBQUV0QjtBQUNBO0lBQ0ksbUJBQW1CO0lBQ25CLHlCQUF5QjtJQUN6QixjQUFjOztBQUVsQjtBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLHlCQUF5QjtJQUN6QixjQUFjOztBQUVsQjtBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLHlCQUF5QjtJQUN6QixjQUFjO0FBQ2xCO0FBSUE7SUFDSSxtQkFBbUI7QUFDdkI7QUFFQTtJQUNJLGdCQUFnQjs7QUFFcEI7QUFFQTtJQUNJLGNBQWM7SUFDZCxlQUFlO0lBQ2YsZ0JBQWdCO0FBQ3BCO0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsZUFBZTtBQUNuQjtBQUVBO0lBQ0ksZUFBZTs7SUFFZixpQkFBaUI7SUFDakIsV0FBVztJQUNYLFlBQVk7QUFDaEI7QUFFQSx3RUFBd0U7QUFDeEU7SUFDSSwwQkFBMEI7SUFDMUIscUJBQXFCO0lBQ3JCLFdBQVc7SUFDWCxZQUFZO0FBQ2hCO0FBRUE7SUFDSSxVQUFVO0lBQ1YsUUFBUTtJQUNSLFNBQVM7QUFDYjtBQUVBO0lBQ0ksd0JBQXdCO0lBQ3hCLGVBQWU7SUFDZixNQUFNO0lBQ04sT0FBTztJQUNQLFFBQVE7SUFDUixTQUFTO0lBQ1Qsc0JBQXNCO0lBRXRCLGVBQWU7QUFDbkI7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixXQUFXO0lBQ1gsWUFBWTtJQUNaLFdBQVc7SUFDWCxTQUFTO0lBQ1QsV0FBVztJQUNYLHVCQUF1QjtJQUV2QixlQUFlO0FBQ25CO0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7QUFFQTtJQUNJLDJCQUEyQjtBQUMvQjtBQUVBO0lBQ0ksbUNBQW1DO0lBRW5DLDJCQUEyQjtBQUMvQjtBQUdBO0lBQ0ksbUJBQW1CO0FBQ3ZCO0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7QUFJQTtJQUNJLGVBQWU7QUFDbkI7QUFFQTtJQUNJLFlBQVk7SUFDWixxQkFBcUI7OztJQUdyQixrQkFBa0I7QUFDdEI7QUFHQTtJQUNJO1FBQ0ksVUFBVTtRQUNWLFNBQVM7SUFDYjtJQUNBO1FBQ0ksZUFBZTtJQUNuQjs7SUFFQTtRQUNJLFVBQVU7UUFDVixTQUFTO0lBQ2I7SUFDQTtRQUNJLGVBQWU7UUFDZixnQkFBZ0I7UUFDaEIsY0FBYztRQUNkLGVBQWU7SUFDbkI7OztBQUdKO0FBR0E7SUFDSSxZQUFZO0FBQ2hCO0FBSUE7SUFDSSxZQUFZO0FBQ2hCO0FBRUE7SUFDSSxjQUFjO0FBQ2xCO0FBR0E7SUFDSSxjQUFjO0FBQ2xCO0FBRUE7SUFDSSxrQkFBa0I7O0FBRXRCO0FBQ0E7SUFDSSxtQkFBbUI7SUFDbkIsY0FBYztBQUNsQjtBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCO0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7QUFFQTtJQUNJLFlBQVk7QUFDaEI7QUFFQTtJQUNJLFlBQVk7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9saW5rLXdpZGdldC9saW5rLXdpZGdldC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaHRtbCwgYm9keXtcbiAgICBoZWlnaHQ6ICAxMDAlO1xuICAgIHdpZHRoOiBhdXRvICFpbXBvcnRhbnQ7XG4gICAgbWluLXdpZHRoOiAyNTBweDtcblxuXG5cblxufVxuLndiZHYtaGVpZ2h0LXJvdy1zcWF2ZXtcbiAgICBoZWlnaHQ6IDIwcHg7XG59XG4ud2Jkdi1hbGlnbi10ZXh0e1xuICAgIGZvbnQtc2l6ZTo0dnc7XG59XG5kaXYuY29sLTQuYmctZGFya3tcbiAgICBjb2x1bW4tZmlsbDogaW5oZXJpdDtcbiAgICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5jb250YWluZXItZmx1aWR7XG5cbn1cblxuLmNvbnRhaW5lciB7XG5cbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG5cbn1cblxuI21haW5Db3Vyc2VFZEZsZHtcbiAgICBtaW4td2lkdGg6IDI1MHB4O1xufVxuXG4uZmEtdG9nZ2xlLW9ue1xuICAgIGNvbG9yOiAjMGEwNDA2O1xufVxuZGl2LnJvd3tcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG5cbn1cbi5yb3d7XG4gICAgaGVpZ2h0OiAxMDAlO1xuXG59XG5cbiNDcm9zc0ZsZHtcbiAgICBtYXJnaW4tcmlnaHQ6IDRweDtcbiAgICBwYWRkaW5nOiA0cHg7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuXG4jVG9wUGx1c0ZsZHtcbiAgICBjb2xvcjogI0ZGRkZGRjtcbiAgICBwYWRkaW5nOiBhdXRvO1xuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gICAgbWFyZ2luLXRvcDogMC42ZW07XG4gICAgbWFyZ2luOiBhdXRvO1xuXG5cbn1cblxuXG4ud2Jkdi1DdXN0LUJvcmR7XG4gICAgYm9yZGVyOiAjMzgzYzNmO1xuICAgIGJhY2tncm91bmQ6ICMwYTA0MDY7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG4jRGFya0JnRmxke1xuICAgIGJhY2tncm91bmQ6ICMwYTA0MDY7XG4gICAgaGVpZ2h0OiAxMDAlO1xuXG59XG5cbi53YmR2LUZ1bGx7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLndiZHYtU2lkZUNvbHtcbiAgICBjb2xvcjogI0ZGRkZGRjtcbn1cblxuZGl2I0RhcmtCZ0ZsZC5jb2wtMi5iZy1kYXJre1xuICAgIGJhY2tncm91bmQ6ICMwYTA0MDY7XG59XG5cbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuI0FjdEZsZHtcbiAgICBiYWNrZ3JvdW5kOiAjNDc5MGUzXG59XG5cbiNUb3BpY1BsdXNGbGR7XG4gICAgY29sb3I6ICNGRkZGRkY7XG59XG5cbi53YmR2LVRvcGljLUJnLUNvbG9ye1xuICAgIGJhY2tncm91bmQ6ICM3YTdhN2E7XG4gICAgbWFyZ2luLXJpZ2h0OiAwLjVlbTtcbiAgICBjb2xvcjogI0ZGRkZGRjtcbn1cblxuLndiZHYtVG9waWMtQmctQ29sb3I6aG92ZXJ7XG4gICAgYmFja2dyb3VuZDogIzM4M2MzZjtcbn1cblxuLndiZHYtVG9waWMtQmctQ29sb3I6YWN0aXZle1xuICAgIGJhY2tncm91bmQ6ICMzODNjM2Y7XG59XG5cblxuLndiZHYtbGVzc29uLXRhYnN7XG4gICAgYmFja2dyb3VuZDogIzI2MjYyNztcbiAgICBtYXJnaW4tbGVmdDogNHB4O1xufVxuXG5cblxuLndiZHYtbGVzc29uLXRhYnM6aG92ZXJ7XG4gICAgYmFja2dyb3VuZDogIzBhMDQwNjtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDIwMHB4KSB7XG4gICAgLndiZHYtbGVzc29uLXRhYnN7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICB9XG5cblxufVxuXG4ud2Jkdi1tb2R1bGUtYnV0dG9uc3tcbiAgICBib3JkZXItc3R5bGU6IG91dHNldDtcbiAgICBib3JkZXItcmFkaXVzOiAyMCU7XG5cbn1cbi53YmR2LW1vZHVsZS1idXR0b25zOmhvdmVye1xuICAgIGJhY2tncm91bmQ6ICMwZDQ3YTE7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzBkNDdhMTtcbiAgICBjb2xvcjogIzBkNDdhMTtcblxufVxuXG4ud2Jkdi1tb2R1bGUtYnV0dG9uczphY3RpdmV7XG4gICAgYmFja2dyb3VuZDogIzBkNDdhMTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGQ0N2ExO1xuICAgIGNvbG9yOiAjMGQ0N2ExO1xuXG59XG5cbi53YmR2LW1vZHVsZS1idXR0b25zOmFjdGl2ZXtcbiAgICBiYWNrZ3JvdW5kOiAjMGQ0N2ExO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwZDQ3YTE7XG4gICAgY29sb3I6ICMwZDQ3YTE7XG59XG5cblxuXG4jYWN0aXZlQmdUb3BpY3tcbiAgICBiYWNrZ3JvdW5kOiAjNDQ0NDQ0O1xufVxuXG4ud2Jkdi14LXBhZHtcbiAgICBtYXJnaW4tbGVmdDogMWVtO1xuXG59XG5cbi53YmR2LW1vZHVsZS1Ye1xuICAgIGNvbG9yOiAjRkZGRkZGO1xuICAgIG1hcmdpbi10b3A6IDFlbTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4ud2Jkdi1idG57XG4gICAgbWFyZ2luLWxlZnQ6IDFlbTtcbiAgICBtYXJnaW4tcmlnaHQ6IDA7XG59XG5cbi53YmR2LW1hcmdpbi1ib3Jke1xuICAgIGJvcmRlcjogIzM4M2MzZjtcblxuICAgIGJvcmRlci13aWR0aDogNXB4O1xuICAgIG1hcmdpbjogMWVtO1xuICAgIHBhZGRpbmc6IDFlbTtcbn1cblxuLyogVGhpcyB3YXMgdGFrZW4gVzMgU2Nob29scyAoUHJvdmlkaW5nIHJlZmVyZW5jZSBhcyBhc2tlZCBieSBwcm9mZXNzb3IqL1xuLnN3aXRjaCB7XG4gICAgLyogICAgcG9zaXRpb246IHJlbGF0aXZlOyovXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHdpZHRoOiA0MHB4O1xuICAgIGhlaWdodDogMjVweDtcbn1cblxuLnN3aXRjaCBpbnB1dCB7XG4gICAgb3BhY2l0eTogMDtcbiAgICB3aWR0aDogMDtcbiAgICBoZWlnaHQ6IDA7XG59XG5cbi5zbGlkZXIge1xuICAgIC8qICBwb3NpdGlvbjogYWJzb2x1dGU7Ki9cbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNjY2M7XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiAuNHM7XG4gICAgdHJhbnNpdGlvbjogLjRzO1xufVxuXG4uc2xpZGVyOmJlZm9yZSB7XG4gICAgLyogcG9zaXRpb246IGFic29sdXRlOyovXG4gICAgY29udGVudDogXCJcIjtcbiAgICBoZWlnaHQ6IDE4cHg7XG4gICAgd2lkdGg6IDE2cHg7XG4gICAgbGVmdDogNHB4O1xuICAgIGJvdHRvbTogNHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogLjRzO1xuICAgIHRyYW5zaXRpb246IC40cztcbn1cblxuaW5wdXQ6Y2hlY2tlZCArIC5zbGlkZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMTk2RjM7XG59XG5cbmlucHV0OmZvY3VzICsgLnNsaWRlciB7XG4gICAgYm94LXNoYWRvdzogMCAwIDFweCAjMjE5NkYzO1xufVxuXG5pbnB1dDpjaGVja2VkICsgLnNsaWRlcjpiZWZvcmUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDI2cHgpO1xuICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjZweCk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDI2cHgpO1xufVxuXG5cbi5zbGlkZXIucm91bmQge1xuICAgIGJvcmRlci1yYWRpdXM6IDM0cHg7XG59XG5cbi5zbGlkZXIucm91bmQ6YmVmb3JlIHtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5cblxuXG4jVXBNYXJnaW5GbGR7XG4gICAgbWFyZ2luLXRvcDogMWVtO1xufVxuXG4jY3VzdG9tcm93RmxkIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgcGFkZGluZy1ib3R0b206IDEwMDAlO1xuXG5cbiAgICBvdmVyZmxvdy15OiBoaWRkZW47XG59XG5cblxuQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gICAgI0RhcmtCZ0ZsZHtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgIH1cbiAgICAud2Jkdi1mbnQtZmxkLXNpZGV7XG4gICAgICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICB9XG5cbiAgICBkaXYuYnRuLWdyb3VwLm5hdi1saW5rLmFjdGl2ZXtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgIH1cbiAgICAud2Jkdi1yZW1vdmUtbGVmLXJpZ2h0LXBte1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDA7XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDA7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDA7XG4gICAgfVxuXG5cbn1cblxuXG4ud2Jkdi1tb2R1bGVsaXN0LWJ1dHRvbi1mYXtcbiAgICBjb2xvcjogd2hpdGU7XG59XG5cblxuXG4uZmEtY2hlY2t7XG4gICAgY29sb3I6IGdyZWVuO1xufVxuXG4ud2Jkdi1mb250e1xuICAgIGZvbnQtc2l6ZTogMnZ3O1xufVxuXG5cbi53YmR2LWJ0bi13aWRnZXR7XG4gICAgZm9udC1zaXplOiAxdnc7XG59XG5cbi53YmR2LXRoaXMtc2Nyb2xsLXRlc3R7XG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuXG59XG4ud2Jkdi1hY3RpdmV7XG4gICAgYmFja2dyb3VuZDogIzBkNDdhMTtcbiAgICBjb2xvcjogIzBkNDdhMTtcbn1cblxuLndiZHYtbGVzc29uLWFjdGl2ZXtcbiAgICBiYWNrZ3JvdW5kOiAjMGEwNDA2O1xufVxuXG4ud2Jkdi10b3BpYy1hY3RpdmV7XG4gICAgYmFja2dyb3VuZDogIzM4M2MzZjtcbn1cblxuLmZhLXNpZ24tb3V0e1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmZhLXVzZXJ7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuXG4iXX0= */"

/***/ }),

/***/ "./src/app/link-widget/link-widget.component.html":
/*!********************************************************!*\
  !*** ./src/app/link-widget/link-widget.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row border wbdv-margin-bord col-12 m-auto  m-md-2 m-lg-2 m-xl-2 pr-lg-2 pr-xl-2 pr-md-2 mb-2 mt-2\" >\n  <form class=\"row text-center col-12\">\n    <a class=\"m-auto mt-1 mb-1\" href=\"{{Widget.href}}\">{{Widget.lText}}</a>\n  </form>\n</div>\n"

/***/ }),

/***/ "./src/app/link-widget/link-widget.component.ts":
/*!******************************************************!*\
  !*** ./src/app/link-widget/link-widget.component.ts ***!
  \******************************************************/
/*! exports provided: LinkWidgetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinkWidgetComponent", function() { return LinkWidgetComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_widget_model_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/widget.model.client */ "./src/app/models/widget.model.client.ts");



var LinkWidgetComponent = /** @class */ (function () {
    function LinkWidgetComponent() {
    }
    LinkWidgetComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _models_widget_model_client__WEBPACK_IMPORTED_MODULE_2__["Widget"])
    ], LinkWidgetComponent.prototype, "Widget", void 0);
    LinkWidgetComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-link-widget',
            template: __webpack_require__(/*! ./link-widget.component.html */ "./src/app/link-widget/link-widget.component.html"),
            styles: [__webpack_require__(/*! ./link-widget.component.css */ "./src/app/link-widget/link-widget.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LinkWidgetComponent);
    return LinkWidgetComponent;
}());



/***/ }),

/***/ "./src/app/list-widget/list-widget.component.css":
/*!*******************************************************!*\
  !*** ./src/app/list-widget/list-widget.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "html, body{\n    height:  100%;\n    width: auto !important;\n    min-width: 250px;\n\n\n\n\n}\n.wbdv-height-row-sqave{\n    height: 20px;\n}\n.wbdv-align-text{\n    font-size:4vw;\n}\ndiv.col-4.bg-dark{\n    -webkit-column-fill: inherit;\n            column-fill: inherit;\n    height: 100%;\n}\n.container-fluid{\n\n}\n.container {\n\n    width: 100%;\n    height: 100%;\n\n}\n#mainCourseEdFld{\n    min-width: 250px;\n}\n.fa-toggle-on{\n    color: #0a0406;\n}\ndiv.row{\n    height: 100%;\n    width: 100%;\n\n}\n.row{\n    height: 100%;\n\n}\n#CrossFld{\n    margin-right: 4px;\n    padding: 4px;\n    color: white;\n}\n#TopPlusFld{\n    color: #FFFFFF;\n    padding: auto;\n    align-self: center;\n    align-content: center;\n    margin-top: 0.6em;\n    margin: auto;\n\n\n}\n.wbdv-Cust-Bord{\n    border: #383c3f;\n    background: #0a0406;\n    border-radius: 5px;\n}\n#DarkBgFld{\n    background: #0a0406;\n    height: 100%;\n\n}\n.wbdv-Full{\n    overflow: hidden;\n}\n.wbdv-SideCol{\n    color: #FFFFFF;\n}\ndiv#DarkBgFld.col-2.bg-dark{\n    background: #0a0406;\n}\n::-webkit-scrollbar {\n    display: none;\n    overflow: hidden;\n}\n#ActFld{\n    background: #4790e3\n}\n#TopicPlusFld{\n    color: #FFFFFF;\n}\n.wbdv-Topic-Bg-Color{\n    background: #7a7a7a;\n    margin-right: 0.5em;\n    color: #FFFFFF;\n}\n.wbdv-Topic-Bg-Color:hover{\n    background: #383c3f;\n}\n.wbdv-Topic-Bg-Color:active{\n    background: #383c3f;\n}\n.wbdv-lesson-tabs{\n    background: #262627;\n    margin-left: 4px;\n}\n.wbdv-lesson-tabs:hover{\n    background: #0a0406;\n}\n@media (max-width: 200px) {\n    .wbdv-lesson-tabs{\n        margin: 0;\n        padding: 0;\n    }\n\n\n}\n.wbdv-module-buttons{\n    border-style: outset;\n    border-radius: 20%;\n\n}\n.wbdv-module-buttons:hover{\n    background: #0d47a1;\n    background-color: #0d47a1;\n    color: #0d47a1;\n\n}\n.wbdv-module-buttons:active{\n    background: #0d47a1;\n    background-color: #0d47a1;\n    color: #0d47a1;\n\n}\n.wbdv-module-buttons:active{\n    background: #0d47a1;\n    background-color: #0d47a1;\n    color: #0d47a1;\n}\n#activeBgTopic{\n    background: #444444;\n}\n.wbdv-x-pad{\n    margin-left: 1em;\n\n}\n.wbdv-module-X{\n    color: #FFFFFF;\n    margin-top: 1em;\n    overflow: hidden;\n}\n.wbdv-btn{\n    margin-left: 1em;\n    margin-right: 0;\n}\n.wbdv-margin-bord{\n    border: #383c3f;\n\n    border-width: 5px;\n    margin: 1em;\n    padding: 1em;\n}\n/* This was taken W3 Schools (Providing reference as asked by professor*/\n.switch {\n    /*    position: relative;*/\n    display: inline-block;\n    width: 40px;\n    height: 25px;\n}\n.switch input {\n    opacity: 0;\n    width: 0;\n    height: 0;\n}\n.slider {\n    /*  position: absolute;*/\n    cursor: pointer;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    background-color: #ccc;\n    transition: .4s;\n}\n.slider:before {\n    /* position: absolute;*/\n    content: \"\";\n    height: 18px;\n    width: 16px;\n    left: 4px;\n    bottom: 4px;\n    background-color: white;\n    transition: .4s;\n}\ninput:checked + .slider {\n    background-color: #2196F3;\n}\ninput:focus + .slider {\n    box-shadow: 0 0 1px #2196F3;\n}\ninput:checked + .slider:before {\n    -webkit-transform: translateX(26px);\n    transform: translateX(26px);\n}\n.slider.round {\n    border-radius: 34px;\n}\n.slider.round:before {\n    border-radius: 50%;\n}\n#UpMarginFld{\n    margin-top: 1em;\n}\n#customrowFld {\n    height: 100%;\n    padding-bottom: 1000%;\n\n\n    overflow-y: hidden;\n}\n@media (max-width: 600px) {\n    #DarkBgFld{\n        padding: 0;\n        margin: 0;\n    }\n    .wbdv-fnt-fld-side{\n        font-size: 10px;\n    }\n\n    div.btn-group.nav-link.active{\n        padding: 0;\n        margin: 0;\n    }\n    .wbdv-remove-lef-right-pm{\n        padding-left: 0;\n        padding-right: 0;\n        margin-left: 0;\n        margin-right: 0;\n    }\n\n\n}\n.wbdv-modulelist-button-fa{\n    color: white;\n}\n.fa-check{\n    color: green;\n}\n.wbdv-font{\n    font-size: 2vw;\n}\n.wbdv-btn-widget{\n    font-size: 1vw;\n}\n.wbdv-this-scroll-test{\n    overflow-y: scroll;\n\n}\n.wbdv-active{\n    background: #0d47a1;\n    color: #0d47a1;\n}\n.wbdv-lesson-active{\n    background: #0a0406;\n}\n.wbdv-topic-active{\n    background: #383c3f;\n}\n.fa-sign-out{\n    color: white;\n}\n.fa-user{\n    color: white;\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGlzdC13aWRnZXQvbGlzdC13aWRnZXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsZ0JBQWdCOzs7OztBQUtwQjtBQUNBO0lBQ0ksWUFBWTtBQUNoQjtBQUNBO0lBQ0ksYUFBYTtBQUNqQjtBQUNBO0lBQ0ksNEJBQW9CO1lBQXBCLG9CQUFvQjtJQUNwQixZQUFZO0FBQ2hCO0FBRUE7O0FBRUE7QUFFQTs7SUFFSSxXQUFXO0lBQ1gsWUFBWTs7QUFFaEI7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjtBQUVBO0lBQ0ksY0FBYztBQUNsQjtBQUNBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7O0FBRWY7QUFDQTtJQUNJLFlBQVk7O0FBRWhCO0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsWUFBWTtJQUNaLFlBQVk7QUFDaEI7QUFFQTtJQUNJLGNBQWM7SUFDZCxhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQixpQkFBaUI7SUFDakIsWUFBWTs7O0FBR2hCO0FBR0E7SUFDSSxlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLGtCQUFrQjtBQUN0QjtBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLFlBQVk7O0FBRWhCO0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7QUFFQTtJQUNJLGNBQWM7QUFDbEI7QUFFQTtJQUNJLG1CQUFtQjtBQUN2QjtBQUVBO0lBQ0ksYUFBYTtJQUNiLGdCQUFnQjtBQUNwQjtBQUVBO0lBQ0k7QUFDSjtBQUVBO0lBQ0ksY0FBYztBQUNsQjtBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixjQUFjO0FBQ2xCO0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7QUFFQTtJQUNJLG1CQUFtQjtBQUN2QjtBQUdBO0lBQ0ksbUJBQW1CO0lBQ25CLGdCQUFnQjtBQUNwQjtBQUlBO0lBQ0ksbUJBQW1CO0FBQ3ZCO0FBRUE7SUFDSTtRQUNJLFNBQVM7UUFDVCxVQUFVO0lBQ2Q7OztBQUdKO0FBRUE7SUFDSSxvQkFBb0I7SUFDcEIsa0JBQWtCOztBQUV0QjtBQUNBO0lBQ0ksbUJBQW1CO0lBQ25CLHlCQUF5QjtJQUN6QixjQUFjOztBQUVsQjtBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLHlCQUF5QjtJQUN6QixjQUFjOztBQUVsQjtBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLHlCQUF5QjtJQUN6QixjQUFjO0FBQ2xCO0FBSUE7SUFDSSxtQkFBbUI7QUFDdkI7QUFFQTtJQUNJLGdCQUFnQjs7QUFFcEI7QUFFQTtJQUNJLGNBQWM7SUFDZCxlQUFlO0lBQ2YsZ0JBQWdCO0FBQ3BCO0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsZUFBZTtBQUNuQjtBQUVBO0lBQ0ksZUFBZTs7SUFFZixpQkFBaUI7SUFDakIsV0FBVztJQUNYLFlBQVk7QUFDaEI7QUFFQSx3RUFBd0U7QUFDeEU7SUFDSSwwQkFBMEI7SUFDMUIscUJBQXFCO0lBQ3JCLFdBQVc7SUFDWCxZQUFZO0FBQ2hCO0FBRUE7SUFDSSxVQUFVO0lBQ1YsUUFBUTtJQUNSLFNBQVM7QUFDYjtBQUVBO0lBQ0ksd0JBQXdCO0lBQ3hCLGVBQWU7SUFDZixNQUFNO0lBQ04sT0FBTztJQUNQLFFBQVE7SUFDUixTQUFTO0lBQ1Qsc0JBQXNCO0lBRXRCLGVBQWU7QUFDbkI7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixXQUFXO0lBQ1gsWUFBWTtJQUNaLFdBQVc7SUFDWCxTQUFTO0lBQ1QsV0FBVztJQUNYLHVCQUF1QjtJQUV2QixlQUFlO0FBQ25CO0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7QUFFQTtJQUNJLDJCQUEyQjtBQUMvQjtBQUVBO0lBQ0ksbUNBQW1DO0lBRW5DLDJCQUEyQjtBQUMvQjtBQUdBO0lBQ0ksbUJBQW1CO0FBQ3ZCO0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7QUFJQTtJQUNJLGVBQWU7QUFDbkI7QUFFQTtJQUNJLFlBQVk7SUFDWixxQkFBcUI7OztJQUdyQixrQkFBa0I7QUFDdEI7QUFHQTtJQUNJO1FBQ0ksVUFBVTtRQUNWLFNBQVM7SUFDYjtJQUNBO1FBQ0ksZUFBZTtJQUNuQjs7SUFFQTtRQUNJLFVBQVU7UUFDVixTQUFTO0lBQ2I7SUFDQTtRQUNJLGVBQWU7UUFDZixnQkFBZ0I7UUFDaEIsY0FBYztRQUNkLGVBQWU7SUFDbkI7OztBQUdKO0FBR0E7SUFDSSxZQUFZO0FBQ2hCO0FBSUE7SUFDSSxZQUFZO0FBQ2hCO0FBRUE7SUFDSSxjQUFjO0FBQ2xCO0FBR0E7SUFDSSxjQUFjO0FBQ2xCO0FBRUE7SUFDSSxrQkFBa0I7O0FBRXRCO0FBQ0E7SUFDSSxtQkFBbUI7SUFDbkIsY0FBYztBQUNsQjtBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCO0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7QUFFQTtJQUNJLFlBQVk7QUFDaEI7QUFFQTtJQUNJLFlBQVk7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9saXN0LXdpZGdldC9saXN0LXdpZGdldC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaHRtbCwgYm9keXtcbiAgICBoZWlnaHQ6ICAxMDAlO1xuICAgIHdpZHRoOiBhdXRvICFpbXBvcnRhbnQ7XG4gICAgbWluLXdpZHRoOiAyNTBweDtcblxuXG5cblxufVxuLndiZHYtaGVpZ2h0LXJvdy1zcWF2ZXtcbiAgICBoZWlnaHQ6IDIwcHg7XG59XG4ud2Jkdi1hbGlnbi10ZXh0e1xuICAgIGZvbnQtc2l6ZTo0dnc7XG59XG5kaXYuY29sLTQuYmctZGFya3tcbiAgICBjb2x1bW4tZmlsbDogaW5oZXJpdDtcbiAgICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5jb250YWluZXItZmx1aWR7XG5cbn1cblxuLmNvbnRhaW5lciB7XG5cbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG5cbn1cblxuI21haW5Db3Vyc2VFZEZsZHtcbiAgICBtaW4td2lkdGg6IDI1MHB4O1xufVxuXG4uZmEtdG9nZ2xlLW9ue1xuICAgIGNvbG9yOiAjMGEwNDA2O1xufVxuZGl2LnJvd3tcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG5cbn1cbi5yb3d7XG4gICAgaGVpZ2h0OiAxMDAlO1xuXG59XG5cbiNDcm9zc0ZsZHtcbiAgICBtYXJnaW4tcmlnaHQ6IDRweDtcbiAgICBwYWRkaW5nOiA0cHg7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuXG4jVG9wUGx1c0ZsZHtcbiAgICBjb2xvcjogI0ZGRkZGRjtcbiAgICBwYWRkaW5nOiBhdXRvO1xuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gICAgbWFyZ2luLXRvcDogMC42ZW07XG4gICAgbWFyZ2luOiBhdXRvO1xuXG5cbn1cblxuXG4ud2Jkdi1DdXN0LUJvcmR7XG4gICAgYm9yZGVyOiAjMzgzYzNmO1xuICAgIGJhY2tncm91bmQ6ICMwYTA0MDY7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG4jRGFya0JnRmxke1xuICAgIGJhY2tncm91bmQ6ICMwYTA0MDY7XG4gICAgaGVpZ2h0OiAxMDAlO1xuXG59XG5cbi53YmR2LUZ1bGx7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLndiZHYtU2lkZUNvbHtcbiAgICBjb2xvcjogI0ZGRkZGRjtcbn1cblxuZGl2I0RhcmtCZ0ZsZC5jb2wtMi5iZy1kYXJre1xuICAgIGJhY2tncm91bmQ6ICMwYTA0MDY7XG59XG5cbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuI0FjdEZsZHtcbiAgICBiYWNrZ3JvdW5kOiAjNDc5MGUzXG59XG5cbiNUb3BpY1BsdXNGbGR7XG4gICAgY29sb3I6ICNGRkZGRkY7XG59XG5cbi53YmR2LVRvcGljLUJnLUNvbG9ye1xuICAgIGJhY2tncm91bmQ6ICM3YTdhN2E7XG4gICAgbWFyZ2luLXJpZ2h0OiAwLjVlbTtcbiAgICBjb2xvcjogI0ZGRkZGRjtcbn1cblxuLndiZHYtVG9waWMtQmctQ29sb3I6aG92ZXJ7XG4gICAgYmFja2dyb3VuZDogIzM4M2MzZjtcbn1cblxuLndiZHYtVG9waWMtQmctQ29sb3I6YWN0aXZle1xuICAgIGJhY2tncm91bmQ6ICMzODNjM2Y7XG59XG5cblxuLndiZHYtbGVzc29uLXRhYnN7XG4gICAgYmFja2dyb3VuZDogIzI2MjYyNztcbiAgICBtYXJnaW4tbGVmdDogNHB4O1xufVxuXG5cblxuLndiZHYtbGVzc29uLXRhYnM6aG92ZXJ7XG4gICAgYmFja2dyb3VuZDogIzBhMDQwNjtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDIwMHB4KSB7XG4gICAgLndiZHYtbGVzc29uLXRhYnN7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICB9XG5cblxufVxuXG4ud2Jkdi1tb2R1bGUtYnV0dG9uc3tcbiAgICBib3JkZXItc3R5bGU6IG91dHNldDtcbiAgICBib3JkZXItcmFkaXVzOiAyMCU7XG5cbn1cbi53YmR2LW1vZHVsZS1idXR0b25zOmhvdmVye1xuICAgIGJhY2tncm91bmQ6ICMwZDQ3YTE7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzBkNDdhMTtcbiAgICBjb2xvcjogIzBkNDdhMTtcblxufVxuXG4ud2Jkdi1tb2R1bGUtYnV0dG9uczphY3RpdmV7XG4gICAgYmFja2dyb3VuZDogIzBkNDdhMTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGQ0N2ExO1xuICAgIGNvbG9yOiAjMGQ0N2ExO1xuXG59XG5cbi53YmR2LW1vZHVsZS1idXR0b25zOmFjdGl2ZXtcbiAgICBiYWNrZ3JvdW5kOiAjMGQ0N2ExO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwZDQ3YTE7XG4gICAgY29sb3I6ICMwZDQ3YTE7XG59XG5cblxuXG4jYWN0aXZlQmdUb3BpY3tcbiAgICBiYWNrZ3JvdW5kOiAjNDQ0NDQ0O1xufVxuXG4ud2Jkdi14LXBhZHtcbiAgICBtYXJnaW4tbGVmdDogMWVtO1xuXG59XG5cbi53YmR2LW1vZHVsZS1Ye1xuICAgIGNvbG9yOiAjRkZGRkZGO1xuICAgIG1hcmdpbi10b3A6IDFlbTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4ud2Jkdi1idG57XG4gICAgbWFyZ2luLWxlZnQ6IDFlbTtcbiAgICBtYXJnaW4tcmlnaHQ6IDA7XG59XG5cbi53YmR2LW1hcmdpbi1ib3Jke1xuICAgIGJvcmRlcjogIzM4M2MzZjtcblxuICAgIGJvcmRlci13aWR0aDogNXB4O1xuICAgIG1hcmdpbjogMWVtO1xuICAgIHBhZGRpbmc6IDFlbTtcbn1cblxuLyogVGhpcyB3YXMgdGFrZW4gVzMgU2Nob29scyAoUHJvdmlkaW5nIHJlZmVyZW5jZSBhcyBhc2tlZCBieSBwcm9mZXNzb3IqL1xuLnN3aXRjaCB7XG4gICAgLyogICAgcG9zaXRpb246IHJlbGF0aXZlOyovXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHdpZHRoOiA0MHB4O1xuICAgIGhlaWdodDogMjVweDtcbn1cblxuLnN3aXRjaCBpbnB1dCB7XG4gICAgb3BhY2l0eTogMDtcbiAgICB3aWR0aDogMDtcbiAgICBoZWlnaHQ6IDA7XG59XG5cbi5zbGlkZXIge1xuICAgIC8qICBwb3NpdGlvbjogYWJzb2x1dGU7Ki9cbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNjY2M7XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiAuNHM7XG4gICAgdHJhbnNpdGlvbjogLjRzO1xufVxuXG4uc2xpZGVyOmJlZm9yZSB7XG4gICAgLyogcG9zaXRpb246IGFic29sdXRlOyovXG4gICAgY29udGVudDogXCJcIjtcbiAgICBoZWlnaHQ6IDE4cHg7XG4gICAgd2lkdGg6IDE2cHg7XG4gICAgbGVmdDogNHB4O1xuICAgIGJvdHRvbTogNHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogLjRzO1xuICAgIHRyYW5zaXRpb246IC40cztcbn1cblxuaW5wdXQ6Y2hlY2tlZCArIC5zbGlkZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMTk2RjM7XG59XG5cbmlucHV0OmZvY3VzICsgLnNsaWRlciB7XG4gICAgYm94LXNoYWRvdzogMCAwIDFweCAjMjE5NkYzO1xufVxuXG5pbnB1dDpjaGVja2VkICsgLnNsaWRlcjpiZWZvcmUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDI2cHgpO1xuICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjZweCk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDI2cHgpO1xufVxuXG5cbi5zbGlkZXIucm91bmQge1xuICAgIGJvcmRlci1yYWRpdXM6IDM0cHg7XG59XG5cbi5zbGlkZXIucm91bmQ6YmVmb3JlIHtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5cblxuXG4jVXBNYXJnaW5GbGR7XG4gICAgbWFyZ2luLXRvcDogMWVtO1xufVxuXG4jY3VzdG9tcm93RmxkIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgcGFkZGluZy1ib3R0b206IDEwMDAlO1xuXG5cbiAgICBvdmVyZmxvdy15OiBoaWRkZW47XG59XG5cblxuQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gICAgI0RhcmtCZ0ZsZHtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgIH1cbiAgICAud2Jkdi1mbnQtZmxkLXNpZGV7XG4gICAgICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICB9XG5cbiAgICBkaXYuYnRuLWdyb3VwLm5hdi1saW5rLmFjdGl2ZXtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgIH1cbiAgICAud2Jkdi1yZW1vdmUtbGVmLXJpZ2h0LXBte1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDA7XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDA7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDA7XG4gICAgfVxuXG5cbn1cblxuXG4ud2Jkdi1tb2R1bGVsaXN0LWJ1dHRvbi1mYXtcbiAgICBjb2xvcjogd2hpdGU7XG59XG5cblxuXG4uZmEtY2hlY2t7XG4gICAgY29sb3I6IGdyZWVuO1xufVxuXG4ud2Jkdi1mb250e1xuICAgIGZvbnQtc2l6ZTogMnZ3O1xufVxuXG5cbi53YmR2LWJ0bi13aWRnZXR7XG4gICAgZm9udC1zaXplOiAxdnc7XG59XG5cbi53YmR2LXRoaXMtc2Nyb2xsLXRlc3R7XG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuXG59XG4ud2Jkdi1hY3RpdmV7XG4gICAgYmFja2dyb3VuZDogIzBkNDdhMTtcbiAgICBjb2xvcjogIzBkNDdhMTtcbn1cblxuLndiZHYtbGVzc29uLWFjdGl2ZXtcbiAgICBiYWNrZ3JvdW5kOiAjMGEwNDA2O1xufVxuXG4ud2Jkdi10b3BpYy1hY3RpdmV7XG4gICAgYmFja2dyb3VuZDogIzM4M2MzZjtcbn1cblxuLmZhLXNpZ24tb3V0e1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmZhLXVzZXJ7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuXG4iXX0= */"

/***/ }),

/***/ "./src/app/list-widget/list-widget.component.html":
/*!********************************************************!*\
  !*** ./src/app/list-widget/list-widget.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row border wbdv-margin-bord col-12 m-auto  m-md-2 m-lg-2 m-xl-2 pr-lg-2 pr-xl-2 pr-md-2 mb-2 mt-2\" >\n  <form class=\"row text-center col-12\" [ngSwitch]=\"Widget.listType\">\n    <div class=\"m-auto mt-1 mb-1\" *ngSwitchCase=\"'UNORDERED'\">\n        <ul *ngFor=\"let item of Widget.items.split('\\n')\">\n\n                   <li>{{item}}\n                   </li>\n\n          </ul>\n    </div>\n\n    <div class=\"m-auto mt-1 mb-1\" *ngSwitchCase=\"'ORDERED'\">\n     <ol *ngFor=\"let item of Widget.items.split('\\n')\">\n         <li> {{item}}\n         </li>\n    </ol>\n    </div>\n    <div class=\"m-auto mt-1 mb-1\" *ngSwitchDefault>\n    </div>\n  </form>\n</div>\n"

/***/ }),

/***/ "./src/app/list-widget/list-widget.component.ts":
/*!******************************************************!*\
  !*** ./src/app/list-widget/list-widget.component.ts ***!
  \******************************************************/
/*! exports provided: ListWidgetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListWidgetComponent", function() { return ListWidgetComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_widget_model_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/widget.model.client */ "./src/app/models/widget.model.client.ts");



var ListWidgetComponent = /** @class */ (function () {
    function ListWidgetComponent() {
    }
    ListWidgetComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _models_widget_model_client__WEBPACK_IMPORTED_MODULE_2__["Widget"])
    ], ListWidgetComponent.prototype, "Widget", void 0);
    ListWidgetComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-list-widget',
            template: __webpack_require__(/*! ./list-widget.component.html */ "./src/app/list-widget/list-widget.component.html"),
            styles: [__webpack_require__(/*! ./list-widget.component.css */ "./src/app/list-widget/list-widget.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ListWidgetComponent);
    return ListWidgetComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".wbdv-href{\ncolor: #0478ff;\n    border: #0a0406;\n    cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBLGNBQWM7SUFDVixlQUFlO0lBQ2YsZUFBZTtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud2Jkdi1ocmVme1xuY29sb3I6ICMwNDc4ZmY7XG4gICAgYm9yZGVyOiAjMGEwNDA2O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<div class=\"container \">\n  <button type=\"button\" class=\"close\" aria-label=\"Close\">\n    <span aria-hidden=\"true\" class=\"font-weight-bold wbdv-time-btn\">&times;</span>\n  </button>\n  <h1>Sign In</h1>\n  <div>\n    <div class=\"form-group row\">\n      <label for=\"username\" class=\"col-sm-2 col-form-label\">Username </label>\n      <div class=\"col-sm-10\">\n        <input class=\"form-control\"\n               id=\"username\"\n               placeholder=\"Alice\" [(ngModel)]=\"username\"\n               />\n      </div>\n    </div>\n    <div class=\"form-group row\">\n      <label for=\"password\" class=\"col-sm-2 col-form-label\">\n        Password </label>\n      <div class=\"col-sm-10\">\n        <input type=\"password\"\n               class=\"form-control wbdv-password-fld\"\n               id=\"password\"\n               placeholder=\"123qwe#$%\" [(ngModel)]=\"password\"\n               />\n      </div>\n    </div>\n    <div class=\"form-group row\">\n      <label class=\"col-sm-2 col-form-label\"></label>\n      <div class=\"col-sm-10\">\n\n        <button  class=\"btn btn-primary btn-block\"\n                 role=\"button\"  (click)=\"login()\" >Sign in</button>\n        <div class=\"row\">\n          <div class=\"col-6\">\n            <a href=\"#\">Forgot Password?</a>\n          </div>\n          <div class=\"col-6\">\n\n           <div class=\"float-right wbdv-href\" (click)=\"register()\">Sign up</div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_user_service_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/user.service.client */ "./src/services/user.service.client.ts");




var LoginComponent = /** @class */ (function () {
    function LoginComponent(router, service) {
        this.router = router;
        this.service = service;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        var credentials = {
            username: this.username,
            password: this.password
        };
        this.service.loginUser(credentials)
            .then(function (user) {
            if (user.userId !== undefined) {
                _this.router.navigate(['profile']);
            }
            else {
                alert("User does not exist!!");
            }
        });
    };
    LoginComponent.prototype.register = function () {
        this.router.navigate(['register']);
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_user_service_client__WEBPACK_IMPORTED_MODULE_3__["UserService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/models/widget.model.client.ts":
/*!***********************************************!*\
  !*** ./src/app/models/widget.model.client.ts ***!
  \***********************************************/
/*! exports provided: Widget */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Widget", function() { return Widget; });
var Widget = /** @class */ (function () {
    function Widget() {
    }
    return Widget;
}());



/***/ }),

/***/ "./src/app/module-list/module-list.component.css":
/*!*******************************************************!*\
  !*** ./src/app/module-list/module-list.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "html, body{\n    height:  100%;\n    width: auto !important;\n    min-width: 250px;\n\n\n\n\n}\n.wbdv-height-row-sqave{\n    height: 20px;\n}\n.wbdv-align-text{\n    font-size:4vw;\n}\ndiv.col-4.bg-dark{\n    -webkit-column-fill: inherit;\n            column-fill: inherit;\n    height: 100%;\n}\n.container-fluid{\n\n}\n.container {\n\n    width: 100%;\n    height: 100%;\n\n}\n#mainCourseEdFld{\n    min-width: 250px;\n}\n.fa-toggle-on{\n    color: #0a0406;\n}\ndiv.row{\n    height: 100%;\n    width: 100%;\n\n}\n.row{\n    height: 100%;\n\n}\n#CrossFld{\n    margin-right: 4px;\n    padding: 4px;\n    color: white;\n}\n#TopPlusFld{\n    color: #FFFFFF;\n    padding: auto;\n    align-self: center;\n    align-content: center;\n    margin-top: 0.6em;\n    margin: auto;\n\n\n}\n.wbdv-Cust-Bord{\n    border: #383c3f;\n    background: #0a0406;\n    border-radius: 5px;\n}\n#DarkBgFld{\n    background: #0a0406;\n    height: 100%;\n\n}\n.wbdv-Full{\n    overflow: hidden;\n}\n.wbdv-SideCol{\n    color: #FFFFFF;\n}\ndiv#DarkBgFld.col-2.bg-dark{\n    background: #0a0406;\n}\n::-webkit-scrollbar {\n    display: none;\n    overflow: hidden;\n}\n#ActFld{\n    background: #4790e3\n}\n#TopicPlusFld{\n    color: #FFFFFF;\n}\n.wbdv-Topic-Bg-Color{\n    background: #7a7a7a;\n    margin-right: 0.5em;\n    color: #FFFFFF;\n}\n.wbdv-Topic-Bg-Color:hover{\n    background: #383c3f;\n}\n.wbdv-Topic-Bg-Color:active{\n    background: #383c3f;\n}\n.wbdv-modAct{\n    background: #0d47a1;\n    color: #0d47a1;\n}\n.wbdv-modAct:active{\n    background: #0b2e13;\n    color: #0b2e13;\n}\n.wbdv-lesson-tabs{\n    background: #262627;\n    margin-left: 4px;\n}\n.wbdv-lesson-tabs:hover{\n    background: #0a0406;\n}\n@media (max-width: 200px) {\n    .wbdv-lesson-tabs{\n        margin: 0;\n        padding: 0;\n    }\n\n\n}\n.wbdv-module-buttons{\n    border-style: outset;\n    border-radius: 20%;\n\n}\n.wbdv-module-buttons:hover{\n    background: #0d47a1;\n    background-color: #0d47a1;\n    color: #0d47a1;\n\n}\n.wbdv-module-buttons:active{\n    background: #0d47a1;\n    background-color: #0d47a1;\n    color: #0d47a1;\n\n}\n.wbdv-module-buttons:active{\n    background: #0d47a1;\n    background-color: #0d47a1;\n    color: #0d47a1;\n}\n#activeBgTopic{\n    background: #444444;\n}\n.wbdv-x-pad{\n    margin-left: 1em;\n\n}\n.wbdv-module-X{\n    color: #FFFFFF;\n    margin-top: 1em;\n    overflow: hidden;\n}\n.wbdv-btn{\n    margin-left: 1em;\n    margin-right: 0;\n}\n.wbdv-margin-bord{\n    border: #383c3f;\n\n    border-width: 5px;\n    margin: 1em;\n    padding: 1em;\n}\n/* This was taken W3 Schools (Providing reference as asked by professor*/\n.switch {\n    /*    position: relative;*/\n    display: inline-block;\n    width: 40px;\n    height: 25px;\n}\n.switch input {\n    opacity: 0;\n    width: 0;\n    height: 0;\n}\n.slider {\n    /*  position: absolute;*/\n    cursor: pointer;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    background-color: #ccc;\n    transition: .4s;\n}\n.slider:before {\n    /* position: absolute;*/\n    content: \"\";\n    height: 18px;\n    width: 16px;\n    left: 4px;\n    bottom: 4px;\n    background-color: white;\n    transition: .4s;\n}\ninput:checked + .slider {\n    background-color: #2196F3;\n}\ninput:focus + .slider {\n    box-shadow: 0 0 1px #2196F3;\n}\ninput:checked + .slider:before {\n    -webkit-transform: translateX(26px);\n    transform: translateX(26px);\n}\n.slider.round {\n    border-radius: 34px;\n}\n.slider.round:before {\n    border-radius: 50%;\n}\n#UpMarginFld{\n    margin-top: 1em;\n}\n#customrowFld {\n    height: 100%;\n    padding-bottom: 1000%;\n\n\n    overflow-y: hidden;\n}\n@media (max-width: 600px) {\n    #DarkBgFld{\n        padding: 0;\n        margin: 0;\n    }\n    .wbdv-fnt-fld-side{\n        font-size: 10px;\n    }\n\n    div.btn-group.nav-link.active{\n        padding: 0;\n        margin: 0;\n    }\n    .wbdv-remove-lef-right-pm{\n        padding-left: 0;\n        padding-right: 0;\n        margin-left: 0;\n        margin-right: 0;\n    }\n\n\n}\n.wbdv-modulelist-button-fa{\n    color: white;\n}\n.fa-check{\n    color: green;\n}\n.wbdv-font{\n    font-size: 2vw;\n}\n.wbdv-btn-widget{\n    font-size: 1vw;\n}\n.wbdv-this-scroll-test{\n    overflow-y: scroll;\n\n}\n.wbdv-active{\n    background: #0d47a1;\n    color: #0d47a1;\n}\n.wbdv-lesson-active{\n    background: #0a0406;\n}\n.wbdv-topic-active{\n    background: #383c3f;\n}\n.fa-sign-out{\n    color: white;\n}\n.fa-user{\n    color: white;\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlLWxpc3QvbW9kdWxlLWxpc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsZ0JBQWdCOzs7OztBQUtwQjtBQUNBO0lBQ0ksWUFBWTtBQUNoQjtBQUNBO0lBQ0ksYUFBYTtBQUNqQjtBQUNBO0lBQ0ksNEJBQW9CO1lBQXBCLG9CQUFvQjtJQUNwQixZQUFZO0FBQ2hCO0FBRUE7O0FBRUE7QUFFQTs7SUFFSSxXQUFXO0lBQ1gsWUFBWTs7QUFFaEI7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjtBQUVBO0lBQ0ksY0FBYztBQUNsQjtBQUNBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7O0FBRWY7QUFDQTtJQUNJLFlBQVk7O0FBRWhCO0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsWUFBWTtJQUNaLFlBQVk7QUFDaEI7QUFFQTtJQUNJLGNBQWM7SUFDZCxhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQixpQkFBaUI7SUFDakIsWUFBWTs7O0FBR2hCO0FBR0E7SUFDSSxlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLGtCQUFrQjtBQUN0QjtBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLFlBQVk7O0FBRWhCO0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7QUFFQTtJQUNJLGNBQWM7QUFDbEI7QUFFQTtJQUNJLG1CQUFtQjtBQUN2QjtBQUVBO0lBQ0ksYUFBYTtJQUNiLGdCQUFnQjtBQUNwQjtBQUVBO0lBQ0k7QUFDSjtBQUVBO0lBQ0ksY0FBYztBQUNsQjtBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixjQUFjO0FBQ2xCO0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7QUFFQTtJQUNJLG1CQUFtQjtBQUN2QjtBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLGNBQWM7QUFDbEI7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixjQUFjO0FBQ2xCO0FBR0E7SUFDSSxtQkFBbUI7SUFDbkIsZ0JBQWdCO0FBQ3BCO0FBSUE7SUFDSSxtQkFBbUI7QUFDdkI7QUFFQTtJQUNJO1FBQ0ksU0FBUztRQUNULFVBQVU7SUFDZDs7O0FBR0o7QUFFQTtJQUNJLG9CQUFvQjtJQUNwQixrQkFBa0I7O0FBRXRCO0FBQ0E7SUFDSSxtQkFBbUI7SUFDbkIseUJBQXlCO0lBQ3pCLGNBQWM7O0FBRWxCO0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIseUJBQXlCO0lBQ3pCLGNBQWM7O0FBRWxCO0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIseUJBQXlCO0lBQ3pCLGNBQWM7QUFDbEI7QUFJQTtJQUNJLG1CQUFtQjtBQUN2QjtBQUVBO0lBQ0ksZ0JBQWdCOztBQUVwQjtBQUVBO0lBQ0ksY0FBYztJQUNkLGVBQWU7SUFDZixnQkFBZ0I7QUFDcEI7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixlQUFlO0FBQ25CO0FBRUE7SUFDSSxlQUFlOztJQUVmLGlCQUFpQjtJQUNqQixXQUFXO0lBQ1gsWUFBWTtBQUNoQjtBQUVBLHdFQUF3RTtBQUN4RTtJQUNJLDBCQUEwQjtJQUMxQixxQkFBcUI7SUFDckIsV0FBVztJQUNYLFlBQVk7QUFDaEI7QUFFQTtJQUNJLFVBQVU7SUFDVixRQUFRO0lBQ1IsU0FBUztBQUNiO0FBRUE7SUFDSSx3QkFBd0I7SUFDeEIsZUFBZTtJQUNmLE1BQU07SUFDTixPQUFPO0lBQ1AsUUFBUTtJQUNSLFNBQVM7SUFDVCxzQkFBc0I7SUFFdEIsZUFBZTtBQUNuQjtBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLFdBQVc7SUFDWCxZQUFZO0lBQ1osV0FBVztJQUNYLFNBQVM7SUFDVCxXQUFXO0lBQ1gsdUJBQXVCO0lBRXZCLGVBQWU7QUFDbkI7QUFFQTtJQUNJLHlCQUF5QjtBQUM3QjtBQUVBO0lBQ0ksMkJBQTJCO0FBQy9CO0FBRUE7SUFDSSxtQ0FBbUM7SUFFbkMsMkJBQTJCO0FBQy9CO0FBR0E7SUFDSSxtQkFBbUI7QUFDdkI7QUFFQTtJQUNJLGtCQUFrQjtBQUN0QjtBQUlBO0lBQ0ksZUFBZTtBQUNuQjtBQUVBO0lBQ0ksWUFBWTtJQUNaLHFCQUFxQjs7O0lBR3JCLGtCQUFrQjtBQUN0QjtBQUdBO0lBQ0k7UUFDSSxVQUFVO1FBQ1YsU0FBUztJQUNiO0lBQ0E7UUFDSSxlQUFlO0lBQ25COztJQUVBO1FBQ0ksVUFBVTtRQUNWLFNBQVM7SUFDYjtJQUNBO1FBQ0ksZUFBZTtRQUNmLGdCQUFnQjtRQUNoQixjQUFjO1FBQ2QsZUFBZTtJQUNuQjs7O0FBR0o7QUFHQTtJQUNJLFlBQVk7QUFDaEI7QUFJQTtJQUNJLFlBQVk7QUFDaEI7QUFFQTtJQUNJLGNBQWM7QUFDbEI7QUFHQTtJQUNJLGNBQWM7QUFDbEI7QUFFQTtJQUNJLGtCQUFrQjs7QUFFdEI7QUFDQTtJQUNJLG1CQUFtQjtJQUNuQixjQUFjO0FBQ2xCO0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7QUFFQTtJQUNJLG1CQUFtQjtBQUN2QjtBQUVBO0lBQ0ksWUFBWTtBQUNoQjtBQUVBO0lBQ0ksWUFBWTtBQUNoQiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZS1saXN0L21vZHVsZS1saXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJodG1sLCBib2R5e1xuICAgIGhlaWdodDogIDEwMCU7XG4gICAgd2lkdGg6IGF1dG8gIWltcG9ydGFudDtcbiAgICBtaW4td2lkdGg6IDI1MHB4O1xuXG5cblxuXG59XG4ud2Jkdi1oZWlnaHQtcm93LXNxYXZle1xuICAgIGhlaWdodDogMjBweDtcbn1cbi53YmR2LWFsaWduLXRleHR7XG4gICAgZm9udC1zaXplOjR2dztcbn1cbmRpdi5jb2wtNC5iZy1kYXJre1xuICAgIGNvbHVtbi1maWxsOiBpbmhlcml0O1xuICAgIGhlaWdodDogMTAwJTtcbn1cblxuLmNvbnRhaW5lci1mbHVpZHtcblxufVxuXG4uY29udGFpbmVyIHtcblxuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcblxufVxuXG4jbWFpbkNvdXJzZUVkRmxke1xuICAgIG1pbi13aWR0aDogMjUwcHg7XG59XG5cbi5mYS10b2dnbGUtb257XG4gICAgY29sb3I6ICMwYTA0MDY7XG59XG5kaXYucm93e1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcblxufVxuLnJvd3tcbiAgICBoZWlnaHQ6IDEwMCU7XG5cbn1cblxuI0Nyb3NzRmxke1xuICAgIG1hcmdpbi1yaWdodDogNHB4O1xuICAgIHBhZGRpbmc6IDRweDtcbiAgICBjb2xvcjogd2hpdGU7XG59XG5cbiNUb3BQbHVzRmxke1xuICAgIGNvbG9yOiAjRkZGRkZGO1xuICAgIHBhZGRpbmc6IGF1dG87XG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBtYXJnaW4tdG9wOiAwLjZlbTtcbiAgICBtYXJnaW46IGF1dG87XG5cblxufVxuXG5cbi53YmR2LUN1c3QtQm9yZHtcbiAgICBib3JkZXI6ICMzODNjM2Y7XG4gICAgYmFja2dyb3VuZDogIzBhMDQwNjtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbiNEYXJrQmdGbGR7XG4gICAgYmFja2dyb3VuZDogIzBhMDQwNjtcbiAgICBoZWlnaHQ6IDEwMCU7XG5cbn1cblxuLndiZHYtRnVsbHtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4ud2Jkdi1TaWRlQ29se1xuICAgIGNvbG9yOiAjRkZGRkZGO1xufVxuXG5kaXYjRGFya0JnRmxkLmNvbC0yLmJnLWRhcmt7XG4gICAgYmFja2dyb3VuZDogIzBhMDQwNjtcbn1cblxuOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4jQWN0Rmxke1xuICAgIGJhY2tncm91bmQ6ICM0NzkwZTNcbn1cblxuI1RvcGljUGx1c0ZsZHtcbiAgICBjb2xvcjogI0ZGRkZGRjtcbn1cblxuLndiZHYtVG9waWMtQmctQ29sb3J7XG4gICAgYmFja2dyb3VuZDogIzdhN2E3YTtcbiAgICBtYXJnaW4tcmlnaHQ6IDAuNWVtO1xuICAgIGNvbG9yOiAjRkZGRkZGO1xufVxuXG4ud2Jkdi1Ub3BpYy1CZy1Db2xvcjpob3ZlcntcbiAgICBiYWNrZ3JvdW5kOiAjMzgzYzNmO1xufVxuXG4ud2Jkdi1Ub3BpYy1CZy1Db2xvcjphY3RpdmV7XG4gICAgYmFja2dyb3VuZDogIzM4M2MzZjtcbn1cblxuLndiZHYtbW9kQWN0e1xuICAgIGJhY2tncm91bmQ6ICMwZDQ3YTE7XG4gICAgY29sb3I6ICMwZDQ3YTE7XG59XG5cbi53YmR2LW1vZEFjdDphY3RpdmV7XG4gICAgYmFja2dyb3VuZDogIzBiMmUxMztcbiAgICBjb2xvcjogIzBiMmUxMztcbn1cblxuXG4ud2Jkdi1sZXNzb24tdGFic3tcbiAgICBiYWNrZ3JvdW5kOiAjMjYyNjI3O1xuICAgIG1hcmdpbi1sZWZ0OiA0cHg7XG59XG5cblxuXG4ud2Jkdi1sZXNzb24tdGFiczpob3ZlcntcbiAgICBiYWNrZ3JvdW5kOiAjMGEwNDA2O1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogMjAwcHgpIHtcbiAgICAud2Jkdi1sZXNzb24tdGFic3tcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgIH1cblxuXG59XG5cbi53YmR2LW1vZHVsZS1idXR0b25ze1xuICAgIGJvcmRlci1zdHlsZTogb3V0c2V0O1xuICAgIGJvcmRlci1yYWRpdXM6IDIwJTtcblxufVxuLndiZHYtbW9kdWxlLWJ1dHRvbnM6aG92ZXJ7XG4gICAgYmFja2dyb3VuZDogIzBkNDdhMTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGQ0N2ExO1xuICAgIGNvbG9yOiAjMGQ0N2ExO1xuXG59XG5cbi53YmR2LW1vZHVsZS1idXR0b25zOmFjdGl2ZXtcbiAgICBiYWNrZ3JvdW5kOiAjMGQ0N2ExO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwZDQ3YTE7XG4gICAgY29sb3I6ICMwZDQ3YTE7XG5cbn1cblxuLndiZHYtbW9kdWxlLWJ1dHRvbnM6YWN0aXZle1xuICAgIGJhY2tncm91bmQ6ICMwZDQ3YTE7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzBkNDdhMTtcbiAgICBjb2xvcjogIzBkNDdhMTtcbn1cblxuXG5cbiNhY3RpdmVCZ1RvcGlje1xuICAgIGJhY2tncm91bmQ6ICM0NDQ0NDQ7XG59XG5cbi53YmR2LXgtcGFke1xuICAgIG1hcmdpbi1sZWZ0OiAxZW07XG5cbn1cblxuLndiZHYtbW9kdWxlLVh7XG4gICAgY29sb3I6ICNGRkZGRkY7XG4gICAgbWFyZ2luLXRvcDogMWVtO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi53YmR2LWJ0bntcbiAgICBtYXJnaW4tbGVmdDogMWVtO1xuICAgIG1hcmdpbi1yaWdodDogMDtcbn1cblxuLndiZHYtbWFyZ2luLWJvcmR7XG4gICAgYm9yZGVyOiAjMzgzYzNmO1xuXG4gICAgYm9yZGVyLXdpZHRoOiA1cHg7XG4gICAgbWFyZ2luOiAxZW07XG4gICAgcGFkZGluZzogMWVtO1xufVxuXG4vKiBUaGlzIHdhcyB0YWtlbiBXMyBTY2hvb2xzIChQcm92aWRpbmcgcmVmZXJlbmNlIGFzIGFza2VkIGJ5IHByb2Zlc3NvciovXG4uc3dpdGNoIHtcbiAgICAvKiAgICBwb3NpdGlvbjogcmVsYXRpdmU7Ki9cbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgd2lkdGg6IDQwcHg7XG4gICAgaGVpZ2h0OiAyNXB4O1xufVxuXG4uc3dpdGNoIGlucHV0IHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHdpZHRoOiAwO1xuICAgIGhlaWdodDogMDtcbn1cblxuLnNsaWRlciB7XG4gICAgLyogIHBvc2l0aW9uOiBhYnNvbHV0ZTsqL1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICBib3R0b206IDA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2NjYztcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IC40cztcbiAgICB0cmFuc2l0aW9uOiAuNHM7XG59XG5cbi5zbGlkZXI6YmVmb3JlIHtcbiAgICAvKiBwb3NpdGlvbjogYWJzb2x1dGU7Ki9cbiAgICBjb250ZW50OiBcIlwiO1xuICAgIGhlaWdodDogMThweDtcbiAgICB3aWR0aDogMTZweDtcbiAgICBsZWZ0OiA0cHg7XG4gICAgYm90dG9tOiA0cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiAuNHM7XG4gICAgdHJhbnNpdGlvbjogLjRzO1xufVxuXG5pbnB1dDpjaGVja2VkICsgLnNsaWRlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIxOTZGMztcbn1cblxuaW5wdXQ6Zm9jdXMgKyAuc2xpZGVyIHtcbiAgICBib3gtc2hhZG93OiAwIDAgMXB4ICMyMTk2RjM7XG59XG5cbmlucHV0OmNoZWNrZWQgKyAuc2xpZGVyOmJlZm9yZSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjZweCk7XG4gICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgyNnB4KTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjZweCk7XG59XG5cblxuLnNsaWRlci5yb3VuZCB7XG4gICAgYm9yZGVyLXJhZGl1czogMzRweDtcbn1cblxuLnNsaWRlci5yb3VuZDpiZWZvcmUge1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cblxuXG5cbiNVcE1hcmdpbkZsZHtcbiAgICBtYXJnaW4tdG9wOiAxZW07XG59XG5cbiNjdXN0b21yb3dGbGQge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTAwMCU7XG5cblxuICAgIG92ZXJmbG93LXk6IGhpZGRlbjtcbn1cblxuXG5AbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgICAjRGFya0JnRmxke1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgfVxuICAgIC53YmR2LWZudC1mbGQtc2lkZXtcbiAgICAgICAgZm9udC1zaXplOiAxMHB4O1xuICAgIH1cblxuICAgIGRpdi5idG4tZ3JvdXAubmF2LWxpbmsuYWN0aXZle1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgfVxuICAgIC53YmR2LXJlbW92ZS1sZWYtcmlnaHQtcG17XG4gICAgICAgIHBhZGRpbmctbGVmdDogMDtcbiAgICAgICAgcGFkZGluZy1yaWdodDogMDtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMDtcbiAgICB9XG5cblxufVxuXG5cbi53YmR2LW1vZHVsZWxpc3QtYnV0dG9uLWZhe1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cblxuXG5cbi5mYS1jaGVja3tcbiAgICBjb2xvcjogZ3JlZW47XG59XG5cbi53YmR2LWZvbnR7XG4gICAgZm9udC1zaXplOiAydnc7XG59XG5cblxuLndiZHYtYnRuLXdpZGdldHtcbiAgICBmb250LXNpemU6IDF2dztcbn1cblxuLndiZHYtdGhpcy1zY3JvbGwtdGVzdHtcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XG5cbn1cbi53YmR2LWFjdGl2ZXtcbiAgICBiYWNrZ3JvdW5kOiAjMGQ0N2ExO1xuICAgIGNvbG9yOiAjMGQ0N2ExO1xufVxuXG4ud2Jkdi1sZXNzb24tYWN0aXZle1xuICAgIGJhY2tncm91bmQ6ICMwYTA0MDY7XG59XG5cbi53YmR2LXRvcGljLWFjdGl2ZXtcbiAgICBiYWNrZ3JvdW5kOiAjMzgzYzNmO1xufVxuXG4uZmEtc2lnbi1vdXR7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuXG4uZmEtdXNlcntcbiAgICBjb2xvcjogd2hpdGU7XG59XG5cbiJdfQ== */"

/***/ }),

/***/ "./src/app/module-list/module-list.component.html":
/*!********************************************************!*\
  !*** ./src/app/module-list/module-list.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-12\">\n    <ul class=\"list-group nav  nav-pills p-2 col-12\">\n        <li *ngFor=\"let module of modules\" class=\"mb-1 mt-1\">\n            <div [ngClass]=\"{'wbdv-modAct': module.id == moduleId}\"\n                 class=\"btn-group nav-link col-12 btn-secondary  text-center \"\n                 routerLink=\"/course/{{courseId}}/module/{{module.id}}\">\n                <i class=\"text-light wbdv-fnt-fld-side col-12 m-2 \">{{module.title}}</i>\n            </div>\n        </li>\n\n    </ul>\n</div>"

/***/ }),

/***/ "./src/app/module-list/module-list.component.ts":
/*!******************************************************!*\
  !*** ./src/app/module-list/module-list.component.ts ***!
  \******************************************************/
/*! exports provided: ModuleListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModuleListComponent", function() { return ModuleListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_module_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/module.service.client */ "./src/services/module.service.client.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var ModuleListComponent = /** @class */ (function () {
    function ModuleListComponent(service, activatedRoute) {
        var _this = this;
        this.service = service;
        this.activatedRoute = activatedRoute;
        this.courses = [];
        this.modules = [];
        this.activatedRoute.params.subscribe(function (params) { return _this.setParams(params); });
    }
    ModuleListComponent.prototype.setParams = function (params) {
        this.courseId = params.courseId;
        this.moduleId = params.moduleId;
        this.findModules(this.courseId);
    };
    ModuleListComponent.prototype.findModules = function (courseId) {
        var _this = this;
        this.service.findAllModules(courseId)
            .then(function (modules) { _this.modules = modules; });
    };
    ModuleListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.findAllModules(this.courseId)
            .then(function (modules) { _this.modules = modules; console.log("Module", modules); });
    };
    ModuleListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-module-list',
            template: __webpack_require__(/*! ./module-list.component.html */ "./src/app/module-list/module-list.component.html"),
            styles: [__webpack_require__(/*! ./module-list.component.css */ "./src/app/module-list/module-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_module_service_client__WEBPACK_IMPORTED_MODULE_2__["ModuleService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], ModuleListComponent);
    return ModuleListComponent;
}());



/***/ }),

/***/ "./src/app/paragraph-widget/paragraph-widget.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/paragraph-widget/paragraph-widget.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhcmFncmFwaC13aWRnZXQvcGFyYWdyYXBoLXdpZGdldC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/paragraph-widget/paragraph-widget.component.html":
/*!******************************************************************!*\
  !*** ./src/app/paragraph-widget/paragraph-widget.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row border wbdv-margin-bord col-12 m-auto m-md-2 m-lg-2 m-xl-2 pr-lg-2 pr-xl-2 pr-md-2 mb-2 mt-2\">\n  <br/>\n  <form class=\"row text-center col-12\">\n    <p class=\"m-auto mt-1 mb-1\">{{Widget.pText}}</p>\n  </form>\n</div>"

/***/ }),

/***/ "./src/app/paragraph-widget/paragraph-widget.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/paragraph-widget/paragraph-widget.component.ts ***!
  \****************************************************************/
/*! exports provided: ParagraphWidgetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParagraphWidgetComponent", function() { return ParagraphWidgetComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_widget_model_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/widget.model.client */ "./src/app/models/widget.model.client.ts");



var ParagraphWidgetComponent = /** @class */ (function () {
    function ParagraphWidgetComponent() {
    }
    ParagraphWidgetComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _models_widget_model_client__WEBPACK_IMPORTED_MODULE_2__["Widget"])
    ], ParagraphWidgetComponent.prototype, "Widget", void 0);
    ParagraphWidgetComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-paragraph-widget',
            template: __webpack_require__(/*! ./paragraph-widget.component.html */ "./src/app/paragraph-widget/paragraph-widget.component.html"),
            styles: [__webpack_require__(/*! ./paragraph-widget.component.css */ "./src/app/paragraph-widget/paragraph-widget.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ParagraphWidgetComponent);
    return ParagraphWidgetComponent;
}());



/***/ }),

/***/ "./src/app/profile/profile.component.css":
/*!***********************************************!*\
  !*** ./src/app/profile/profile.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/profile/profile.component.html":
/*!************************************************!*\
  !*** ./src/app/profile/profile.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h1>Profile</h1>\n  <div>\n    <div class=\"form-group row\">\n      <label for=\"username\" class=\"col-sm-2 col-form-label\">Username </label>\n      <div class=\"col-sm-6 col-xs-6\">\n        <input class=\"form-control\"\n               id=\"username\" [(ngModel)]=user.username placeholder=\"alice\" readOnly/>\n      </div>\n    </div>\n\n\n    <div class=\"form-group row\">\n      <label for=\"firstNameFld\" class=\"col-sm-2 col-form-label\">First Name </label>\n      <div class=\"col-sm-6 col-xs-6\">\n        <input type=\"text\" class=\"form-control\"\n               id=\"firstNameFld\" [(ngModel)]=user.firstName placeholder=\"Alice\"  />\n      </div>\n    </div>\n    <div class=\"form-group row\">\n      <label for=\"lastNameFld\" class=\"col-sm-2 col-form-label\">Last Name </label>\n      <div class=\"col-sm-6 col-xs-6\">\n        <input type=\"text\" class=\"form-control\"\n               id=\"lastNameFld\" [(ngModel)]=user.lastName placeholder=\"Wonderland\" />\n      </div>\n    </div>\n\n    <div class=\"form-group row\">\n      <label for=\"phone\" class=\"col-sm-2 col-form-label\">Phone </label>\n      <div class=\"col-sm-6 col-xs-6\">\n        <input type=\"tel\" class=\"form-control\" id=\"phone\" placeholder=\"(555) 123-4324)\"\n               [(ngModel)]=user.phoneNo data-country=\"US\" />\n      </div>\n    </div>\n\n    <div class=\"form-group row\">\n      <label for=\"emailField\" class=\"col-sm-2 col-form-label\">Email </label>\n      <div class=\"col-sm-6 col-xs-6\">\n        <input type=\"email\" class=\"form-control\" [(ngModel)]=user.email\n        id=\"emailField\" placeholder=\"alice@wonderland.com\"/>\n      </div>\n    </div>\n\n    <div class=\"form-group row\">\n      <label for=\"roleSelector\" class=\"col-sm-2 col-form-label\">Role </label>\n      <div class=\"col-sm-6 col-xs-6\">\n        <select class=\"form-control\" id=\"roleSelector\"  [(ngModel)]=user.role [value]=user.role readonly disabled>\n        <option value=\"STUDENT\">Student</option>\n        </select>\n      </div>\n    </div>\n\n    <div class=\"form-group row\">\n      <label class=\"col-sm-2 col-form-label\"></label>\n      <div class=\"col-sm-6 col-xs-6\">\n        <button id=\"courseGrid\"\n                class=\"btn btn-primary btn-block btn-info \"\n                role=\"button\" (click)=navigateToCourses()>Navigate to Courses</button>\n      </div>\n    </div>\n\n    <div class=\"form-group row\">\n      <label class=\"col-sm-2 col-form-label\"></label>\n      <div class=\"col-sm-6 col-xs-6\">\n        <button class=\"btn btn-primary btn-block btn-success text-white\"\n                role=\"button\" (click)=updateStudent()>Update</button>\n      </div>\n    </div>\n\n\n    <div class=\"form-group row\">\n      <label class=\"col-sm-2 col-form-label\"></label>\n      <div class=\"col-sm-6 col-xs-6\">\n        <button id=\"logoutButton\"\n                class=\"btn btn-primary btn-block btn-danger \"\n                role=\"button\" (click)=logout()>Logout</button>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/profile/profile.component.ts":
/*!**********************************************!*\
  !*** ./src/app/profile/profile.component.ts ***!
  \**********************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_user_service_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/user.service.client */ "./src/services/user.service.client.ts");




var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(router, service) {
        this.router = router;
        this.service = service;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service
            .getProfile()
            .then(function (user) { _this.user = user; });
    };
    ProfileComponent.prototype.logout = function () {
        var _this = this;
        this.service.logoutUser(this.user)
            .then(function () {
            return _this.router.navigate(['login']);
        });
    };
    ProfileComponent.prototype.navigateToCourses = function () {
        this.router.navigate(['course']);
    };
    ProfileComponent.prototype.updateStudent = function () {
        var _this = this;
        this.service.updateProfile(this.user)
            .then(function (user) { _this.user = user; });
    };
    ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.css */ "./src/app/profile/profile.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_user_service_client__WEBPACK_IMPORTED_MODULE_3__["UserService"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/register/register.component.css":
/*!*************************************************!*\
  !*** ./src/app/register/register.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".wbdv-href{\n    color: #0478ff;\n    border: #0a0406;\n    cursor: pointer;\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGNBQWM7SUFDZCxlQUFlO0lBQ2YsZUFBZTtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud2Jkdi1ocmVme1xuICAgIGNvbG9yOiAjMDQ3OGZmO1xuICAgIGJvcmRlcjogIzBhMDQwNjtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbiJdfQ== */"

/***/ }),

/***/ "./src/app/register/register.component.html":
/*!**************************************************!*\
  !*** ./src/app/register/register.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <a >\n  <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"login()\">\n    <span aria-hidden=\"true\" class=\"font-weight-bold wbdv-time-btn\">&times;</span>\n  </button></a>\n  <h1>Sign Up</h1>\n  <div>\n    <div class=\"form-group row\">\n      <label for=\"username\" class=\"col-sm-2 col-form-label\" >Username </label>\n      <div class=\"col-sm-10\">\n        <input class=\"form-control\"\n               id=\"username\"\n               placeholder=\"Alice\" [(ngModel)]=\"username\"/>\n      </div>\n    </div>\n    <div class=\"form-group row\">\n      <label for=\"password\" class=\"col-sm-2 col-form-label\" >Password </label>\n      <div class=\"col-sm-10\">\n        <input type=\"password\" class=\"form-control wbdv-password-fld\"\n               id=\"password\" placeholder=\"123qwe#$%\" [(ngModel)]=\"pwd1\"/>\n      </div>\n    </div>\n\n    <div class=\"form-group row\">\n      <label for=\"verifyPassword\" class=\"col-sm-2 col-form-label\" >Verify Password </label>\n      <div class=\"col-sm-10\">\n        <input type=\"password\" class=\"form-control wbdv-password-fld\"\n               id=\"verifyPassword\" placeholder=\"123qwe#$%\" [(ngModel)]=\"pwd2\"/>\n      </div>\n    </div>\n\n    <div class=\"form-group row\">\n      <label class=\"col-sm-2 col-form-label\"></label>\n      <div class=\"col-sm-10\">\n        <a  class=\"btn btn-primary btn-block text-white\"\n            role=\"button\" (click)=\"register()\">Sign Up</a>\n        <div class=\"row\">\n          <div class=\"col-6 wbdv-href\">\n              <a class=\"wbdv-href\" (click)=\"login()\">Login</a>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/register/register.component.ts":
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_user_service_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/user.service.client */ "./src/services/user.service.client.ts");




var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(router, service) {
        this.router = router;
        this.service = service;
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.login = function () {
        this.router.navigate(['login']);
    };
    RegisterComponent.prototype.register = function () {
        var _this = this;
        if (this.pwd1 === this.pwd2) {
            var newUser = {
                username: this.username,
                password: this.pwd1,
                role: "STUDENT"
            };
            this.service.registerUser(newUser)
                .then(function (user) {
                if (user.status != 500) {
                    if (user.username === "duplicate_777") {
                        alert("User Already Exists!!");
                    }
                    else {
                        _this.router.navigate(['profile']);
                    }
                }
                else {
                    console.log("Reg return", user);
                    alert("Server Error!!");
                }
            });
        }
        else {
            alert("Passwords don't match");
        }
    };
    RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/register/register.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_user_service_client__WEBPACK_IMPORTED_MODULE_3__["UserService"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/topic-pills/topic-pills.component.css":
/*!*******************************************************!*\
  !*** ./src/app/topic-pills/topic-pills.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "html, body{\n    height:  100%;\n    width: auto !important;\n    min-width: 250px;\n\n}\n\n.wbdv-modAct{\n    background: #0d47a1;\n    color: #0d47a1;\n}\n\n.wbdv-modAct:active{\n    background: #0d47a1;\n    color: #0d47a1;\n}\n\n.wbdv-height-row-sqave{\n    height: 20px;\n}\n\n.wbdv-align-text{\n    font-size:4vw;\n}\n\ndiv.col-4.bg-dark{\n    -webkit-column-fill: inherit;\n            column-fill: inherit;\n    height: 100%;\n}\n\n.container-fluid{\n\n}\n\n.container {\n\n    width: 100%;\n    height: 100%;\n\n}\n\n#mainCourseEdFld{\n    min-width: 250px;\n}\n\n.fa-toggle-on{\n    color: #0a0406;\n}\n\ndiv.row{\n    height: 100%;\n    width: 100%;\n\n}\n\n.row{\n    height: 100%;\n\n}\n\n#CrossFld{\n    margin-right: 4px;\n    padding: 4px;\n    color: white;\n}\n\n#TopPlusFld{\n    color: #FFFFFF;\n    padding: auto;\n    align-self: center;\n    align-content: center;\n    margin-top: 0.6em;\n    margin: auto;\n\n\n}\n\n.wbdv-Cust-Bord{\n    border: #383c3f;\n    background: #0a0406;\n    border-radius: 5px;\n}\n\n#DarkBgFld{\n    background: #0a0406;\n    height: 100%;\n\n}\n\n.wbdv-Full{\n    overflow: hidden;\n}\n\n.wbdv-SideCol{\n    color: #FFFFFF;\n}\n\ndiv#DarkBgFld.col-2.bg-dark{\n    background: #0a0406;\n}\n\n::-webkit-scrollbar {\n    display: none;\n    overflow: hidden;\n}\n\n#ActFld{\n    background: #4790e3\n}\n\n#TopicPlusFld{\n    color: #FFFFFF;\n}\n\n.wbdv-Topic-Bg-Color{\n    background: #7a7a7a;\n    margin-right: 0.5em;\n    color: #FFFFFF;\n}\n\n.wbdv-Topic-Bg-Color:hover{\n    background: #383c3f;\n}\n\n.wbdv-Topic-Bg-Color:active{\n    background: #383c3f;\n}\n\n.wbdv-lesson-tabs{\n    background: #262627;\n    margin-left: 4px;\n}\n\n.wbdv-lesson-tabs:hover{\n    background: #0a0406;\n}\n\n@media (max-width: 200px) {\n    .wbdv-lesson-tabs{\n        margin: 0;\n        padding: 0;\n    }\n\n\n}\n\n.wbdv-module-buttons{\n    border-style: outset;\n    border-radius: 20%;\n\n}\n\n.wbdv-module-buttons:hover{\n    background: #0d47a1;\n    background-color: #0d47a1;\n    color: #0d47a1;\n\n}\n\n.wbdv-module-buttons:active{\n    background: #0d47a1;\n    background-color: #0d47a1;\n    color: #0d47a1;\n\n}\n\n.wbdv-module-buttons:active{\n    background: #0d47a1;\n    background-color: #0d47a1;\n    color: #0d47a1;\n}\n\n#activeBgTopic{\n    background: #444444;\n}\n\n.wbdv-x-pad{\n    margin-left: 1em;\n\n}\n\n.wbdv-module-X{\n    color: #FFFFFF;\n    margin-top: 1em;\n    overflow: hidden;\n}\n\n.wbdv-btn{\n    margin-left: 1em;\n    margin-right: 0;\n}\n\n.wbdv-margin-bord{\n    border: #383c3f;\n\n    border-width: 5px;\n    margin: 1em;\n    padding: 1em;\n}\n\n/* This was taken W3 Schools (Providing reference as asked by professor*/\n\n.switch {\n    /*    position: relative;*/\n    display: inline-block;\n    width: 40px;\n    height: 25px;\n}\n\n.switch input {\n    opacity: 0;\n    width: 0;\n    height: 0;\n}\n\n.slider {\n    /*  position: absolute;*/\n    cursor: pointer;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    background-color: #ccc;\n    transition: .4s;\n}\n\n.slider:before {\n    /* position: absolute;*/\n    content: \"\";\n    height: 18px;\n    width: 16px;\n    left: 4px;\n    bottom: 4px;\n    background-color: white;\n    transition: .4s;\n}\n\ninput:checked + .slider {\n    background-color: #2196F3;\n}\n\ninput:focus + .slider {\n    box-shadow: 0 0 1px #2196F3;\n}\n\ninput:checked + .slider:before {\n    -webkit-transform: translateX(26px);\n    transform: translateX(26px);\n}\n\n.slider.round {\n    border-radius: 34px;\n}\n\n.slider.round:before {\n    border-radius: 50%;\n}\n\n#UpMarginFld{\n    margin-top: 1em;\n}\n\n#customrowFld {\n    height: 100%;\n    padding-bottom: 1000%;\n\n\n    overflow-y: hidden;\n}\n\n@media (max-width: 600px) {\n    #DarkBgFld{\n        padding: 0;\n        margin: 0;\n    }\n    .wbdv-fnt-fld-side{\n        font-size: 10px;\n    }\n\n    div.btn-group.nav-link.active{\n        padding: 0;\n        margin: 0;\n    }\n    .wbdv-remove-lef-right-pm{\n        padding-left: 0;\n        padding-right: 0;\n        margin-left: 0;\n        margin-right: 0;\n    }\n\n\n}\n\n.wbdv-modulelist-button-fa{\n    color: white;\n}\n\n.fa-check{\n    color: green;\n}\n\n.wbdv-font{\n    font-size: 2vw;\n}\n\n.wbdv-btn-widget{\n    font-size: 1vw;\n}\n\n.wbdv-this-scroll-test{\n    overflow-y: scroll;\n\n}\n\n.wbdv-active{\n    background: #0d47a1;\n    color: #0d47a1;\n}\n\n.wbdv-lesson-active{\n    background: #0a0406;\n}\n\n.wbdv-topic-active{\n    background: #383c3f;\n}\n\n.fa-sign-out{\n    color: white;\n}\n\n.fa-user{\n    color: white;\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdG9waWMtcGlsbHMvdG9waWMtcGlsbHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsZ0JBQWdCOztBQUVwQjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixjQUFjO0FBQ2xCOztBQUNBO0lBQ0ksbUJBQW1CO0lBQ25CLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUNBO0lBQ0ksYUFBYTtBQUNqQjs7QUFDQTtJQUNJLDRCQUFvQjtZQUFwQixvQkFBb0I7SUFDcEIsWUFBWTtBQUNoQjs7QUFFQTs7QUFFQTs7QUFFQTs7SUFFSSxXQUFXO0lBQ1gsWUFBWTs7QUFFaEI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUNBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7O0FBRWY7O0FBQ0E7SUFDSSxZQUFZOztBQUVoQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQixpQkFBaUI7SUFDakIsWUFBWTs7O0FBR2hCOztBQUdBO0lBQ0ksZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsWUFBWTs7QUFFaEI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJO0FBQ0o7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUdBO0lBQ0ksbUJBQW1CO0lBQ25CLGdCQUFnQjtBQUNwQjs7QUFJQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJO1FBQ0ksU0FBUztRQUNULFVBQVU7SUFDZDs7O0FBR0o7O0FBRUE7SUFDSSxvQkFBb0I7SUFDcEIsa0JBQWtCOztBQUV0Qjs7QUFDQTtJQUNJLG1CQUFtQjtJQUNuQix5QkFBeUI7SUFDekIsY0FBYzs7QUFFbEI7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIseUJBQXlCO0lBQ3pCLGNBQWM7O0FBRWxCOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLHlCQUF5QjtJQUN6QixjQUFjO0FBQ2xCOztBQUlBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksZ0JBQWdCOztBQUVwQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxlQUFlO0lBQ2YsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxlQUFlOztJQUVmLGlCQUFpQjtJQUNqQixXQUFXO0lBQ1gsWUFBWTtBQUNoQjs7QUFFQSx3RUFBd0U7O0FBQ3hFO0lBQ0ksMEJBQTBCO0lBQzFCLHFCQUFxQjtJQUNyQixXQUFXO0lBQ1gsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFVBQVU7SUFDVixRQUFRO0lBQ1IsU0FBUztBQUNiOztBQUVBO0lBQ0ksd0JBQXdCO0lBQ3hCLGVBQWU7SUFDZixNQUFNO0lBQ04sT0FBTztJQUNQLFFBQVE7SUFDUixTQUFTO0lBQ1Qsc0JBQXNCO0lBRXRCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsV0FBVztJQUNYLFlBQVk7SUFDWixXQUFXO0lBQ1gsU0FBUztJQUNULFdBQVc7SUFDWCx1QkFBdUI7SUFFdkIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLG1DQUFtQztJQUVuQywyQkFBMkI7QUFDL0I7O0FBR0E7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBSUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksWUFBWTtJQUNaLHFCQUFxQjs7O0lBR3JCLGtCQUFrQjtBQUN0Qjs7QUFHQTtJQUNJO1FBQ0ksVUFBVTtRQUNWLFNBQVM7SUFDYjtJQUNBO1FBQ0ksZUFBZTtJQUNuQjs7SUFFQTtRQUNJLFVBQVU7UUFDVixTQUFTO0lBQ2I7SUFDQTtRQUNJLGVBQWU7UUFDZixnQkFBZ0I7UUFDaEIsY0FBYztRQUNkLGVBQWU7SUFDbkI7OztBQUdKOztBQUdBO0lBQ0ksWUFBWTtBQUNoQjs7QUFJQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUdBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLGtCQUFrQjs7QUFFdEI7O0FBQ0E7SUFDSSxtQkFBbUI7SUFDbkIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvdG9waWMtcGlsbHMvdG9waWMtcGlsbHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImh0bWwsIGJvZHl7XG4gICAgaGVpZ2h0OiAgMTAwJTtcbiAgICB3aWR0aDogYXV0byAhaW1wb3J0YW50O1xuICAgIG1pbi13aWR0aDogMjUwcHg7XG5cbn1cblxuLndiZHYtbW9kQWN0e1xuICAgIGJhY2tncm91bmQ6ICMwZDQ3YTE7XG4gICAgY29sb3I6ICMwZDQ3YTE7XG59XG4ud2Jkdi1tb2RBY3Q6YWN0aXZle1xuICAgIGJhY2tncm91bmQ6ICMwZDQ3YTE7XG4gICAgY29sb3I6ICMwZDQ3YTE7XG59XG5cbi53YmR2LWhlaWdodC1yb3ctc3FhdmV7XG4gICAgaGVpZ2h0OiAyMHB4O1xufVxuLndiZHYtYWxpZ24tdGV4dHtcbiAgICBmb250LXNpemU6NHZ3O1xufVxuZGl2LmNvbC00LmJnLWRhcmt7XG4gICAgY29sdW1uLWZpbGw6IGluaGVyaXQ7XG4gICAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uY29udGFpbmVyLWZsdWlke1xuXG59XG5cbi5jb250YWluZXIge1xuXG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuXG59XG5cbiNtYWluQ291cnNlRWRGbGR7XG4gICAgbWluLXdpZHRoOiAyNTBweDtcbn1cblxuLmZhLXRvZ2dsZS1vbntcbiAgICBjb2xvcjogIzBhMDQwNjtcbn1cbmRpdi5yb3d7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuXG59XG4ucm93e1xuICAgIGhlaWdodDogMTAwJTtcblxufVxuXG4jQ3Jvc3NGbGR7XG4gICAgbWFyZ2luLXJpZ2h0OiA0cHg7XG4gICAgcGFkZGluZzogNHB4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cblxuI1RvcFBsdXNGbGR7XG4gICAgY29sb3I6ICNGRkZGRkY7XG4gICAgcGFkZGluZzogYXV0bztcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICAgIG1hcmdpbi10b3A6IDAuNmVtO1xuICAgIG1hcmdpbjogYXV0bztcblxuXG59XG5cblxuLndiZHYtQ3VzdC1Cb3Jke1xuICAgIGJvcmRlcjogIzM4M2MzZjtcbiAgICBiYWNrZ3JvdW5kOiAjMGEwNDA2O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuI0RhcmtCZ0ZsZHtcbiAgICBiYWNrZ3JvdW5kOiAjMGEwNDA2O1xuICAgIGhlaWdodDogMTAwJTtcblxufVxuXG4ud2Jkdi1GdWxse1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi53YmR2LVNpZGVDb2x7XG4gICAgY29sb3I6ICNGRkZGRkY7XG59XG5cbmRpdiNEYXJrQmdGbGQuY29sLTIuYmctZGFya3tcbiAgICBiYWNrZ3JvdW5kOiAjMGEwNDA2O1xufVxuXG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbiNBY3RGbGR7XG4gICAgYmFja2dyb3VuZDogIzQ3OTBlM1xufVxuXG4jVG9waWNQbHVzRmxke1xuICAgIGNvbG9yOiAjRkZGRkZGO1xufVxuXG4ud2Jkdi1Ub3BpYy1CZy1Db2xvcntcbiAgICBiYWNrZ3JvdW5kOiAjN2E3YTdhO1xuICAgIG1hcmdpbi1yaWdodDogMC41ZW07XG4gICAgY29sb3I6ICNGRkZGRkY7XG59XG5cbi53YmR2LVRvcGljLUJnLUNvbG9yOmhvdmVye1xuICAgIGJhY2tncm91bmQ6ICMzODNjM2Y7XG59XG5cbi53YmR2LVRvcGljLUJnLUNvbG9yOmFjdGl2ZXtcbiAgICBiYWNrZ3JvdW5kOiAjMzgzYzNmO1xufVxuXG5cbi53YmR2LWxlc3Nvbi10YWJze1xuICAgIGJhY2tncm91bmQ6ICMyNjI2Mjc7XG4gICAgbWFyZ2luLWxlZnQ6IDRweDtcbn1cblxuXG5cbi53YmR2LWxlc3Nvbi10YWJzOmhvdmVye1xuICAgIGJhY2tncm91bmQ6ICMwYTA0MDY7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiAyMDBweCkge1xuICAgIC53YmR2LWxlc3Nvbi10YWJze1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgfVxuXG5cbn1cblxuLndiZHYtbW9kdWxlLWJ1dHRvbnN7XG4gICAgYm9yZGVyLXN0eWxlOiBvdXRzZXQ7XG4gICAgYm9yZGVyLXJhZGl1czogMjAlO1xuXG59XG4ud2Jkdi1tb2R1bGUtYnV0dG9uczpob3ZlcntcbiAgICBiYWNrZ3JvdW5kOiAjMGQ0N2ExO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwZDQ3YTE7XG4gICAgY29sb3I6ICMwZDQ3YTE7XG5cbn1cblxuLndiZHYtbW9kdWxlLWJ1dHRvbnM6YWN0aXZle1xuICAgIGJhY2tncm91bmQ6ICMwZDQ3YTE7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzBkNDdhMTtcbiAgICBjb2xvcjogIzBkNDdhMTtcblxufVxuXG4ud2Jkdi1tb2R1bGUtYnV0dG9uczphY3RpdmV7XG4gICAgYmFja2dyb3VuZDogIzBkNDdhMTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGQ0N2ExO1xuICAgIGNvbG9yOiAjMGQ0N2ExO1xufVxuXG5cblxuI2FjdGl2ZUJnVG9waWN7XG4gICAgYmFja2dyb3VuZDogIzQ0NDQ0NDtcbn1cblxuLndiZHYteC1wYWR7XG4gICAgbWFyZ2luLWxlZnQ6IDFlbTtcblxufVxuXG4ud2Jkdi1tb2R1bGUtWHtcbiAgICBjb2xvcjogI0ZGRkZGRjtcbiAgICBtYXJnaW4tdG9wOiAxZW07XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLndiZHYtYnRue1xuICAgIG1hcmdpbi1sZWZ0OiAxZW07XG4gICAgbWFyZ2luLXJpZ2h0OiAwO1xufVxuXG4ud2Jkdi1tYXJnaW4tYm9yZHtcbiAgICBib3JkZXI6ICMzODNjM2Y7XG5cbiAgICBib3JkZXItd2lkdGg6IDVweDtcbiAgICBtYXJnaW46IDFlbTtcbiAgICBwYWRkaW5nOiAxZW07XG59XG5cbi8qIFRoaXMgd2FzIHRha2VuIFczIFNjaG9vbHMgKFByb3ZpZGluZyByZWZlcmVuY2UgYXMgYXNrZWQgYnkgcHJvZmVzc29yKi9cbi5zd2l0Y2gge1xuICAgIC8qICAgIHBvc2l0aW9uOiByZWxhdGl2ZTsqL1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB3aWR0aDogNDBweDtcbiAgICBoZWlnaHQ6IDI1cHg7XG59XG5cbi5zd2l0Y2ggaW5wdXQge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgd2lkdGg6IDA7XG4gICAgaGVpZ2h0OiAwO1xufVxuXG4uc2xpZGVyIHtcbiAgICAvKiAgcG9zaXRpb246IGFic29sdXRlOyovXG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjO1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogLjRzO1xuICAgIHRyYW5zaXRpb246IC40cztcbn1cblxuLnNsaWRlcjpiZWZvcmUge1xuICAgIC8qIHBvc2l0aW9uOiBhYnNvbHV0ZTsqL1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgaGVpZ2h0OiAxOHB4O1xuICAgIHdpZHRoOiAxNnB4O1xuICAgIGxlZnQ6IDRweDtcbiAgICBib3R0b206IDRweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IC40cztcbiAgICB0cmFuc2l0aW9uOiAuNHM7XG59XG5cbmlucHV0OmNoZWNrZWQgKyAuc2xpZGVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjE5NkYzO1xufVxuXG5pbnB1dDpmb2N1cyArIC5zbGlkZXIge1xuICAgIGJveC1zaGFkb3c6IDAgMCAxcHggIzIxOTZGMztcbn1cblxuaW5wdXQ6Y2hlY2tlZCArIC5zbGlkZXI6YmVmb3JlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgyNnB4KTtcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDI2cHgpO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgyNnB4KTtcbn1cblxuXG4uc2xpZGVyLnJvdW5kIHtcbiAgICBib3JkZXItcmFkaXVzOiAzNHB4O1xufVxuXG4uc2xpZGVyLnJvdW5kOmJlZm9yZSB7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuXG5cblxuI1VwTWFyZ2luRmxke1xuICAgIG1hcmdpbi10b3A6IDFlbTtcbn1cblxuI2N1c3RvbXJvd0ZsZCB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHBhZGRpbmctYm90dG9tOiAxMDAwJTtcblxuXG4gICAgb3ZlcmZsb3cteTogaGlkZGVuO1xufVxuXG5cbkBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xuICAgICNEYXJrQmdGbGR7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICB9XG4gICAgLndiZHYtZm50LWZsZC1zaWRle1xuICAgICAgICBmb250LXNpemU6IDEwcHg7XG4gICAgfVxuXG4gICAgZGl2LmJ0bi1ncm91cC5uYXYtbGluay5hY3RpdmV7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICB9XG4gICAgLndiZHYtcmVtb3ZlLWxlZi1yaWdodC1wbXtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAwO1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAwO1xuICAgICAgICBtYXJnaW4tbGVmdDogMDtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xuICAgIH1cblxuXG59XG5cblxuLndiZHYtbW9kdWxlbGlzdC1idXR0b24tZmF7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuXG5cblxuLmZhLWNoZWNre1xuICAgIGNvbG9yOiBncmVlbjtcbn1cblxuLndiZHYtZm9udHtcbiAgICBmb250LXNpemU6IDJ2dztcbn1cblxuXG4ud2Jkdi1idG4td2lkZ2V0e1xuICAgIGZvbnQtc2l6ZTogMXZ3O1xufVxuXG4ud2Jkdi10aGlzLXNjcm9sbC10ZXN0e1xuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcblxufVxuLndiZHYtYWN0aXZle1xuICAgIGJhY2tncm91bmQ6ICMwZDQ3YTE7XG4gICAgY29sb3I6ICMwZDQ3YTE7XG59XG5cbi53YmR2LWxlc3Nvbi1hY3RpdmV7XG4gICAgYmFja2dyb3VuZDogIzBhMDQwNjtcbn1cblxuLndiZHYtdG9waWMtYWN0aXZle1xuICAgIGJhY2tncm91bmQ6ICMzODNjM2Y7XG59XG5cbi5mYS1zaWduLW91dHtcbiAgICBjb2xvcjogd2hpdGU7XG59XG5cbi5mYS11c2Vye1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cblxuIl19 */"

/***/ }),

/***/ "./src/app/topic-pills/topic-pills.component.html":
/*!********************************************************!*\
  !*** ./src/app/topic-pills/topic-pills.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div >\n  <ul class=\"nav nav-pills\">\n    <li class=\"nav-item wbdv-Topic-Bg-Color row ml-2 mt-2 btn-secondary\" *ngFor=\"let topic of topics\"\n        routerLink=\"/course/{{courseId}}/module/{{moduleId}}/lesson/{{lessonId}}/topic/{{topic.id}}\">\n        <i class=\"btn-group nav-link text-white wbdv-fnt-fld-side\" [ngClass]=\"{'wbdv-modAct':( topic.id == topicId)}\">{{topic.title}}</i>\n    </li>\n    <li class=\"nav-item wbdv-Topic-Bg-Color ml-3 mt-2\">\n    </li>\n  </ul>\n  <br/>\n</div>\n"

/***/ }),

/***/ "./src/app/topic-pills/topic-pills.component.ts":
/*!******************************************************!*\
  !*** ./src/app/topic-pills/topic-pills.component.ts ***!
  \******************************************************/
/*! exports provided: TopicPillsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopicPillsComponent", function() { return TopicPillsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_topic_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/topic.service.client */ "./src/services/topic.service.client.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var TopicPillsComponent = /** @class */ (function () {
    function TopicPillsComponent(service, activatedRoute) {
        var _this = this;
        this.service = service;
        this.activatedRoute = activatedRoute;
        this.courses = [];
        this.modules = [];
        this.lessons = [];
        this.topics = [];
        this.selectedTopicFun = function (topicId) {
            _this.selectedTopic = topicId;
        };
        this.activatedRoute.params.subscribe(function (params) { return _this.setParams(params); });
    }
    TopicPillsComponent.prototype.setParams = function (params) {
        this.courseId = params.courseId;
        this.moduleId = params.moduleId;
        this.lessonId = params.lessonId;
        this.topicId = params.topicId;
        this.findTopics(this.lessonId);
    };
    TopicPillsComponent.prototype.findTopics = function (lesId) {
        var _this = this;
        this.service.findAllTopics(lesId)
            .then(function (topics) { return _this.topics = topics; });
    };
    TopicPillsComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], TopicPillsComponent.prototype, "parentTopicId", void 0);
    TopicPillsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-topic-pills',
            template: __webpack_require__(/*! ./topic-pills.component.html */ "./src/app/topic-pills/topic-pills.component.html"),
            styles: [__webpack_require__(/*! ./topic-pills.component.css */ "./src/app/topic-pills/topic-pills.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_topic_service_client__WEBPACK_IMPORTED_MODULE_2__["TopicService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], TopicPillsComponent);
    return TopicPillsComponent;
}());



/***/ }),

/***/ "./src/app/widget-list/widget-list.component.css":
/*!*******************************************************!*\
  !*** ./src/app/widget-list/widget-list.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "html, body{\n    height:  100%;\n    width: auto !important;\n    min-width: 250px;\n\n\n\n\n}\n.wbdv-height-row-sqave{\n    height: 20px;\n}\n.wbdv-align-text{\n    font-size:4vw;\n}\ndiv.col-4.bg-dark{\n    -webkit-column-fill: inherit;\n            column-fill: inherit;\n    height: 100%;\n}\n.container-fluid{\n\n}\n.container {\n\n    width: 100%;\n    height: 100%;\n\n}\n#mainCourseEdFld{\n    min-width: 250px;\n}\n.fa-toggle-on{\n    color: #0a0406;\n}\ndiv.row{\n    height: 100%;\n    width: 100%;\n\n}\n.row{\n    height: 100%;\n\n}\n#CrossFld{\n    margin-right: 4px;\n    padding: 4px;\n    color: white;\n}\n#TopPlusFld{\n    color: #FFFFFF;\n    padding: auto;\n    align-self: center;\n    align-content: center;\n    margin-top: 0.6em;\n    margin: auto;\n\n\n}\n.wbdv-Cust-Bord{\n    border: #383c3f;\n    background: #0a0406;\n    border-radius: 5px;\n}\n#DarkBgFld{\n    background: #0a0406;\n    height: 100%;\n\n}\n.wbdv-Full{\n    overflow: hidden;\n}\n.wbdv-SideCol{\n    color: #FFFFFF;\n}\ndiv#DarkBgFld.col-2.bg-dark{\n    background: #0a0406;\n}\n::-webkit-scrollbar {\n    display: none;\n    overflow: hidden;\n}\n#ActFld{\n    background: #4790e3\n}\n#TopicPlusFld{\n    color: #FFFFFF;\n}\n.wbdv-Topic-Bg-Color{\n    background: #7a7a7a;\n    margin-right: 0.5em;\n    color: #FFFFFF;\n}\n.wbdv-Topic-Bg-Color:hover{\n    background: #383c3f;\n}\n.wbdv-Topic-Bg-Color:active{\n    background: #383c3f;\n}\n.wbdv-lesson-tabs{\n    background: #262627;\n    margin-left: 4px;\n}\n.wbdv-lesson-tabs:hover{\n    background: #0a0406;\n}\n@media (max-width: 200px) {\n    .wbdv-lesson-tabs{\n        margin: 0;\n        padding: 0;\n    }\n\n\n}\n.wbdv-module-buttons{\n    border-style: outset;\n    border-radius: 20%;\n\n}\n.wbdv-module-buttons:hover{\n    background: #0d47a1;\n    background-color: #0d47a1;\n    color: #0d47a1;\n\n}\n.wbdv-module-buttons:active{\n    background: #0d47a1;\n    background-color: #0d47a1;\n    color: #0d47a1;\n\n}\n.wbdv-module-buttons:active{\n    background: #0d47a1;\n    background-color: #0d47a1;\n    color: #0d47a1;\n}\n#activeBgTopic{\n    background: #444444;\n}\n.wbdv-x-pad{\n    margin-left: 1em;\n\n}\n.wbdv-module-X{\n    color: #FFFFFF;\n    margin-top: 1em;\n    overflow: hidden;\n}\n.wbdv-btn{\n    margin-left: 1em;\n    margin-right: 0;\n}\n.wbdv-margin-bord{\n    border: #383c3f;\n\n    border-width: 5px;\n    margin: 1em;\n    padding: 1em;\n}\n/* This was taken W3 Schools (Providing reference as asked by professor*/\n.switch {\n    /*    position: relative;*/\n    display: inline-block;\n    width: 40px;\n    height: 25px;\n}\n.switch input {\n    opacity: 0;\n    width: 0;\n    height: 0;\n}\n.slider {\n    /*  position: absolute;*/\n    cursor: pointer;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    background-color: #ccc;\n    transition: .4s;\n}\n.slider:before {\n    /* position: absolute;*/\n    content: \"\";\n    height: 18px;\n    width: 16px;\n    left: 4px;\n    bottom: 4px;\n    background-color: white;\n    transition: .4s;\n}\ninput:checked + .slider {\n    background-color: #2196F3;\n}\ninput:focus + .slider {\n    box-shadow: 0 0 1px #2196F3;\n}\ninput:checked + .slider:before {\n    -webkit-transform: translateX(26px);\n    transform: translateX(26px);\n}\n.slider.round {\n    border-radius: 34px;\n}\n.slider.round:before {\n    border-radius: 50%;\n}\n#UpMarginFld{\n    margin-top: 1em;\n}\n#customrowFld {\n    height: 100%;\n    padding-bottom: 1000%;\n\n\n    overflow-y: hidden;\n}\n@media (max-width: 600px) {\n    #DarkBgFld{\n        padding: 0;\n        margin: 0;\n    }\n    .wbdv-fnt-fld-side{\n        font-size: 10px;\n    }\n\n    div.btn-group.nav-link.active{\n        padding: 0;\n        margin: 0;\n    }\n    .wbdv-remove-lef-right-pm{\n        padding-left: 0;\n        padding-right: 0;\n        margin-left: 0;\n        margin-right: 0;\n    }\n\n\n}\n.wbdv-modulelist-button-fa{\n    color: white;\n}\n.fa-check{\n    color: green;\n}\n.wbdv-font{\n    font-size: 2vw;\n}\n.wbdv-btn-widget{\n    font-size: 1vw;\n}\n.wbdv-this-scroll-test{\n    overflow-y: scroll;\n\n}\n.wbdv-active{\n    background: #0d47a1;\n    color: #0d47a1;\n}\n.wbdv-lesson-active{\n    background: #0a0406;\n}\n.wbdv-topic-active{\n    background: #383c3f;\n}\n.fa-sign-out{\n    color: white;\n}\n.fa-user{\n    color: white;\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2lkZ2V0LWxpc3Qvd2lkZ2V0LWxpc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsZ0JBQWdCOzs7OztBQUtwQjtBQUNBO0lBQ0ksWUFBWTtBQUNoQjtBQUNBO0lBQ0ksYUFBYTtBQUNqQjtBQUNBO0lBQ0ksNEJBQW9CO1lBQXBCLG9CQUFvQjtJQUNwQixZQUFZO0FBQ2hCO0FBRUE7O0FBRUE7QUFFQTs7SUFFSSxXQUFXO0lBQ1gsWUFBWTs7QUFFaEI7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjtBQUVBO0lBQ0ksY0FBYztBQUNsQjtBQUNBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7O0FBRWY7QUFDQTtJQUNJLFlBQVk7O0FBRWhCO0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsWUFBWTtJQUNaLFlBQVk7QUFDaEI7QUFFQTtJQUNJLGNBQWM7SUFDZCxhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQixpQkFBaUI7SUFDakIsWUFBWTs7O0FBR2hCO0FBR0E7SUFDSSxlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLGtCQUFrQjtBQUN0QjtBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLFlBQVk7O0FBRWhCO0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7QUFFQTtJQUNJLGNBQWM7QUFDbEI7QUFFQTtJQUNJLG1CQUFtQjtBQUN2QjtBQUVBO0lBQ0ksYUFBYTtJQUNiLGdCQUFnQjtBQUNwQjtBQUVBO0lBQ0k7QUFDSjtBQUVBO0lBQ0ksY0FBYztBQUNsQjtBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixjQUFjO0FBQ2xCO0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7QUFFQTtJQUNJLG1CQUFtQjtBQUN2QjtBQUdBO0lBQ0ksbUJBQW1CO0lBQ25CLGdCQUFnQjtBQUNwQjtBQUlBO0lBQ0ksbUJBQW1CO0FBQ3ZCO0FBRUE7SUFDSTtRQUNJLFNBQVM7UUFDVCxVQUFVO0lBQ2Q7OztBQUdKO0FBRUE7SUFDSSxvQkFBb0I7SUFDcEIsa0JBQWtCOztBQUV0QjtBQUNBO0lBQ0ksbUJBQW1CO0lBQ25CLHlCQUF5QjtJQUN6QixjQUFjOztBQUVsQjtBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLHlCQUF5QjtJQUN6QixjQUFjOztBQUVsQjtBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLHlCQUF5QjtJQUN6QixjQUFjO0FBQ2xCO0FBSUE7SUFDSSxtQkFBbUI7QUFDdkI7QUFFQTtJQUNJLGdCQUFnQjs7QUFFcEI7QUFFQTtJQUNJLGNBQWM7SUFDZCxlQUFlO0lBQ2YsZ0JBQWdCO0FBQ3BCO0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsZUFBZTtBQUNuQjtBQUVBO0lBQ0ksZUFBZTs7SUFFZixpQkFBaUI7SUFDakIsV0FBVztJQUNYLFlBQVk7QUFDaEI7QUFFQSx3RUFBd0U7QUFDeEU7SUFDSSwwQkFBMEI7SUFDMUIscUJBQXFCO0lBQ3JCLFdBQVc7SUFDWCxZQUFZO0FBQ2hCO0FBRUE7SUFDSSxVQUFVO0lBQ1YsUUFBUTtJQUNSLFNBQVM7QUFDYjtBQUVBO0lBQ0ksd0JBQXdCO0lBQ3hCLGVBQWU7SUFDZixNQUFNO0lBQ04sT0FBTztJQUNQLFFBQVE7SUFDUixTQUFTO0lBQ1Qsc0JBQXNCO0lBRXRCLGVBQWU7QUFDbkI7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixXQUFXO0lBQ1gsWUFBWTtJQUNaLFdBQVc7SUFDWCxTQUFTO0lBQ1QsV0FBVztJQUNYLHVCQUF1QjtJQUV2QixlQUFlO0FBQ25CO0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7QUFFQTtJQUNJLDJCQUEyQjtBQUMvQjtBQUVBO0lBQ0ksbUNBQW1DO0lBRW5DLDJCQUEyQjtBQUMvQjtBQUdBO0lBQ0ksbUJBQW1CO0FBQ3ZCO0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7QUFJQTtJQUNJLGVBQWU7QUFDbkI7QUFFQTtJQUNJLFlBQVk7SUFDWixxQkFBcUI7OztJQUdyQixrQkFBa0I7QUFDdEI7QUFHQTtJQUNJO1FBQ0ksVUFBVTtRQUNWLFNBQVM7SUFDYjtJQUNBO1FBQ0ksZUFBZTtJQUNuQjs7SUFFQTtRQUNJLFVBQVU7UUFDVixTQUFTO0lBQ2I7SUFDQTtRQUNJLGVBQWU7UUFDZixnQkFBZ0I7UUFDaEIsY0FBYztRQUNkLGVBQWU7SUFDbkI7OztBQUdKO0FBR0E7SUFDSSxZQUFZO0FBQ2hCO0FBSUE7SUFDSSxZQUFZO0FBQ2hCO0FBRUE7SUFDSSxjQUFjO0FBQ2xCO0FBR0E7SUFDSSxjQUFjO0FBQ2xCO0FBRUE7SUFDSSxrQkFBa0I7O0FBRXRCO0FBQ0E7SUFDSSxtQkFBbUI7SUFDbkIsY0FBYztBQUNsQjtBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCO0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7QUFFQTtJQUNJLFlBQVk7QUFDaEI7QUFFQTtJQUNJLFlBQVk7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC93aWRnZXQtbGlzdC93aWRnZXQtbGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaHRtbCwgYm9keXtcbiAgICBoZWlnaHQ6ICAxMDAlO1xuICAgIHdpZHRoOiBhdXRvICFpbXBvcnRhbnQ7XG4gICAgbWluLXdpZHRoOiAyNTBweDtcblxuXG5cblxufVxuLndiZHYtaGVpZ2h0LXJvdy1zcWF2ZXtcbiAgICBoZWlnaHQ6IDIwcHg7XG59XG4ud2Jkdi1hbGlnbi10ZXh0e1xuICAgIGZvbnQtc2l6ZTo0dnc7XG59XG5kaXYuY29sLTQuYmctZGFya3tcbiAgICBjb2x1bW4tZmlsbDogaW5oZXJpdDtcbiAgICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5jb250YWluZXItZmx1aWR7XG5cbn1cblxuLmNvbnRhaW5lciB7XG5cbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG5cbn1cblxuI21haW5Db3Vyc2VFZEZsZHtcbiAgICBtaW4td2lkdGg6IDI1MHB4O1xufVxuXG4uZmEtdG9nZ2xlLW9ue1xuICAgIGNvbG9yOiAjMGEwNDA2O1xufVxuZGl2LnJvd3tcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG5cbn1cbi5yb3d7XG4gICAgaGVpZ2h0OiAxMDAlO1xuXG59XG5cbiNDcm9zc0ZsZHtcbiAgICBtYXJnaW4tcmlnaHQ6IDRweDtcbiAgICBwYWRkaW5nOiA0cHg7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuXG4jVG9wUGx1c0ZsZHtcbiAgICBjb2xvcjogI0ZGRkZGRjtcbiAgICBwYWRkaW5nOiBhdXRvO1xuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gICAgbWFyZ2luLXRvcDogMC42ZW07XG4gICAgbWFyZ2luOiBhdXRvO1xuXG5cbn1cblxuXG4ud2Jkdi1DdXN0LUJvcmR7XG4gICAgYm9yZGVyOiAjMzgzYzNmO1xuICAgIGJhY2tncm91bmQ6ICMwYTA0MDY7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG4jRGFya0JnRmxke1xuICAgIGJhY2tncm91bmQ6ICMwYTA0MDY7XG4gICAgaGVpZ2h0OiAxMDAlO1xuXG59XG5cbi53YmR2LUZ1bGx7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLndiZHYtU2lkZUNvbHtcbiAgICBjb2xvcjogI0ZGRkZGRjtcbn1cblxuZGl2I0RhcmtCZ0ZsZC5jb2wtMi5iZy1kYXJre1xuICAgIGJhY2tncm91bmQ6ICMwYTA0MDY7XG59XG5cbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuI0FjdEZsZHtcbiAgICBiYWNrZ3JvdW5kOiAjNDc5MGUzXG59XG5cbiNUb3BpY1BsdXNGbGR7XG4gICAgY29sb3I6ICNGRkZGRkY7XG59XG5cbi53YmR2LVRvcGljLUJnLUNvbG9ye1xuICAgIGJhY2tncm91bmQ6ICM3YTdhN2E7XG4gICAgbWFyZ2luLXJpZ2h0OiAwLjVlbTtcbiAgICBjb2xvcjogI0ZGRkZGRjtcbn1cblxuLndiZHYtVG9waWMtQmctQ29sb3I6aG92ZXJ7XG4gICAgYmFja2dyb3VuZDogIzM4M2MzZjtcbn1cblxuLndiZHYtVG9waWMtQmctQ29sb3I6YWN0aXZle1xuICAgIGJhY2tncm91bmQ6ICMzODNjM2Y7XG59XG5cblxuLndiZHYtbGVzc29uLXRhYnN7XG4gICAgYmFja2dyb3VuZDogIzI2MjYyNztcbiAgICBtYXJnaW4tbGVmdDogNHB4O1xufVxuXG5cblxuLndiZHYtbGVzc29uLXRhYnM6aG92ZXJ7XG4gICAgYmFja2dyb3VuZDogIzBhMDQwNjtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDIwMHB4KSB7XG4gICAgLndiZHYtbGVzc29uLXRhYnN7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICB9XG5cblxufVxuXG4ud2Jkdi1tb2R1bGUtYnV0dG9uc3tcbiAgICBib3JkZXItc3R5bGU6IG91dHNldDtcbiAgICBib3JkZXItcmFkaXVzOiAyMCU7XG5cbn1cbi53YmR2LW1vZHVsZS1idXR0b25zOmhvdmVye1xuICAgIGJhY2tncm91bmQ6ICMwZDQ3YTE7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzBkNDdhMTtcbiAgICBjb2xvcjogIzBkNDdhMTtcblxufVxuXG4ud2Jkdi1tb2R1bGUtYnV0dG9uczphY3RpdmV7XG4gICAgYmFja2dyb3VuZDogIzBkNDdhMTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGQ0N2ExO1xuICAgIGNvbG9yOiAjMGQ0N2ExO1xuXG59XG5cbi53YmR2LW1vZHVsZS1idXR0b25zOmFjdGl2ZXtcbiAgICBiYWNrZ3JvdW5kOiAjMGQ0N2ExO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwZDQ3YTE7XG4gICAgY29sb3I6ICMwZDQ3YTE7XG59XG5cblxuXG4jYWN0aXZlQmdUb3BpY3tcbiAgICBiYWNrZ3JvdW5kOiAjNDQ0NDQ0O1xufVxuXG4ud2Jkdi14LXBhZHtcbiAgICBtYXJnaW4tbGVmdDogMWVtO1xuXG59XG5cbi53YmR2LW1vZHVsZS1Ye1xuICAgIGNvbG9yOiAjRkZGRkZGO1xuICAgIG1hcmdpbi10b3A6IDFlbTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4ud2Jkdi1idG57XG4gICAgbWFyZ2luLWxlZnQ6IDFlbTtcbiAgICBtYXJnaW4tcmlnaHQ6IDA7XG59XG5cbi53YmR2LW1hcmdpbi1ib3Jke1xuICAgIGJvcmRlcjogIzM4M2MzZjtcblxuICAgIGJvcmRlci13aWR0aDogNXB4O1xuICAgIG1hcmdpbjogMWVtO1xuICAgIHBhZGRpbmc6IDFlbTtcbn1cblxuLyogVGhpcyB3YXMgdGFrZW4gVzMgU2Nob29scyAoUHJvdmlkaW5nIHJlZmVyZW5jZSBhcyBhc2tlZCBieSBwcm9mZXNzb3IqL1xuLnN3aXRjaCB7XG4gICAgLyogICAgcG9zaXRpb246IHJlbGF0aXZlOyovXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHdpZHRoOiA0MHB4O1xuICAgIGhlaWdodDogMjVweDtcbn1cblxuLnN3aXRjaCBpbnB1dCB7XG4gICAgb3BhY2l0eTogMDtcbiAgICB3aWR0aDogMDtcbiAgICBoZWlnaHQ6IDA7XG59XG5cbi5zbGlkZXIge1xuICAgIC8qICBwb3NpdGlvbjogYWJzb2x1dGU7Ki9cbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNjY2M7XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiAuNHM7XG4gICAgdHJhbnNpdGlvbjogLjRzO1xufVxuXG4uc2xpZGVyOmJlZm9yZSB7XG4gICAgLyogcG9zaXRpb246IGFic29sdXRlOyovXG4gICAgY29udGVudDogXCJcIjtcbiAgICBoZWlnaHQ6IDE4cHg7XG4gICAgd2lkdGg6IDE2cHg7XG4gICAgbGVmdDogNHB4O1xuICAgIGJvdHRvbTogNHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogLjRzO1xuICAgIHRyYW5zaXRpb246IC40cztcbn1cblxuaW5wdXQ6Y2hlY2tlZCArIC5zbGlkZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMTk2RjM7XG59XG5cbmlucHV0OmZvY3VzICsgLnNsaWRlciB7XG4gICAgYm94LXNoYWRvdzogMCAwIDFweCAjMjE5NkYzO1xufVxuXG5pbnB1dDpjaGVja2VkICsgLnNsaWRlcjpiZWZvcmUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDI2cHgpO1xuICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjZweCk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDI2cHgpO1xufVxuXG5cbi5zbGlkZXIucm91bmQge1xuICAgIGJvcmRlci1yYWRpdXM6IDM0cHg7XG59XG5cbi5zbGlkZXIucm91bmQ6YmVmb3JlIHtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5cblxuXG4jVXBNYXJnaW5GbGR7XG4gICAgbWFyZ2luLXRvcDogMWVtO1xufVxuXG4jY3VzdG9tcm93RmxkIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgcGFkZGluZy1ib3R0b206IDEwMDAlO1xuXG5cbiAgICBvdmVyZmxvdy15OiBoaWRkZW47XG59XG5cblxuQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gICAgI0RhcmtCZ0ZsZHtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgIH1cbiAgICAud2Jkdi1mbnQtZmxkLXNpZGV7XG4gICAgICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICB9XG5cbiAgICBkaXYuYnRuLWdyb3VwLm5hdi1saW5rLmFjdGl2ZXtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgIH1cbiAgICAud2Jkdi1yZW1vdmUtbGVmLXJpZ2h0LXBte1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDA7XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDA7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDA7XG4gICAgfVxuXG5cbn1cblxuXG4ud2Jkdi1tb2R1bGVsaXN0LWJ1dHRvbi1mYXtcbiAgICBjb2xvcjogd2hpdGU7XG59XG5cblxuXG4uZmEtY2hlY2t7XG4gICAgY29sb3I6IGdyZWVuO1xufVxuXG4ud2Jkdi1mb250e1xuICAgIGZvbnQtc2l6ZTogMnZ3O1xufVxuXG5cbi53YmR2LWJ0bi13aWRnZXR7XG4gICAgZm9udC1zaXplOiAxdnc7XG59XG5cbi53YmR2LXRoaXMtc2Nyb2xsLXRlc3R7XG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuXG59XG4ud2Jkdi1hY3RpdmV7XG4gICAgYmFja2dyb3VuZDogIzBkNDdhMTtcbiAgICBjb2xvcjogIzBkNDdhMTtcbn1cblxuLndiZHYtbGVzc29uLWFjdGl2ZXtcbiAgICBiYWNrZ3JvdW5kOiAjMGEwNDA2O1xufVxuXG4ud2Jkdi10b3BpYy1hY3RpdmV7XG4gICAgYmFja2dyb3VuZDogIzM4M2MzZjtcbn1cblxuLmZhLXNpZ24tb3V0e1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmZhLXVzZXJ7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuXG4iXX0= */"

/***/ }),

/***/ "./src/app/widget-list/widget-list.component.html":
/*!********************************************************!*\
  !*** ./src/app/widget-list/widget-list.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"list-group\" *ngFor=\"let widget of widgets\" [ngSwitch]=\"widget.type\" >\n  <div *ngSwitchCase=\"'HEADING'\" routerLink=\"/course/{{courseId}}/module/{{moduleId}}/lesson/{{lessonId}}/topic/{{topicId}}/widget\">\n    <app-heading-widget [Widget]=\"widget\"></app-heading-widget>\n  </div>\n  <div *ngSwitchCase=\"'IMAGE'\" routerLink=\"/course/{{courseId}}/module/{{moduleId}}/lesson/{{lessonId}}/topic/{{topicId}}/widget\">\n    <app-image-widget [Widget]=\"widget\"></app-image-widget>\n  </div>\n  <div *ngSwitchCase=\"'PARAGRAPH'\" routerLink=\"/course/{{courseId}}/module/{{moduleId}}/lesson/{{lessonId}}/topic/{{topicId}}/widget\">\n    <app-paragraph-widget [Widget]=\"widget\" ></app-paragraph-widget>\n  </div>\n  <div *ngSwitchCase=\"'LIST'\" routerLink=\"/course/{{courseId}}/module/{{moduleId}}/lesson/{{lessonId}}/topic/{{topicId}}/widget\">\n    <app-list-widget [Widget]=\"widget\" ></app-list-widget>\n  </div>\n  <div *ngSwitchCase=\"'LINK'\" routerLink=\"/course/{{courseId}}/module/{{moduleId}}/lesson/{{lessonId}}/topic/{{topicId}}/widget\">\n    <app-link-widget [Widget]=\"widget\" ></app-link-widget>\n  </div>\n\n  <div *ngSwitchDefault>\n    No Widgets\n  </div>\n\n\n\n</div>\n"

/***/ }),

/***/ "./src/app/widget-list/widget-list.component.ts":
/*!******************************************************!*\
  !*** ./src/app/widget-list/widget-list.component.ts ***!
  \******************************************************/
/*! exports provided: WidgetListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetListComponent", function() { return WidgetListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_widget_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/widget.service.client */ "./src/services/widget.service.client.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var WidgetListComponent = /** @class */ (function () {
    function WidgetListComponent(service, activatedRoute) {
        var _this = this;
        this.service = service;
        this.activatedRoute = activatedRoute;
        this.courses = [];
        this.modules = [];
        this.lessons = [];
        this.topics = [];
        this.widgets = [];
        this.activatedRoute.params.subscribe(function (params) { return _this.setParams(params); });
    }
    WidgetListComponent.prototype.setParams = function (params) {
        this.courseId = params.courseId;
        this.moduleId = params.moduleId;
        this.lessonId = params.lessonId;
        this.topicId = params.topicId;
        this.findWidgets(this.topicId);
    };
    WidgetListComponent.prototype.findWidgets = function (topicId) {
        var _this = this;
        this.service.findAllWidgets(topicId)
            .then(function (widgets) { return _this.widgets = widgets; });
    };
    WidgetListComponent.prototype.ngOnInit = function () {
    };
    WidgetListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-widget-list',
            template: __webpack_require__(/*! ./widget-list.component.html */ "./src/app/widget-list/widget-list.component.html"),
            styles: [__webpack_require__(/*! ./widget-list.component.css */ "./src/app/widget-list/widget-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_widget_service_client__WEBPACK_IMPORTED_MODULE_2__["WidgetService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], WidgetListComponent);
    return WidgetListComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ "./src/services/course.service.client.ts":
/*!***********************************************!*\
  !*** ./src/services/course.service.client.ts ***!
  \***********************************************/
/*! exports provided: CourseService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseService", function() { return CourseService; });
var COURSE_API_URL = 'https://aqueous-reef-72349.herokuapp.com/api/courses/';
var API_URL = 'https://aqueous-reef-72349.herokuapp.com/api/';
var CourseService = /** @class */ (function () {
    function CourseService() {
        this.findAllCourses = function () {
            console.log("Find all courses", COURSE_API_URL);
            return fetch(COURSE_API_URL, {
                credentials: "include"
            })
                .then(function (response) {
                return response.json();
            });
        };
        this.findCourseById = function (courseId) {
            return fetch(API_URL + 'courses/' + courseId, {
                credentials: "include"
            })
                .then(function (response) {
                return response.json();
            });
        };
    }
    return CourseService;
}());



/***/ }),

/***/ "./src/services/lesson.service.client.ts":
/*!***********************************************!*\
  !*** ./src/services/lesson.service.client.ts ***!
  \***********************************************/
/*! exports provided: LessonService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LessonService", function() { return LessonService; });
var API_URL = 'https://aqueous-reef-72349.herokuapp.com/api/';
var LessonService = /** @class */ (function () {
    function LessonService() {
        this.findAllLessons = function (modId) {
            return fetch(API_URL + 'module/' + modId + '/lesson', {
                credentials: "include"
            })
                .then(function (response) {
                return response.json();
            });
        };
        this.findLessonById = function (lessonId) {
            return fetch(API_URL + 'lesson/' + lessonId, {
                credentials: "include"
            })
                .then(function (response) {
                return response.json();
            });
        };
    }
    return LessonService;
}());



/***/ }),

/***/ "./src/services/module.service.client.ts":
/*!***********************************************!*\
  !*** ./src/services/module.service.client.ts ***!
  \***********************************************/
/*! exports provided: ModuleService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModuleService", function() { return ModuleService; });
var API_URL = 'https://aqueous-reef-72349.herokuapp.com/api/';
var ModuleService = /** @class */ (function () {
    function ModuleService() {
        this.findAllModules = function (courseId) {
            return fetch(API_URL + 'course/' + courseId + '/modules', {
                credentials: "include"
            })
                .then(function (response) {
                return response.json();
            });
        };
        this.findModuleById = function (moduleId) {
            return fetch(API_URL + 'modules/' + moduleId, {
                credentials: "include"
            })
                .then(function (response) {
                return response.json();
            });
        };
    }
    return ModuleService;
}());



/***/ }),

/***/ "./src/services/topic.service.client.ts":
/*!**********************************************!*\
  !*** ./src/services/topic.service.client.ts ***!
  \**********************************************/
/*! exports provided: TopicService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopicService", function() { return TopicService; });
var API_URL = 'https://aqueous-reef-72349.herokuapp.com/api/';
var TopicService = /** @class */ (function () {
    function TopicService() {
        this.findAllTopics = function (lid) {
            return fetch(API_URL + 'lesson/' + lid + '/topic', {
                credentials: "include"
            })
                .then(function (response) {
                return response.json();
            });
        };
        this.findTopicById = function (topicId) {
            return fetch(API_URL + 'topic/' + topicId, {
                credentials: "include"
            })
                .then(function (response) {
                return response.json();
            });
        };
    }
    return TopicService;
}());



/***/ }),

/***/ "./src/services/user.service.client.ts":
/*!*********************************************!*\
  !*** ./src/services/user.service.client.ts ***!
  \*********************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
var LOGIN_API_URL = 'https://aqueous-reef-72349.herokuapp.com/api/login';
var UPDATE_API_URL = 'https://aqueous-reef-72349.herokuapp.com/api/update/';
var REGISTER_API_URL = 'https://aqueous-reef-72349.herokuapp.com/api/register';
var API_URL = 'https://aqueous-reef-72349.herokuapp.com/api/';
var COURSE_API_URL = 'https://aqueous-reef-72349.herokuapp.com/api/courses/';
var UserService = /** @class */ (function () {
    function UserService() {
        this.getProfile = function () {
            return fetch(API_URL + "profile", {
                credentials: "include"
            })
                .then(function (response) {
                return response.json();
            });
        };
        this.findCourseById = function (courseId) {
            return fetch(API_URL + 'courses/' + courseId, {
                credentials: "include"
            })
                .then(function (response) {
                return response.json();
            });
        };
        this.loginUser = function (credentials) {
            return fetch(LOGIN_API_URL, {
                body: JSON.stringify(credentials),
                headers: {
                    'Content-Type': 'application/json'
                },
                method: 'POST',
                credentials: 'include'
            }).then(function (response) {
                return response.json();
            });
        };
        this.updateProfile = function (user) {
            return fetch(UPDATE_API_URL + user.userId, {
                body: JSON.stringify(user),
                headers: {
                    'Content-Type': 'application/json'
                },
                method: 'PUT',
                credentials: 'include'
            }).then(function (response) {
                return response.json();
            });
        };
        this.registerUser = function (user) {
            return fetch(REGISTER_API_URL, {
                body: JSON.stringify(user),
                headers: {
                    'Content-Type': 'application/json'
                },
                method: 'POST',
                credentials: 'include'
            }).then(function (response) {
                return response.json();
            });
        };
        this.logoutUser = function (user) {
            return fetch(API_URL + "logout", {
                body: JSON.stringify(user),
                headers: {
                    'Content-Type': 'application/json'
                },
                method: 'POST',
                credentials: 'include'
            }).then(function (response) {
            });
        };
        this.findAllCourses = function () {
            console.log("Find all courses", COURSE_API_URL);
            return fetch(COURSE_API_URL, {
                credentials: "include"
            })
                .then(function (response) {
                return response.json();
            });
        };
    }
    return UserService;
}());



/***/ }),

/***/ "./src/services/widget.service.client.ts":
/*!***********************************************!*\
  !*** ./src/services/widget.service.client.ts ***!
  \***********************************************/
/*! exports provided: WidgetService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetService", function() { return WidgetService; });
var API_URL = 'https://aqueous-reef-72349.herokuapp.com/api/';
var WidgetService = /** @class */ (function () {
    function WidgetService() {
        this.findAllWidgets = function (tid) {
            return fetch(API_URL + 'topic/' + tid + '/widget', {
                credentials: "include"
            })
                .then(function (response) {
                return response.json();
            });
        };
        this.findWidgetById = function (widgetId) {
            return fetch(API_URL + 'widget/' + widgetId, {
                credentials: "include"
            })
                .then(function (response) {
                return response.json();
            });
        };
    }
    return WidgetService;
}());



/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/likithponnanna/Documents/Web-Dev-Course/AngularBackupTest/For Submission Client Angular A7/WhiteboardStudent-client-Ang-likithponnanna/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map