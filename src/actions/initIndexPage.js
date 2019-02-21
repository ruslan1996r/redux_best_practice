import {
  INIT_INDEXPAGE_TRIGGERED,
  INIT_INDEXPAGE_REQUEST,
  INIT_INDEXPAGE_SUCCESS,
  INIT_INDEXPAGE_FAILURE
} from "../types";

export const initIndexPageTriggered = () => ({
  type: INIT_INDEXPAGE_TRIGGERED
});

export const initIndexPageRequest = () => ({
  type: INIT_INDEXPAGE_REQUEST
});

export const initIndexPageSuccess = data => ({
  type: INIT_INDEXPAGE_SUCCESS,
  payload: { data }
});

export const initIndexPageFailure = error => ({
  type: INIT_INDEXPAGE_FAILURE,
  payload: { error }
});
