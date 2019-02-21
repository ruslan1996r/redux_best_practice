import {
  REVIEW_TRIGGERED,
  REVIEW_REQUEST,
  REVIEW_SUCCESS,
  REVIEW_FAILURE
} from "../types";

export const reviewTriggered = () => ({
  type: REVIEW_TRIGERRED
});

export const reviewRequest = () => ({
  type: REVIEW_REQUEST
});

export const reviewSuccess = data => ({
  type: REVIEW_SUCCESS,
  payload: { data }
});

export const reviewFailure = error => ({
  type: REVIEW_FAILURE,
  payload: { error }
});
