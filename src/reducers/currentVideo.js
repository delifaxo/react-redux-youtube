export default function currentVideo(state = [], action,isFetching = false) {
    switch (action.type) {
        case 'ADD_CURRENT_VIDEO':
        return [action.payload,isFetching]
        default:
        return state
    }
}
