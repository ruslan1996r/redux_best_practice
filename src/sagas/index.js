import { all } from "redux-saga/effects";

import watchIndexPage from "./indexPageSaga";
import watchShopPage from "./shopPageSaga";
import watchRegPage from "./regPageSaga";
import watchPurchase from "./purchaseSaga";
import watchReview from "./reviewSaga";
import watchEnrollment from "./enrollment";


export default function* rootSaga() {
  yield all([watchIndexPage(), watchShopPage(), watchRegPage(), watchPurchase(), watchReview(), watchEnrollment()]);
}
