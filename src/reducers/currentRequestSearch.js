export default function currentRequestSearch(state = [], action) {

    switch (action.type) {
        case 'ADD_INPUT_SEARCH':
            return [action.payload]
        default:
            return state
    }
}