import {
    PURCHASE_REQUEST,
    PURCHASE_SUCCESS,
    PURCHASE_FAILURE
  } from "../types";
  
  const initialState = {
    error: null,
    loading: false
  };
  
  const purchaseReducer = (state = initialState, action) => {
    switch (action.type) {
      case PURCHASE_REQUEST:
        return { ...state, loading: true };
      case PURCHASE_SUCCESS:
        return {
          ...state,
          loading: false,
          error: null
        };
      case PURCHASE_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload.error
        };
      default:
        return state;
    }
  };
  
  export default purchaseReducer;
  