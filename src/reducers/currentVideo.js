export default function currentVideo(state = [], action) {
    switch (action.type) {
        case 'ADD_CURRENT_VIDEO':
        return [action.payload]
        default:
        return state
    }
}
