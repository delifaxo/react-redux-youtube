export default function comments(state = [], action) {
    if (action.type === 'ADD_COMMENTS') {
        return [
            action.payload
        ]
    }
    return state;
}
