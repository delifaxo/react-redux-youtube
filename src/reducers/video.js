export default function video(state = [false], action) {
    switch (action.type) {
        case 'ADD_VIDEO':
        return [action.payload]
        case 'LOADING':
        return [action.payload]
        default:
        return state
    }
}
