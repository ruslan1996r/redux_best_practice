import { put, takeLatest, call, delay } from "redux-saga/effects";
import axios from "axios";

import { INIT_SHOPPAGE_TRIGGERED } from "../types";
import {
  initShopPageRequest as request,
  initShopPageSuccess as success,
  initShopPageFailure as failure
} from "../actions/initShopPage";

function* shopPage(action) {
  yield put(request());
  console.log("req");
  // yield delay(2500);
  try {
    let response = yield call(
      [axios, axios.get],
      "https://floating-dawn-26890.herokuapp.com/shop/get"
    );
    console.log("success");
    yield put(success(response.data));
  } catch (err) {
    console.log(err);
    console.log("error");
    yield put(failure(err.response));
  }
}

export default function* watchShopPage() {
  yield takeLatest(INIT_SHOPPAGE_TRIGGERED, shopPage);
}
