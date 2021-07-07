import {
  FETCH_SMURF_START,
  FETCH_SMURF_SUCCESS,
  FETCH_SMURF_FAILURE,
  ADD_SMURF_START,
  ADD_SMURF_SUCCESS,
  ADD_SMURF_FAILURE
} from "./types";

const initialState = {
  smurfs: [],
  errors: "",
  isFetching: false
};

export const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_SMURF_START:
      return {
        ...state,
        error: "",
        isFetching: true
      };
    case FETCH_SMURF_SUCCESS:
      return {
        ...state,
        error: "",
        isFetching: false,
        smurfs: payload
      };
    case FETCH_SMURF_FAILURE:
      return {
        ...state,
        errors: "bummer",
        isFetching: false
      };
    case ADD_SMURF_START:
      return {
        ...state,
        errors: "",
        isFetching: true
      };
    case ADD_SMURF_SUCCESS:
      return {
        ...state,
        error: "",
        isFetching: false,
        errors: "bummer"
      };

    default:
      return state;
  }
};
