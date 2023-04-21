import { combineReducers } from "redux";
import { sessionReducer } from "./sessions/reducer";

const rootReducer = combineReducers({
  sessions: sessionReducer,
});

export default rootReducer;
