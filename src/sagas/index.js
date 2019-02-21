import { all } from "redux-saga/effects";

import watchIndexPage from "./indexPageSaga";
import watchShopPage from "./shopPageSaga";
import watchRegPage from "./regPageSaga";

export default function* rootSaga() {
  yield all([watchIndexPage(), watchShopPage(), watchRegPage()]);
}
