import {
  ENROLLMENT_TRIGGERED,
  ENROLLMENT_REQUEST,
  ENROLLMENT_SUCCESS,
  ENROLLMENT_FAILURE
} from "../types";

export const enrollmentTriggered = () => ({
  type: ENROLLMENT_TRIGERRED
});

export const enrollmentRequest = () => ({
  type: ENROLLMENT_REQUEST
});

export const enrollmentSuccess = data => ({
  type: ENROLLMENT_SUCCESS,
  payload: { data }
});

export const enrollmentFailure = error => ({
  type: ENROLLMENT_FAILURE,
  payload: { error }
});
