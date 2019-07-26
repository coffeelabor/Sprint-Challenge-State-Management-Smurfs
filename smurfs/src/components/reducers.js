import {
  FETCH_SMURF_START,
  FETCH_SMURF_SUCCESS,
  FETCH_SMURF_FAILURE
} from "./types";

const initialState = {
  smurfs: []
  //   name: "",
  //   age: "",
  //   height: "",
  //   id: ""
};

export const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_SMURF_START:
      return {
        ...state
      };
    default:
      return state;
  }
};
