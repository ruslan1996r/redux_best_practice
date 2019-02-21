import { put, takeLatest, call, delay } from "redux-saga/effects";
import axios from "axios";

import { ENROLLMENT_SUBMITTED } from "../types";
import {
  enrollmentRequest as request,
  enrollmentSuccess as success,
  enrollmentFailure as failure
} from "../actions/enrollment";

function* enrollment(action) {
  yield put(request());

  let {name, phone, email, categories, subcategories, pictures} = action.payload
  try {
    let response = yield call(
      [axios, axios.post],
      "https://floating-dawn-26890.herokuapp.com/enrollment/add", 
      {name, phone, email, categories, subcategories, pictures} 
    );
    yield put(success(response.data));
  } catch (err) {
    yield put(failure(err.response));
  }
}

export default function* watchEnrollment() {
  yield takeLatest(ENROLLMENT_SUBMITTED, enrollment);
}
