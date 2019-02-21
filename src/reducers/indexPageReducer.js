import {
  INIT_INDEXPAGE_REQUEST,
  INIT_INDEXPAGE_SUCCESS,
  INIT_INDEXPAGE_FAILURE
} from "../types";

const initialState = {
  data: {},
  error: null,
  loading: false
};

const indexPageReducer = (state = initialState, action) => {
  switch (action.type) {
    case INIT_INDEXPAGE_REQUEST:
      return { ...state, loading: true };
    case INIT_INDEXPAGE_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload.data,
        error: null
      };
    case INIT_INDEXPAGE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error
      };
    default:
      return state;
  }
};

export default indexPageReducer;
