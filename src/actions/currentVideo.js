import getResourse from '../services/index'

export function getCurrentVideo(body) {
    return {
        type: "ADD_CURRENT_VIDEO",
        payload: body
    }
}