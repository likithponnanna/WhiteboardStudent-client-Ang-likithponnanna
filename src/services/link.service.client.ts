let API_URL = 'https://aqueous-reef-72349.herokuapp.com/api/';
export class LinkWidgetService {

    findAllLinkWidgets = (tid) => {
        return fetch(API_URL + 'topic/' + tid + '/link/widget', {
            credentials: "include"
        })
            .then(response =>
                response.json());
    }


    findLinkWidgetById = (widgetId) =>
        fetch(API_URL+'link/widget/'+widgetId,{
            credentials: "include"
        })
            .then(response =>
                response.json());



}

