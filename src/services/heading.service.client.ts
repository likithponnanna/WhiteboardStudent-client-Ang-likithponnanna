let API_URL = 'https://aqueous-reef-72349.herokuapp.com/api/';

 export class HeadingWidgetService {

    findAllHeadingWidgets = (tid) => {
        return fetch(API_URL + 'topic/' + tid + '/heading/widget', {
            credentials: "include"
        })
            .then(response =>
                response.json());
    }


    findHeadingWidgetById = (widgetId) =>
        fetch(API_URL+'heading/widget/'+widgetId,{
            credentials: "include"
        })
            .then(response =>
                response.json());




}

