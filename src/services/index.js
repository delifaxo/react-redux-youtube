const Api2_key = "AIzaSyCN8Z0e1u_dSFhNen05muGFYIzh-gsezQU";
const Url_youtube = "https://www.googleapis.com/youtube/v3/";

async function getResourse(id) {
  let res = await fetch(`${Url_youtube}${id}${Api2_key}`);
  if (!res.ok) {
    console.log('что-то не так с апи')
  }
  let body = await res.json();
  return body;
}
export default getResourse;