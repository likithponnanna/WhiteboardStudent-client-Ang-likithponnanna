let API_URL = 'https://aqueous-reef-72349.herokuapp.com/api/';
export class WidgetService {

    findAllWidgets = (tid) => {
        return fetch(API_URL + 'topic/' + tid + '/widget', {
            credentials: "include"
        })
            .then(response =>
                response.json());
    }

    findWidgetById = (widgetId) =>
        fetch(API_URL+'widget/'+widgetId,{
            credentials: "include"
        })
            .then(response =>
                response.json());

}
