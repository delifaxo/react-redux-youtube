import getResourse from '../services/index'

export function getVideo(body) {
    return {
        type: "ADD_VIDEO",
        payload: body
    }
}