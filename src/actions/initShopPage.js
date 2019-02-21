import {
  INIT_SHOPPAGE_TRIGGERED,
  INIT_SHOPPAGE_REQUEST,
  INIT_SHOPPAGE_SUCCESS,
  INIT_SHOPPAGE_FAILURE
} from "../types";

export const initShopPageTriggered = () => ({
  type: INIT_SHOPPAGE_TRIGGERED
});

export const initShopPageRequest = () => ({
  type: INIT_SHOPPAGE_REQUEST
});

export const initShopPageSuccess = data => ({
  type: INIT_SHOPPAGE_SUCCESS,
  payload: { data }
});

export const initShopPageFailure = error => ({
  type: INIT_SHOPPAGE_FAILURE,
  payload: { error }
});
