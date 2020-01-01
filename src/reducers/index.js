import { combineReducers } from "redux";

import userReducer from "./user";
import cardReducer from "./card";

export default combineReducers({
  user: userReducer,
  card: cardReducer
});
