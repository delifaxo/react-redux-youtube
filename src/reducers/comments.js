export default function comments(state = [], action) {

    switch (action.type) {
        case 'ADD_COMMENTS':
            return [action.payload]
        default:
            return state
    }
}