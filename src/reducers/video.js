export default function video(state = [], action,isFetching) {
    switch (action.type) {
        case 'ADD_VIDEO':
        return [action.payload, isFetching=true]
        default:
        return state
    }
}
