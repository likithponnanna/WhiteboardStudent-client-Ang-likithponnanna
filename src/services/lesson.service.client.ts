let API_URL = 'https://desolate-ocean-86338.herokuapp.com/api/';
export class LessonService {

    findAllLessons = (modId) =>
        fetch(API_URL+'module/'+ modId+'/lesson',{
            credentials: "include"
        })
            .then(response =>
                response.json());

    findLessonById = (lessonId) =>
        fetch(API_URL+'lesson/'+lessonId,{
            credentials: "include"
        })
            .then(response =>
                response.json());

}