//const Api2_key = "AIzaSyCN8Z0e1u_dSFhNen05muGFYIzh-gsezQU";
const Api2_key ="AIzaSyBe9qwivOtTfitthysxQY7gqYIp1BDCiuc"
const Url_youtube = "https://www.googleapis.com/youtube/v3/";

async function getResourse(id) {
  let res = await fetch(`${Url_youtube}${id}${Api2_key}`);
  if (!res.ok) {
    console.log('что-то не так с апи')
  }
  let body = await res.json();
  return body;
}

export async function getApiComments(id) {
  let data = await getResourse(`commentThreads?part=id%2Csnippet&videoId=${id}&key=`)
  return data
}

export async function getApiListVideo(search) {
  let body = await getResourse(`search?part=snippet&maxResults=6&q=${search}&type=video&key=`)
  return body
}

export async function getApiVideo(id) {
  let body = await getResourse(`videos?part=snippet&id=${id}&key=`)
  return body
}

export async function getApiselectlistVideo(token,currentSearch) {
  let body = await getResourse(`search?pageToken=${token}&part=snippet&maxResults=6&q=${currentSearch}&type=video&key=`)
  return body
}

export async function getApiCommentsNext(token,id) {
  let body = await getResourse(`commentThreads?pageToken=${token}&part=id%2Csnippet&videoId=${id}&key=`)
  return body
}

export async function getApiStatistics(id) {
  let body = await getResourse(`videos?part=statistics&id=${id}&key=`)
  return body
}
 
export default getResourse;
