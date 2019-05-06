export function currentRequestSearch(body) {
    return {
        type: "ADD_INPUT_SEARCH",
        payload: body
    }
}