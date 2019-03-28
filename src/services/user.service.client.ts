let LOGIN_API_URL =  'https://desolate-ocean-86338.herokuapp.com/api/login';
let UPDATE_API_URL = 'https://desolate-ocean-86338.herokuapp.com/api/update/';
let REGISTER_API_URL = 'https://desolate-ocean-86338.herokuapp.com/api/register';
let API_URL = 'https://desolate-ocean-86338.herokuapp.com/api/';
let COURSE_API_URL= 'https://desolate-ocean-86338.herokuapp.com/api/courses/';
export class UserService {

    getProfile =() =>
        fetch(API_URL+"profile",{
            credentials: "include"
        })
            .then(response =>
                response.json());


    findCourseById = (courseId) =>
        fetch(API_URL+'courses/'+courseId,{
            credentials: "include"
        })
            .then(response =>
                response.json());




    loginUser = (credentials) => {
        return fetch(LOGIN_API_URL, {
            body: JSON.stringify(credentials),
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST',
            credentials: 'include'
        }).then( function(response){
            return response.json()
        })
    };



    updateProfile = (user) => {
        return fetch(UPDATE_API_URL+user.userId, {
            body: JSON.stringify(user),
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'PUT',
            credentials: 'include'
        }).then( function(response){
            return response.json()
        })
    };

    registerUser = (user) => {
        return fetch(REGISTER_API_URL, {
            body: JSON.stringify(user),
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST',
            credentials: 'include'
        }).then( function(response){
            return response.json()
        })
    };

    logoutUser = (user) => {
        return fetch(API_URL+"logout", {
            body: JSON.stringify(user),
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST',
            credentials: 'include'
        }).then( function(response){

        })
    }

    findAllCourses = () => {
        console.log("Find all courses",COURSE_API_URL);
        return fetch(COURSE_API_URL, {
            credentials: "include"
        })
            .then(response =>{
                return response.json()});
    };


}
