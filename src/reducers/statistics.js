export default function statistics(state = [], action,isFetching) {
    switch (action.type) {
        case 'ADD_STATISTICS':
        return [action.payload, isFetching=true]
        default:
        return state
    }
}
