import {
  PURCHASE_SUBMITTED,
  PURCHASE_REQUEST,
  PURCHASE_SUCCESS,
  PURCHASE_FAILURE
} from "../types";

export const purchaseSubmitted = (name, email, phone, address) => ({
  type: PURCHASE_SUBMITTED,
  payload: {name, email, phone, address}
});

export const purchaseRequest = () => ({
  type: PURCHASE_REQUEST
});

export const purchaseSuccess = data => ({
  type: PURCHASE_SUCCESS,
  payload: { data }
});

export const purchaseFailure = error => ({
  type: PURCHASE_FAILURE,
  payload: { error }
});
