import { put, takeLatest, call, delay, race } from "redux-saga/effects";
import axios from "axios";

import { INIT_REGPAGE_TRIGGERED } from "../types";
import {
  initRegPageRequest as request,
  initRegPageSuccess as success,
  initRegPageFailure as failure
} from "../actions/initRegPage";

function* regPage(action) {
  yield put(request());
  console.log("req");
  yield delay(1000000);
  try {
    let { response, timeout } = yield race({
      response: call(
        [axios, axios.get],
        "https://floating-dawn-26890.herokuapp.com/enrollment/add"
      ),
      timeout: delay(7000)
    });
    if (response) {
      console.log("success");
      yield put(success(response.data));
    } else {
      yield put(failure("Request Timeout"));
    }
  } catch (err) {
    console.log(err);
    console.log("error");
    yield put(failure(err.response));
  }
}

export default function* watchRegPage() {
  yield takeLatest(INIT_REGPAGE_TRIGGERED, regPage);
}
