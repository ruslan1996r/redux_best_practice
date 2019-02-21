import {
  ENROLLMENT_SUBMITTED,
  ENROLLMENT_REQUEST,
  ENROLLMENT_SUCCESS,
  ENROLLMENT_FAILURE,
} from "../types";

export const enrollmentSubmitted= (name, phone, email, categories, subcategories, pictures) => ({
  type: ENROLLMENT_SUBMITTED,
  payload: {name, phone, email, categories, subcategories, pictures}
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
