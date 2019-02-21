import { put, takeLatest, call, delay } from "redux-saga/effects";
import axios from "axios";

import { REVIEW_SUBMITTED } from "../types";
import {
  reviewRequest as request,
  reviewSuccess as success,
  reviewFailure as failure
} from "../actions/review";

function* review(action) {
  yield put(request());

  let {name, email, text} = action.payload
  try {
    let response = yield call(
      [axios, axios.post],
      "https://floating-dawn-26890.herokuapp.com/comments", 
      {name, email, text} 
    );
    yield put(success(response.data));
  } catch (err) {
    yield put(failure(err.response));
  }
}

export default function* watchReview() {
  yield takeLatest(REVIEW_SUBMITTED, review);
}
