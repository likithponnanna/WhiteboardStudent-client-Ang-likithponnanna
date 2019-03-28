let COURSE_API_URL= 'https://aqueous-reef-72349.herokuapp.com/api/courses/';
let API_URL = 'https://aqueous-reef-72349.herokuapp.com/api/';

export class CourseService {

    findAllCourses = () => {
        console.log("Find all courses",COURSE_API_URL);
        return fetch(COURSE_API_URL, {
            credentials: "include"
        })
            .then(response =>{
               return response.json()});
    };

    findCourseById = (courseId) => {
        return fetch(API_URL + 'courses/' + courseId, {
            credentials: "include"
        })
            .then(response =>{
        return response.json()});
    };

}