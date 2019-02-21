import { combineReducers } from "redux";

import indexPageReducer from "./indexPageReducer";
import shopPageReducer from "./shopPageReducer";
import regPageReducer from "./regPageReducer";

const rootReducer = combineReducers({
  indexData: indexPageReducer,
  shopData: shopPageReducer,
  regData: regPageReducer
});

export default rootReducer;
