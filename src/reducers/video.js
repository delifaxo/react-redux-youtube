export default function video(state = [], action) {
    switch (action.type) {
        case 'ADD_VIDEO':
        return [action.payload]
        default:
        return state
    }
}
