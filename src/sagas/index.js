import { all } from "redux-saga/effects";

import watchIndexPage from "./indexPageSaga";
import watchShopPage from "./shopPageSaga";
import watchRegPage from "./regPageSaga";
import watchHeader from "./headerSaga";
import watchPurchase from "./purchaseSaga";
import watchReview from "./reviewSaga";
import watchEnrollment from "./enrollmentSaga";

export default function* rootSaga() {
  yield all([
    watchIndexPage(),
    watchShopPage(),
    watchRegPage(),
    watchHeader(),
    watchPurchase(),
    watchReview(),
    watchEnrollment()
  ]);
}
