import * as data from '../list-data';
import Axios from "../axios-custom";
import * as actionTypes from "./actionTypes";

export const fetchList = () => {
  return dispatch => {
  //   Axios.get("/data")
  //     .then(res => {
        dispatch(populateToLists(data.data));
  //     })
  //     .catch(error => dispatch(populateFailed()));
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
