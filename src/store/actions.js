import Axios from "../axios-custom";
import * as actionTypes from "./actionTypes";

export const fetchList = () => {
  return dispatch => {
    Axios.get("/data")
      .then(res => {
        dispatch(populateToLists(res.data));
      })
      .catch(error => dispatch(populateFailed()));
  };
};

export const populateToLists = responseLists => {
  return {
    type: actionTypes.FETCH,
    lists: responseLists
  };
};

export const populateFailed = () => {
  return {
    type: actionTypes.FETCH_FAILED
  };
};
