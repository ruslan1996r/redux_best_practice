import { HEADER_REQUEST, HEADER_SUCCESS, HEADER_FAILURE } from "../types";

const initialState = {
  data: {},
  error: null,
  loading: false
};

const headerReducer = (state = initialState, action) => {
  switch (action.type) {
    case HEADER_REQUEST:
      return { ...state, loading: true };
    case HEADER_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload.data,
        error: null
      };
    case HEADER_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error
      };
    default:
      return state;
  }
};

export default headerReducer;
