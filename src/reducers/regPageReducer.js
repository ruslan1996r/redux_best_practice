import {
  INIT_REGPAGE_REQUEST,
  INIT_REGPAGE_SUCCESS,
  INIT_REGPAGE_FAILURE
} from "../types";

const initialState = {
  data: {},
  error: null,
  loading: false
};

const regPageReducer = (state = initialState, action) => {
  switch (action.type) {
    case INIT_REGPAGE_REQUEST:
      return { ...state, loading: true };
    case INIT_REGPAGE_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload.data,
        error: null
      };
    case INIT_REGPAGE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error
      };
    default:
      return state;
  }
};

export default regPageReducer;
