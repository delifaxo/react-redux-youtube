import getResourse from '../services/index'

export function getComments(body) {
  return {
    type: "ADD_COMMENTS",
    payload: body
  }
}