import {
  INIT_REGPAGE_TRIGGERED,
  INIT_REGPAGE_REQUEST,
  INIT_REGPAGE_SUCCESS,
  INIT_REGPAGE_FAILURE
} from "../types";

export const initRegPageTriggered = () => ({
  type: INIT_REGPAGE_TRIGGERED
});

export const initRegPageRequest = () => ({
  type: INIT_REGPAGE_REQUEST
});

export const initRegPageSuccess = data => ({
  type: INIT_REGPAGE_SUCCESS,
  payload: { data }
});

export const initRegPageFailure = error => ({
  type: INIT_REGPAGE_FAILURE,
  payload: { error }
});
