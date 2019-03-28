let API_URL = 'https://aqueous-reef-72349.herokuapp.com/api/';
export class ListWidgetService {

    findAllListWidgets = (tid) => {
        return fetch(API_URL + 'topic/' + tid + '/list/widget', {
            credentials: "include"
        })
            .then(response =>
                response.json());
    }



    findListWidgetById = (widgetId) =>
        fetch(API_URL+'list/widget/'+widgetId,{
            credentials: "include"
        })
            .then(response =>
                response.json());



}

