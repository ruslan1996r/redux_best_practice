import { put, takeLatest, call, delay } from "redux-saga/effects";
import axios from "axios";

import { INIT_INDEXPAGE_TRIGGERED } from "../types";
import {
  initIndexPageRequest as request,
  initIndexPageSuccess as success,
  initIndexPageFailure as failure
} from "../actions/initIndexPage";

function* indexPage(action) {
  yield put(request());
  console.log("req");
  // yield delay(1000000);
  try {
    let response = yield call(
      [axios, axios.get],
      "https://floating-dawn-26890.herokuapp.com/index"
    );
    console.log("success");
    yield put(success(response.data));
  } catch (err) {
    console.log(err);
    console.log("error");
    yield put(failure(err.response));
  }
}

export default function* watchIndexPage() {
  yield takeLatest(INIT_INDEXPAGE_TRIGGERED, indexPage);
}
