let API_URL = 'https://aqueous-reef-72349.herokuapp.com/api/';
export class ParagraphWidgetService {

    findAllParagraphWidgets = (tid) => {
        return fetch(API_URL + 'topic/' + tid + '/paragraph/widget', {
            credentials: "include"
        })
            .then(response =>
                response.json());
    }


    findParagraphWidgetById = (widgetId) =>
        fetch(API_URL+'paragraph/widget/'+widgetId,{
            credentials: "include"
        })
            .then(response =>
                response.json());







}

