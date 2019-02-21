import { combineReducers } from "redux";

import indexPageReducer from "./indexPageReducer";
import shopPageReducer from "./shopPageReducer";
import regPageReducer from "./regPageReducer";
import headerReducer from "./headerReducer";

const rootReducer = combineReducers({
  indexData: indexPageReducer,
  shopData: shopPageReducer,
  regData: regPageReducer,
  headerData: headerReducer
});

export default rootReducer;
