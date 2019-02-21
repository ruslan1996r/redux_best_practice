import { put, takeLatest, call, delay } from "redux-saga/effects";
import axios from "axios";

import { PURCHASE_SUBMITTED } from "../types";
import {
  purchaseRequest as request,
  purchaseSuccess as success,
  purchaseFailure as failure
} from "../actions/purchase";

function* purchase(action) {
  yield put(request());

  let {name, email, phone, address} = action.payload
  try {
    let response = yield call(
      [axios, axios.post],
      "https://floating-dawn-26890.herokuapp.com/purchase", 
      {name, email, phone, address} 
    );
    yield put(success(response.data));
  } catch (err) {
    yield put(failure(err.response));
  }
}

export default function* watchPurchase() {
  yield takeLatest(PURCHASE_SUBMITTED, purchase);
}
