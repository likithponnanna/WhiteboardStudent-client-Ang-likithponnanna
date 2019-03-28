let API_URL = 'https://desolate-ocean-86338.herokuapp.com/api/';
export class ModuleService {

    findAllModules = (courseId) =>
        fetch(API_URL+'course/'+courseId+'/modules',{
            credentials: "include"
        })
            .then(response =>
                response.json());

    findModuleById = (moduleId) =>
        fetch(API_URL+'modules/'+moduleId,{
            credentials: "include"
        })
            .then(response =>
                response.json());

}
