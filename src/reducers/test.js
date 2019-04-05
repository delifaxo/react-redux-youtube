export default function test(state = [], action) {
    if (action.type === 'ADDT') {
        return [
   //    ...state,
       action.payload
        ]
    }
    return state;   
}
