import getResourse from '../services/index'

export async function getVideo(id)   {
    var body = await getResourse(`search?part=snippet&maxResults=6&q=${id}&type=video&key=`)
    return body;
}
 


const action123 = {
    type: "Test",
    payload: "test"
};