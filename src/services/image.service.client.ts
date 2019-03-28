let API_URL = 'https://aqueous-reef-72349.herokuapp.com/api/';
export class ImageWidgetService {

    findAllImageWidgets = (tid) => {
        return fetch(API_URL + 'topic/' + tid + '/image/widget', {
            credentials: "include"
        })
            .then(response =>
                response.json());
    }




    findImageWidgetById = (widgetId) =>
        fetch(API_URL+'image/widget/'+widgetId,{
            credentials: "include"
        })
            .then(response =>
                response.json());





}

