import axios from "axios";

import {
  FETCH_SMURF_START,
  FETCH_SMURF_SUCCESS,
  FETCH_SMURF_FAILURE,
  ADD_SMURF_START,
  ADD_SMURF_SUCCESS,
  ADD_SMURF_FAILURE
} from "./types";

export const getSmurfs = () => dispatch => {
  //   console.log("getSmurfs actions.js");
  dispatch({ type: FETCH_SMURF_START });
  axios
    .get("http://localhost:3333/smurfs")
    // .then(res => console.log("get res", res))
    .then(res => {
      dispatch({ type: FETCH_SMURF_SUCCESS, payload: res.data });
    })
    .catch(err => console.log(err));
};
export const postSmurfs = addSmurf => dispatch => {
  console.log("smurft post", addSmurf);
  //   console.log("getSmurfs actions.js");
  dispatch({ type: ADD_SMURF_START });
  axios
    .post("http://localhost:3333/smurfs", addSmurf)
    // .then(res => console.log("get res", res))
    .then(res => {
      dispatch({ type: ADD_SMURF_SUCCESS, payload: res.data });
    })
    .catch(err => console.log(err.response.data));
};

// export const getSmurfs = () => {
//   console.log("getSmurfs actions.js");
// };
