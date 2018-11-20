import { FETCH } from "./actionTypes";


const initialState = {
    lists: null,
    error: false
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH:
        return {
            ...state
        }
        default:
        return state
    }
}

export default reducer;
