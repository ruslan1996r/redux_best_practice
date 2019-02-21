import {
  INIT_SHOPPAGE_REQUEST,
  INIT_SHOPPAGE_SUCCESS,
  INIT_SHOPPAGE_FAILURE
} from "../types";

const initialState = {
  data: {},
  error: null,
  loading: false
};

const shopPageReducer = (state = initialState, action) => {
  switch (action.type) {
    case INIT_SHOPPAGE_REQUEST:
      return { ...state, loading: true };
    case INIT_SHOPPAGE_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload.data,
        error: null
      };
    case INIT_SHOPPAGE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error
      };
    default:
      return state;
  }
};

export default shopPageReducer;
