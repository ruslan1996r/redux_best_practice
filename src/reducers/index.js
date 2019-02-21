import { combineReducers } from "redux";

import indexPageReducer from "./indexPageReducer";
import shopPageReducer from "./shopPageReducer";
import regPageReducer from "./regPageReducer";
import headerReducer from "./headerReducer";
import purchaseReducer from "./purchaseReducer";
import reviewReducer from "./reviewReducer";
import enrollmentReducer from "./enrollmentReducer";

const rootReducer = combineReducers({
  indexData: indexPageReducer,
  shopData: shopPageReducer,
  regData: regPageReducer,
  headerData: headerReducer,
  purchaseData: purchaseReducer,
  reviewData: reviewReducer,
  enrollmentData: enrollmentReducer
});

export default rootReducer;
