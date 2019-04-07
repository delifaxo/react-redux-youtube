import getResourse from '../services/index'

export async function getComments(id) {
  var body = await getResourse(`commentThreads?part=id%2Csnippet&videoId=${id}&key=`)
  return body;
}