import getResourse from '../services/index'

export function getComments(body) {
  return {
    type: "ADD_COMMENTS",
    payload: body 
  }
}

export function loadComments(body) {
  return {
    type: "LOAD_COMMENTS",
    payload: body 
  }
}