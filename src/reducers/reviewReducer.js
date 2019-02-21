import {
    REVIEW_REQUEST,
    REVIEW_SUCCESS,
    REVIEW_FAILURE
  } from "../types";
  
  const initialState = {
    error: null,
    loading: false
  };
  
  const reviewReducer = (state = initialState, action) => {
    switch (action.type) {
      case REVIEW_REQUEST:
        return { ...state, loading: true };
      case REVIEW_SUCCESS:
        return {
          ...state,
          loading: false,
          error: null
        };
      case REVIEW_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload.error
        };
      default:
        return state;
    }
  };
  
  export default reviewReducer;
  