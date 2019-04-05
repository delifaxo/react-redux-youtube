export default function video(state = [], action) {
    if (action.type  === 'ADD_VIDEO') {
        return [
            action.payload
        ]
    }
    return state;
}
