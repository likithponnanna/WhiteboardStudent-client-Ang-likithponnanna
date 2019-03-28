let API_URL = 'https://aqueous-reef-72349.herokuapp.com/api/';
export class TopicService {

    findAllTopics = (lid) =>
        fetch(API_URL+'lesson/'+lid+'/topic',{
            credentials: "include"
        })
            .then(response =>
                response.json());

    findTopicById = (topicId) =>
        fetch(API_URL+'topic/'+topicId,{
            credentials: "include"
        })
            .then(response =>
                response.json());


}
