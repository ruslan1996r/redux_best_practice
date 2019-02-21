import {
  REVIEW_REQUEST,
  REVIEW_SUCCESS,
  REVIEW_FAILURE,
  REVIEW_SUBMITTED
} from "../types";

export const reviewSubmitted = (name, email, text) => ({
  type: REVIEW_SUBMITTED,
  payload: {name, email, text}
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
