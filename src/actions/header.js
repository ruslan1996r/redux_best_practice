import {
  HEADER_TRIGGERED,
  HEADER_REQUEST,
  HEADER_SUCCESS,
  HEADER_FAILURE
} from "../types";

export const headerTriggered = () => ({
  type: HEADER_TRIGGERED
});

export const headerRequest = () => ({
  type: HEADER_REQUEST
});

export const headerSuccess = data => ({
  type: HEADER_SUCCESS,
  payload: { data }
});

export const headerFailure = error => ({
  type: HEADER_FAILURE,
  payload: { error }
});
