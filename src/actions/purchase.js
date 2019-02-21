import {
  PURCHASE_TRIGGERED,
  PURCHASE_REQUEST,
  PURCHASE_SUCCESS,
  PURCHASE_FAILURE
} from "../types";

export const purchaseTriggered = () => ({
  type: PURCHASE_TRIGERRED
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
