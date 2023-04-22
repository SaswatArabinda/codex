import { messageReducer } from "./messages/reducer";
import { sessionReducer } from "./sessions/reducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  sessions: sessionReducer,
  messages: messageReducer,
});

export default rootReducer;
