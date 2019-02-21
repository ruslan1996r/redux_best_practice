import { put, takeLatest, call, delay } from "redux-saga/effects";
import axios from "axios";

import { HEADER_TRIGGERED } from "../types";
import {
  headerRequest as request,
  headerSuccess as success,
  headerFailure as failure
} from "../actions/header";

function* header(action) {
  yield put(request());
  console.log("req");
  // yield delay(1000000);
  try {
    let response = yield call(
      [axios, axios.get],
      "https://floating-dawn-26890.herokuapp.com/header"
    );
    console.log("success");
    yield put(success(response.data));
  } catch (err) {
    console.log(err);
    console.log("error");
    yield put(failure(err.response));
  }
}

export default function* watchHeader() {
  yield takeLatest(HEADER_TRIGGERED, header);
}
