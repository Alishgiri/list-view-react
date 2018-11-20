import * as actionTypes from "./actionTypes";

const initialState = {
  lists: null,
  error: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH:
      return {
        ...state,
        error: false,
        lists: action.lists
      };
      case actionTypes.FETCH_FAILED:
      return {
          ...state,
          error: true
      }
    default:
      return state;
  }
};

export default reducer;
