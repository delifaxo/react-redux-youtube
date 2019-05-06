export default function comments(state = [], action) {

    switch (action.type) {
        case 'ADD_COMMENTS':
            return [action.payload]
            case 'LOAD_COMMENTS':
            return [...state,action.payload]
        default:
            return state
    }
}