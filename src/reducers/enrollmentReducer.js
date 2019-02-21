import {
  ENROLLMENT_REQUEST,
  ENROLLMENT_SUCCESS,
  ENROLLMENT_FAILURE
  } from "../types";
  
  const initialState = {
    error: null,
    loading: false
  };
  
  const enrollmentReducer = (state = initialState, action) => {
    switch (action.type) {
      case ENROLLMENT_REQUEST:
        return { ...state, loading: true };
      case ENROLLMENT_SUCCESS:
        return {
          ...state,
          loading: false,
          error: null
        };
      case ENROLLMENT_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload.error
        };
      default:
        return state;
    }
  };
  
  export default enrollmentReducer;
  